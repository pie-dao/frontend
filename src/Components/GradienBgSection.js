import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 100px 0;
  background: linear-gradient(to right, #ffe2fa 0%, #cceff3 100%);

  @media (max-width: 768px) {
    padding: 10% 0;
  }
`;

const Text = styled.div`
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 500;
  text-align: left;

  strong {
    font-weight: 700;
  }
  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
    line-height: 2.6rem;
  }
`;

const A = styled.a`
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  :hover {
    opacity: 0.6;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const GradienBgSection = props => {
  return (
    <Container>
      <section className="content center">
        <Text>
          Pie DAO makes diversified asset allocation and rebalancing a piece of cake 🍰<br></br>
          Universal access to anyone on the Ethereum network, with no minimum.
          <br></br>
          <br></br>
          <a href="" target="blank">
            Request Whitepaper
          </a>
        </Text>
      </section>
    </Container>
  );
};

export default GradienBgSection;
