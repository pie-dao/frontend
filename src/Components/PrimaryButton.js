import React from "react";
import styled from "styled-components";
import { cta } from "../mixpanel";

const Button = styled.button`
  min-width: 150px;
  margin: 10px 0 20px 0;
  padding: 20px;
  /* background-color: #D71B97; */
  color: #fff;
  text-align: center;
  font-size: var(--font-main-button);
  font-weight: 700;
  border-radius: 5px;
  border: none;
  transition-property: background-color, color;
  transition-duration: 0.3s;
  background: linear-gradient(-60deg, #cb1a8f, #fc02a7);
  background-size: 100%;

  :hover {
    opacity: 0.8;
    color: #fff;
    cursor: pointer;
  }

  :focus {
    outline: none;
  }

  :disabled {
    pointer-events: none;
    background: grey;
  }

  @media (max-width: 800px) {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 4% 0;
  }
`;

const PrimaryButton = props => {
  return (
    <Button
      onClick={() => {
        cta({
          position: "hero",
          to: "/investment",
          type: "button",
          label: "Get early access"
        });
        props.onClick();
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
