import React, { useState } from "react";
import styled from "styled-components";
import AWPLight from "./Charts/AWPLight";
import PrimaryButton from "./PrimaryButton";
import ReactDOM from "react-dom";
import Slider, { Range } from "rc-slider";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px 0;
  padding: 0 5%;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

const SliderWrapper = styled.div`
  width: 100%;
  margin: 3% 0 5% 0;
  @media (max-width: 1000px) {
  }
`;

const TabNavi = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 1000px) {
  }
`;

const TabItem = styled.button`
  padding: 5px 0;
  margin-right: 15px;
  background-color: transparent;
  color: var(--black);
  text-align: left;
  font-size: var(--font-main-button);
  font-weight: 300;
  border: none;
  @media (max-width: 1000px) {
  }
`;

const TabItemActive = styled.button`
  padding: 5px 0;
  margin-right: 15px;
  background-color: transparent;
  color: var(--black);
  text-align: left;
  font-size: var(--font-main-button);
  font-weight: 700;
  border: none;
  border-bottom: solid 2px black;
  cursor: pointer;
  @media (max-width: 1000px) {
  }
`;

const Left = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 2% 5%;
  border-radius: 6px;
  background-color: #f3f3f3;
  @media (max-width: 1000px) {
    width: 90%;
    margin-top: 5%;
  }
`;

const Right = styled.div`
  width: 64%;
  padding: 2% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  border-radius: 6px;
  background-color: #f3f3f3;
  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0;
    text-align: center;
    width: 100%;
  }
`;

const Column = styled.div`
  width: 44%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: left;
  margin: 0;
  border-radius: 6px;
  background-color: #f3f3f3;

  @media (max-width: 780px) {
    margin: 0;
    text-align: center;
    align-items: center;
    width: 90%;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  text-align: left;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
    text-align: center;
  }
`;

const Amount = styled.div`
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: 7vw;
  font-weight: 700;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-wrap: break-word;
  margin: 5% 0;
  @media (max-width: 768px) {
    font-size: 20vw;
    margin: 5% 0 0 0;
  }
`;

const AWPLabel = styled.div`
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;
  text-align: center;
  /* background: linear-gradient(to right, #F10096 0%, #21D7FF 100%); */
  background: #fc02a7;
  background: linear-gradient(-60deg, #F10096, #21D7FF);
  background-size: 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: flow 7s ease-in-out infinite;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-wrap: break-word;
  /* display: flex;
  flex-direction: column; */

  @keyframes flow {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  @media (max-width: 768px) {
    /* font-size: var(--text-quiteverybig-mobile);
    line-height: 7.5rem; */
    margin: 5% 0;
    font-size: 4rem;
    line-height: 4rem;
  }
`;

const Text = styled.div`
  text-align: left;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-prettysmall);
  font-weight: 300;
  padding: 0%;
  line-height: 1.5rem;
  @media (max-width: 768px) {
    font-size: var(--text-medium-mobile);
    padding: 0 0;
    text-align: justify;
    margin-bottom: 10px;
  }
`;

const UnderlyingAsset = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 320px;
  background-color: white;
  border-radius: 6px;
  border: 0.5px solid #e6e6e6;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    width: 100%;
    min-width: 90%;
    max-width: 360px;
  }
`;


const ColumnLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
  }
`;

const AssetAmount = styled.div`
  text-align: left;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-normal);
  font-weight: 500;
  padding: 5px 10px;
  margin-left: 5px;
  @media (max-width: 768px) {
  }
`;

const AssetWeight = styled.div`
  text-align: left;
  font-family: var(--primary-font);
  color: var(--white);
  font-size: var(--text-normal);
  font-weight: 500;
  padding: 5px 10px;
  margin: 10px;
  background-color: ${props => props.bg};
  border-radius: 4px;
  @media (max-width: 768px) {
  }
`;

const Availability = styled.div`
  min-width: 54px;
  display: flex;
  align-items: center;
  padding: 4px 5px;
  background-color: ${props => props.bg};
  border-radius: 3px;
  margin-left: 10px;
  @media (max-width: 768px) {
  }
`;

const Icon = styled.img`
    height: 15px;
  @media (max-width: 768px) {
    height: 15px;
  }
`;

const Label = styled.div`
  color: var(--white);
  font-size: 11px;
  margin-left: 5px;
  @media (max-width: 768px) {
  }
`;


const AddRemoveLiquidity = props => {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  console.log("render");

  return (
    <Container>
      <Left>
        <TabNavi>
          <TabItemActive>Add Liquidity</TabItemActive>
          <TabItem>Remove Liquidity</TabItem>
        </TabNavi>
        <Amount>21.50</Amount>
        <AWPLabel>AWP++</AWPLabel>
        <SliderWrapper>
          <Slider vertical={false} />
        </SliderWrapper>
        <PrimaryButton>Add Liquidity</PrimaryButton>
      </Left>

      <Right>
        <Column>
          <Title>Liquidity Breakdown</Title>
          <AWPLight />
          <Text>
            We backtested the All Weather Portfolio and the AWP++ against DeFi
            Landing in the last 12 months. Don't take our word for it. Have a
            look at the chart on the left.
          </Text>
        </Column>
        <Column>
        
          <UnderlyingAsset>
          <ColumnLeft>
            <Availability bg="#2db400"><Icon src="../img/available.svg" alt="icon"/><Label>Avail</Label></Availability>
            <AssetAmount>72 TLT</AssetAmount>
            </ColumnLeft>
            <AssetWeight bg="#2db400">36%</AssetWeight>
          </UnderlyingAsset>

          <UnderlyingAsset>
          <ColumnLeft>
            <Availability bg="#2db400"><Icon src="../img/available.svg" alt="icon"/><Label>Avail</Label></Availability>
            <AssetAmount>54 VTI</AssetAmount>
            </ColumnLeft>
            <AssetWeight bg="#79f2c3">27%</AssetWeight>
          </UnderlyingAsset>

          <UnderlyingAsset>
          <ColumnLeft>
            <Availability bg="#F40A50"><Icon src="../img/insufficient.svg" alt="icon"/><Label>Insuff</Label></Availability>
            <AssetAmount>27 IEI</AssetAmount>
            </ColumnLeft>
            <AssetWeight bg="#1ec0ff">13.5%</AssetWeight>
          </UnderlyingAsset>

          <UnderlyingAsset>
          <ColumnLeft>
            <Availability bg="#2db400"><Icon src="../img/available.svg" alt="icon"/><Label>Avail</Label></Availability>
            <AssetAmount>20 CRY</AssetAmount>
            </ColumnLeft>
            <AssetWeight bg="#ffcd1c">10%</AssetWeight>
          </UnderlyingAsset>

          <UnderlyingAsset>
          <ColumnLeft>
            <Availability bg="#2db400"><Icon src="../img/available.svg" alt="icon"/><Label>Avail</Label></Availability>
            <AssetAmount>13.5 GLD</AssetAmount>
            </ColumnLeft>
            <AssetWeight bg="#305cee">6.75%</AssetWeight>
          </UnderlyingAsset>

          <UnderlyingAsset>
          <ColumnLeft>
            <Availability bg="#F40A50"><Icon src="../img/insufficient.svg" alt="icon"/><Label>Insuff</Label></Availability>
            <AssetAmount>13.5 GSG</AssetAmount>
            </ColumnLeft>
            <AssetWeight bg="#9080dc">6.75%</AssetWeight>
          </UnderlyingAsset>

          <UnderlyingAsset>
          <ColumnLeft>
            <Availability bg="#F40A50"><Icon src="../img/insufficient.svg" alt="icon"/><Label>Insuff</Label></Availability>
            <AssetAmount>35 TLT</AssetAmount>
            </ColumnLeft>
            <AssetWeight bg="#2db400">12%</AssetWeight>
          </UnderlyingAsset>

         
        </Column>
      </Right>
    </Container>
  );
};

export default AddRemoveLiquidity;
