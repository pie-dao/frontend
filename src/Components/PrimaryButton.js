import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  margin: 30px 0 20px 0;
  padding: 20px;
  background-color: #000;
  color: #fff;
  text-align: center;
  font-size: var(--font-main-button);
  font-weight: 700;
  border-radius: 5px;
  border: none;
  transition-property: background-color, color;
  transition-duration: 0.3s;

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
  }

  @media (max-width: 800px) {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 2%;
  }
`;



const PrimaryButton = props => {
    return (
      <Button>{props.ButtonLabel}</Button>
    );
  };
  
  export default PrimaryButton;