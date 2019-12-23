import React from 'react';
import styled from "styled-components";
import Collapsible from 'react-collapsible';

const Container = styled.div`
display: flex;
padding: 20px 0;
margin: 0 5%;
font-family: var(--secondary-font);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Gradient = styled.div`
width: 100%;
padding:1px;
margin: -1px 0 0 0;
background: linear-gradient(to right, #F10096 0%, #21D7FF 100%);
font-size: var(--text-normal);

  @media (max-width: 768px) {
  
    width: 100%;
    font-size: var(  --text-medium-mobile);
    
  }
`;

const SingleItem = styled.div`
display: flex;
background-color: #ffffff;
padding: 15px 5px 15px 15px;
font-family: var(--primary-font);
font-weight: 300;
:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;


const FAQ = props => {
    return (
        <Container>
            <Gradient>
                <SingleItem>
        <Collapsible trigger="Who the hell is Ray Dalio?">
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
      </SingleItem>
      </Gradient>
      </Container>    );
  };
  
  export default FAQ;