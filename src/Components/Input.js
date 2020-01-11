import React from "react";
import styled from "styled-components";

const GenericImput = styled.input`
  display: flex;
  flex-grow: 1;
  min-width: 300px;
  /* border: 1px solid #cccccc; */
  border: none;
  /* border-radius: 4px; */
  padding: 10px 10px 10px 0;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  margin: 0;
  font-size: var(--text-medium);

  ::placeholder {
    color: var(--medium-grey);
    font-size: var(--text-medium);
    text-align: left;
  }

  :focus {
    outline: none !important;
    /* border: 1px solid var(--almost-black); */
    box-shadow: 0 0 10px var(--white);
    font-size: var(--text-medium);
  }
  :focus::placeholder {
    color: transparent;
  }
  @media (max-width: 680px) {
    flex-grow: 1;
    max-width: 18px;
  }
`;

const Input = props => {
  return (
    <GenericImput
      id={props.inpID}
      type={props.inpType}
      placeholder={props.inpPlaceholder}
      name="EMAIL"
      className="required email newsletterInput"
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;
