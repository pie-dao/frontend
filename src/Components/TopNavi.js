import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { link, cta } from "../mixpanel";
import ConnectWeb3Button from "./ConnectWeb3Button";
import "../menu.css";

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

const Hamburger = styled.button`
  border: none;
  background: transparent;
  text-decoration: none;
  padding: 0;
  margin: 0 0 0 20px;
  :hover {
    outline: none;
  }
  :focus {
    outline: none;
  }
  @media (max-width: 768px) {
  }
`;

class TopNavi extends React.Component {
  state = {
    mobileMenuVisible: false
  };

  componentDidMount() {}

  render() {
    const { mobileMenuVisible } = this.state;
    const { mixpanel } = this.props;
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
          <MobileNone>
            <StyledLink
              to="/portfolio"
              onClick={() =>
                link({ position: "navbar", to: "portfolio", type: "text" })
              }
            >
              portfolio
            </StyledLink>
          </MobileNone>
          <MobileNone>
            <StyledLink
              to="/add-remove"
              onClick={() =>
                link({ position: "navbar", to: "add-remove", type: "text" })
              }
            >
              add/remove
            </StyledLink>
          </MobileNone>
          <MobileNone>
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
          </MobileNone>
          <MobileNone></MobileNone>

          {/* <MobileNone>
          <StyledLink
            onClick={() =>
              link({ position: "navbar", to: "contact", type: "text" })
            }
            className="navbar-item"
            target="_blank"
            to="/discord"
          >
            discord
          </StyledLink>
        </MobileNone> */}
          <ConnectWeb3Button />
          <Hamburger
            className="ou mobile"
            id="trigger-overlay"
            type="button"
            onClick={() =>
              this.setState({ mobileMenuVisible: !mobileMenuVisible })
            }
          >
            <img
              src="/img/hamburgerIcon.svg"
              height="19"
              alt="hamburger icon"
            />
          </Hamburger>
          {mobileMenuVisible && (
            <div className="overlay overlay-hugeinc open">
              <button
                type="button"
                className="overlay-close"
                onClick={() =>
                  this.setState({ mobileMenuVisible: !mobileMenuVisible })
                }
              >
                Close
              </button>
              <nav>
                <ul>
                  <li>
                    <StyledLink
                      onClick={() => {
                        link({ position: "navbar", to: "/", type: "logo" });
                        this.setState({
                          mobileMenuVisible: !mobileMenuVisible
                        });
                      }}
                      to="/"
                    >
                      home
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink
                      to="/portfolio"
                      onClick={() => {
                        link({
                          position: "navbar",
                          to: "portfolio",
                          type: "text"
                        });
                        this.setState({
                          mobileMenuVisible: !mobileMenuVisible
                        });
                      }}
                    >
                      portfolio
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink
                      to="/add-remove"
                      onClick={() => {
                        link({
                          position: "navbar",
                          to: "add-remove",
                          type: "text"
                        });
                        this.setState({
                          mobileMenuVisible: !mobileMenuVisible
                        });
                      }}
                    >
                      add/remove
                    </StyledLink>
                  </li>
                  <li>
                    <A
                      onClick={() => {
                        link({
                          position: "navbar",
                          to: "whitepaper",
                          type: "text"
                        });
                        this.setState({
                          mobileMenuVisible: !mobileMenuVisible
                        });
                      }}
                      className="navbar-item"
                      href="https://pie283460.typeform.com/to/uy9NZt"
                      target="_blank"
                    >
                      whitepaper
                    </A>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </Right>
      </Container>
    );
  }
}

export default TopNavi;
