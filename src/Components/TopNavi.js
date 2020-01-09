import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { link, cta } from "../mixpanel";
import ConnectWeb3Button from "./ConnectWeb3Button";

const Container = styled.div`
  display: flex;
  padding: 20px 0;
  margin: 0 5%;
  font-family: var(--secondary-font);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  @media (max-width: 768px) {
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;

  @media (max-width: 768px) {
  }
`;

const A = styled.a`
  color: var(--almost-black);
  text-decoration: none;
  margin-left: 2rem;
  font-size: var(--text-prettysmall);
  :hover {
    opacity: 0.6;
  }
  @media (max-width: 768px) {
    font-size: var(--text-prettysmall-mobile);
    margin-left: 0;
  }
`;

const StyledLink = styled(Link)`
  color: var(--almost-black);
  text-decoration: none;
  margin-left: 2rem;
  font-size: var(--text-prettysmall);
  :hover {
    opacity: 0.6;
  }
  @media (max-width: 768px) {
    font-size: var(--text-prettysmall-mobile);
    margin-left: 0;
  }
`;

const MobileNone = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

const TopNavi = props => {
  return (
    <Container>
      <Left>
        <Link
          onClick={() => link({ position: "navbar", to: "/", type: "logo" })}
          to="/"
        >
          <Logo />
        </Link>
      </Left>
      <Right>
        <A
          onClick={() =>
            link({ position: "navbar", to: "whitepaper", type: "text" })
          }
          className="navbar-item"
          href="https://pie283460.typeform.com/to/uy9NZt"
          target="_blank"
        >
          whitepaper
        </A>
        <MobileNone>
          <StyledLink
            to="/charts"
            onClick={() =>
              link({ position: "navbar", type: "text", to: "charts" })
            }
          >
            charts
          </StyledLink>
        </MobileNone>
        <MobileNone>
          <StyledLink
            to="/investment"
            onClick={() =>
              link({ position: "navbar", to: "investment", type: "text" })
            }
          >
            investment
          </StyledLink>
        </MobileNone>
        <MobileNone>
          <StyledLink
            onClick={() =>
              link({ position: "navbar", to: "discord", type: "text" })
            }
            className="navbar-item"
            to="/discord"
          >
            discord
          </StyledLink>
        </MobileNone>
        <MobileNone>
          {" "}
          <StyledLink
            onClick={() =>
              link({ position: "navbar", to: "contact", type: "text" })
            }
            className="navbar-item"
            to="/discord"
          >
            contact
          </StyledLink>
        </MobileNone>
        <ConnectWeb3Button />
      </Right>
    </Container>
  );
};

export default TopNavi;
