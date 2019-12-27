import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import CompoundAPR from "./CompoundAPR";

const Contenitore = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 0 5%;

  @media (max-width: 768px) {
    margin: 5% 0 0 0;
    padding: 0;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 2% 80px 0;

  @media (max-width: 768px) {
    margin: 5% 0 0 0;
    padding: 0;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0 80px 2%;

  @media (max-width: 768px) {
    margin: 5% 0 0 0;
    padding: 0;
  }
`;

const Title = styled.div`
  text-align: center;
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
  padding: 0;
  line-height: 1.5rem;

  @media (max-width: 768px) {
    font-size: var(--text-medium-mobile);
    padding: 0 0;
  }
`;

const AWPDetail = props => {
  return (
    <Contenitore>
      <Left>
        <CompoundAPR />
      </Left>

      <Right>
        <Title>DeFi Lending is doomed</Title>
        <Text>
          The crypto basket, allocated for a maximum of 10%, aims to give
          exposure to different assets in the blockchain industry between:
        </Text>
        <PrimaryButton ButtonLabel="Buy Now" />
      </Right>
    </Contenitore>
  );
};

export default AWPDetail;
