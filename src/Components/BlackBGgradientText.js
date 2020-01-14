import React from "react";
import styled from "styled-components";

const BlackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--secondary-font);
  background-color: var(--almost-black);
  padding: 10% 0;

  @media (max-width: 768px) {
    padding: 10% 0;
  }
`;

const Title = styled.div`
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-ratherbig);
  font-weight: 700;
  text-align: center;
  background: linear-gradient(to right, #ffe2fa 0%, #cceff3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const BlackBGgradientText = props => {
  return (
    <BlackContainer>
      <section className="content center">
        <Title>{props.BlackBGgradientContent}</Title>
      </section>
    </BlackContainer>
  );
};

export default BlackBGgradientText;
