import React, { useState } from "react";
import styled from "styled-components";
import AWPLight from "./Charts/AWPLight";
import PrimaryButton from "./PrimaryButton";
import ReactDOM from "react-dom";
import Slider, { Range } from "rc-slider";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
  padding: 0 5%;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

const Left = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 5%;
  background-color: #efefef;
  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 5%;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  flex-grow: 1;

  @media (max-width: 1000px) {
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
  }
`;

const Title = styled.h1`
  text-align: left;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const Text = styled.div`
  text-align: left;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-normal);
  font-weight: 300;
  padding: 0%;
  line-height: 1.5rem;
  @media (max-width: 768px) {
    font-size: var(--text-medium-mobile);
    padding: 0 0;
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
          <Slider vertical={false} />
        <PrimaryButton>Add Liquidity</PrimaryButton>
      </Left>

      <Right>
        <Title>Add remove</Title>
        <AWPLight />
        <Text>
          We backtested the All Weather Portfolio and the AWP++ against DeFi
          Landing in the last 12 months. Don't take our word for it. Have a look
          at the chart on the left.
        </Text>
        <button
          className="buttonModal"
          ButtonLabel="Buy Now"
          onClick={openModal}
        >
          Buy More
        </button>
      </Right>
    </Container>
  );
};

export default AddRemoveLiquidity;
