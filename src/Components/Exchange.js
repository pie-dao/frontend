import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "./Input";
import { link, cta } from "../mixpanel";
import { useWeb3React, useTokenContract, useExchangeContract } from "../hooks";
import { useTransactionAdder } from "../contexts/Transactions";
import { useAddressBalance, useExchangeReserves } from "../contexts/Balances";
import { useAddressAllowance } from "../contexts/Allowances";
import { isAddress, amountFormatter } from "../utils";
import { DAI_ADDRESS, AWP_ADDRESS, DAI_EXCHANGE, AWP_EXCHANGE } from "../constants";
import PrimaryButton from "./PrimaryButton";
import ConnectWalletButton from "./ConnectWalletButton";
import IF from "./IF";
import {ethers} from "ethers";
import { track, trackError } from "../txTracker";
import { useUniswapTokensSold, useUniswapTokensBought } from "../contexts/UniswapActions";


const ETH_TO_TOKEN = 0
const TOKEN_TO_ETH = 1
const TOKEN_TO_TOKEN = 2

const INPUT = 0;
const OUTPUT = 1;

const maxSlippage = 0.995;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  @media (max-width: 768px) {
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid ${props => props.error ? "red" : "#cccccc" };
  border-radius: 4px;
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 5%;

  }
`;

const ExchangeRateLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 15px;
  border-radius: 4px;
  background-color: var(--almost-black);
  color: var(--white);
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 5%;
  }
`;

const SlippageLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px 0 15px;
  background-color: var(--white);
  color: var(--almost-black);
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 5%;
  }
`;

const Arrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 20px 0;

  @media (max-width: 768px) {
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: var(--text-prettysmall);
  font-weight: 300;
  @media (max-width: 768px) {
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
  }
`;

const Left = styled.div`
  display: flex;
  flex-grow: 1;
  @media (max-width: 768px) {
  }
`;

const Right = styled.div`
  display: flex;
  @media (max-width: 768px) {
  }
`;

const SelectButton = styled.button`
  -webkit-box-align: center;
  align-items: center;
  font-size: 1rem;
  color: var(--almost-black);
  height: 2rem;
  background-color: var(--white);
  cursor: pointer;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(51, 51, 51);
  border-image: initial;
  border-radius: 2.5rem;
  outline: none;
  padding: 0 10px;
  @media (max-width: 768px) {
  }
`;

const InsideButton = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  @media (max-width: 768px) {
  }
`;

const SVG = styled.svg`
  width: 1rem;
  height: 1rem;
  margin: 0 5px;
  @media (max-width: 768px) {
  }
`;

const IMG = styled.img`
  width: 1rem;
  height: 1rem;
  margin: 0 5px 0 0;
  @media (max-width: 768px) {
  }
`;

const BuyButtons = props => {
  
  if(!props.sufficientAllowance) {
    return (
      <>
        <PrimaryButton onClick={props.approve}>Unlock DAI</PrimaryButton>
      </>
    );
  } else {
    return (
      <>
        <PrimaryButton disabled={props.inputError} onClick={props.buy}>Buy</PrimaryButton>
      </>
    )
  }
  
};


function getExchangeRate(inputValue, inputDecimals, outputValue, outputDecimals, invert = false) {
  try {
    if (
      inputValue &&
      (inputDecimals || inputDecimals === 0) &&
      outputValue &&
      (outputDecimals || outputDecimals === 0)
    ) {
      const factor = ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(18))

      if (invert) {
        return inputValue
          .mul(factor)
          .div(outputValue)
          .mul(ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(outputDecimals)))
          .div(ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(inputDecimals)))
      } else {
        return outputValue
          .mul(factor)
          .div(inputValue)
          .mul(ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(inputDecimals)))
          .div(ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(outputDecimals)))
      }
    }
  } catch {}
}


function getMarketRate(
  swapType,
  inputReserveETH,
  inputReserveToken,
  inputDecimals,
  outputReserveETH,
  outputReserveToken,
  outputDecimals,
  invert = false
) {
  if (swapType === ETH_TO_TOKEN) {
    return getExchangeRate(outputReserveETH, 18, outputReserveToken, outputDecimals, invert)
  } else if (swapType === TOKEN_TO_ETH) {
    return getExchangeRate(inputReserveToken, inputDecimals, inputReserveETH, 18, invert)
  } else if (swapType === TOKEN_TO_TOKEN) {
    const factor = ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(18))
    const firstRate = getExchangeRate(inputReserveToken, inputDecimals, inputReserveETH, 18)
    const secondRate = getExchangeRate(outputReserveETH, 18, outputReserveToken, outputDecimals)
    try {
      return !!(firstRate && secondRate) ? firstRate.mul(secondRate).div(factor) : undefined
    } catch {}
  }
}

// this mocks the getInputPrice function, and calculates the required output
function calculateEtherTokenOutputFromInput(inputAmount, inputReserve, outputReserve) {
  const inputAmountWithFee = inputAmount.mul(ethers.utils.bigNumberify(997))
  const numerator = inputAmountWithFee.mul(outputReserve)
  const denominator = inputReserve.mul(ethers.utils.bigNumberify(1000)).add(inputAmountWithFee)
  return numerator.div(denominator)
}

// this mocks the getOutputPrice function, and calculates the required input
function calculateEtherTokenInputFromOutput(outputAmount, inputReserve, outputReserve) {
  const numerator = inputReserve.mul(outputAmount).mul(ethers.utils.bigNumberify(1000))
  const denominator = outputReserve.sub(outputAmount).mul(ethers.utils.bigNumberify(997))
  return numerator.div(denominator).add(ethers.constants.One)
}

function calcDependentValue(inputReserveEth, inputReserveToken, outputReserveEth, outputReserveToken, amount, inverse = false) {
  
  if(inverse) {
    const intermediateValue = calculateEtherTokenInputFromOutput(amount, outputReserveEth, outputReserveToken );
    const calculatedDependentValue = calculateEtherTokenInputFromOutput(
      intermediateValue,
      inputReserveToken,
      inputReserveEth,

    );
    return calculatedDependentValue;

  } else {
    const intermediateValue = calculateEtherTokenOutputFromInput(amount, inputReserveToken, inputReserveEth);
    const calculatedDependentValue = calculateEtherTokenOutputFromInput(
      intermediateValue,
      outputReserveEth,
      outputReserveToken
    );
    // ethers.utils.parseEther("1").mul(10**18).div(calculatedDependentValue);
    return calculatedDependentValue;
  }  
  
}

const Exchange = props => {
  const { account } = useWeb3React();

  const daiBalance = amountFormatter(
    useAddressBalance(account, isAddress(DAI_ADDRESS))
  );
  const awpBalance = amountFormatter(
    useAddressBalance(account, isAddress(AWP_ADDRESS))
  );
  const daiAllowance = useAddressAllowance(account, isAddress(DAI_ADDRESS), isAddress(DAI_EXCHANGE));

  const awpAllowance = amountFormatter(
    useAddressBalance(account, isAddress(AWP_ADDRESS))
  );
  const ethBalance = amountFormatter(useAddressBalance(account), "ETH");

  const addTransaction = useTransactionAdder()

  const inputReserveETH = useAddressBalance(DAI_EXCHANGE, "ETH");
  const inputReserveToken = useAddressBalance(DAI_EXCHANGE, isAddress(DAI_ADDRESS));
  const outputReserveETH = useAddressBalance(AWP_EXCHANGE, "ETH");
  const outputReserveToken = useAddressBalance(AWP_EXCHANGE, isAddress(AWP_ADDRESS));

  const tokenContract = useTokenContract(DAI_ADDRESS);
  const exchangeContract = useExchangeContract(DAI_EXCHANGE);

  const marketRate = getMarketRate(
    TOKEN_TO_TOKEN,
    inputReserveETH,
    inputReserveToken,
    18,
    outputReserveETH,
    outputReserveToken,
    18,
  );
  
  const [inputError, setInputError] = useState(null);
  const [inputValue, setInputValue] = useState();
  const [outputValue, setOutputValue] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [leadingInput, setLeadingInput] = useState(0);

  function inputChange(e) {
    setInputValue(e.target.value);
    e.target.value = filterInput(e.target.value);
    let etherAmount = ethers.utils.parseEther(e.target.value);
    let outputValue = calcDependentValue(inputReserveETH, inputReserveToken, outputReserveETH, outputReserveToken, etherAmount);
    setOutputValue(amountFormatter(outputValue));
    setExchangeRate(getExchangeRate(etherAmount, 18, outputValue, 18));
    setLeadingInput(INPUT);
    handleInputError(e.target.value);
  }

  function outputChange(e) {
    setOutputValue(e.target.value);
    e.target.value = filterInput(e.target.value);
    let etherAmount = ethers.utils.parseEther(e.target.value);
    let outputValue = calcDependentValue(inputReserveETH, inputReserveToken, outputReserveETH, outputReserveToken, etherAmount, true);
    setInputValue(amountFormatter(outputValue));
    setExchangeRate(getExchangeRate(outputValue, 18, etherAmount, 18));
    setLeadingInput(OUTPUT);
    handleInputError(amountFormatter(outputValue));
  }

  function handleInputError(amount) {
    if(amount && daiBalance && parseFloat(amount) > parseFloat(daiBalance)) {
      setInputError("Insufficient Balance");
    } else {
      setInputError(null);
    }
  }

  function filterInput(input) {
    if(isNaN(input) || input.trim() == "") {
      input = 0;
    }
    return input;
  }

  function approve() {
    tokenContract.approve(DAI_EXCHANGE, ethers.constants.MaxUint256, {gasLimit: 200000})
    .then((receipt) => {
      // notify.js
      track(receipt.hash);
      // context
      addTransaction(receipt);
    }).catch(error => {
      trackError(error);
    })
  }

  function buy() {
    const minAmount = ethers.utils.parseEther(outputValue).mul(995).div(1000);
    exchangeContract.tokenToTokenSwapInput(ethers.utils.parseEther(inputValue), minAmount, 1, Math.floor(Date.now() / 1000) + 3600, AWP_ADDRESS, {gasLimit: 200000})
    .then(receipt => {
      // notify.js
      track(receipt.hash);
      // context
      addTransaction(receipt);
    })
    .catch(error => {
      trackError(error);
    })
  }

  function sufficientAllowance() {
    if(!daiAllowance || filterInput(inputValue) === 0) { 
      return false;
    }
    return daiAllowance.gt(ethers.utils.parseEther(inputValue));
  }

  function slippage() {
    if(!exchangeRate) {
      return "-";
    }
    return ((1 - amountFormatter(exchangeRate) / amountFormatter(marketRate)) * 100).toFixed(2);
  }

  const minAmount = outputValue ? outputValue * (maxSlippage) : null;

  const tokensBought = useUniswapTokensBought(account, AWP_ADDRESS, AWP_EXCHANGE);
  console.log(tokensBought);

  // const exchangeRate = getExchangeRate(ethers.utils.parseEther(filterInput(inputValue)), 18, ethers.utils.parseEther(filterInput(outputValue)), 18);

  return (
    <Container>
      {/* <Title>Buy AWP++ Token now</Title> */}
      <InputContainer error={inputError}>
        <Top>
          <Left>Input</Left>
          <Right>Balance: { daiBalance } DAI</Right>
          {/* { inputError } */}
        </Top>
        <Bottom>
          <Left>
            {" "}
            <Input onChange={inputChange} value={inputValue} inpPlaceholder="0.0" inpType="number" inpID="invest" />
          </Left>
          <Right>
            <SelectButton>
              <InsideButton>
              <IMG
                  src="../img/dai.png"
                  className="DAI-logo"
                  alt="logo"
                />
                <span>DAI</span>
                {/* <SVG
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  class="sc-iQKALj bleFDA"
                >
                  <path
                    d="M0.97168 1L6.20532 6L11.439 1"
                    stroke="#AEAEAE"
                  ></path>
                </SVG> */}
              </InsideButton>
            </SelectButton>
          </Right>
        </Bottom>
      </InputContainer>
      <Arrow>                <SVG
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  class="sc-iQKALj bleFDA"
                >
                  <path
                    d="M0.97168 1L6.20532 6L11.439 1"
                    stroke="#AEAEAE"
                  ></path>
                </SVG></Arrow>
      <InputContainer>
        <Top>
          <Left>Output</Left>
          <Right></Right>
        </Top>
        <Bottom>
          <Left>
            {" "}
            <Input onChange={outputChange} value={outputValue} inpPlaceholder="0.0" inpType="number" inpID="invest" />
          </Left>
          <Right>
            <SelectButton>
              <InsideButton>
                <IMG
                  src="../img/portfolio_02.png"
                  className="AWP-logo"
                  alt="logo"
                />
                <span>AWP ++</span>
              </InsideButton>
            </SelectButton>
          </Right>
        </Bottom>
      </InputContainer>
      <ExchangeRateLabel>
        <Top>
          <Left>Exchange Rate</Left>
          <Right>1 AWP ++ = {amountFormatter(exchangeRate) || amountFormatter(marketRate) || "-"} DAI</Right>  
        </Top>
        <Top>
          <Left>Minimum Output amount</Left>
          <Right>{minAmount ? minAmount.toFixed(4) : "-"} AWP++</Right>
          ;
        </Top>
      </ExchangeRateLabel>
      <SlippageLabel>
        <Top>
          <Left>Potential Slippage</Left>
              <Right>{slippage()}%</Right>
        </Top>
      </SlippageLabel>

      <IF what={!account} else={<BuyButtons inputError={inputError} approve={approve} buy={buy} sufficientAllowance={sufficientAllowance()} />}>
        <ConnectWalletButton />
      </IF>
    </Container>
  );
};

export default Exchange;
