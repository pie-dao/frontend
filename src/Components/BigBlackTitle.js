import React from "react";
import styled from "styled-components";
import { link } from "../mixpanel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--secondary-font);
  background-color: var(--white);
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

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const WP = styled.div`
  font-size: 6rem;
  font-weight: 700;
  text-align: center;
  margin-top: 12px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const A = styled.a`
  color: #f10096;
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const BigBlackTitle = props => {
  return (
    <Container>
      <section className="content center">
        <Title>We promise it's good stuff. Read the Whitepaper</Title>
        <A
          onClick={() =>
            link({ position: "navbar", to: "whitepaper", type: "text" })
          }
          className="navbar-item"
          href="https://pie283460.typeform.com/to/uy9NZt"
          target="_blank"
        >
          <WP>
            <span role="img" aria-label="document">
              📄
            </span>
          </WP>
        </A>
      </section>
    </Container>
  );
};

export default BigBlackTitle;
