import React from 'react';
import styled from 'styled-components';

const Small = styled.div`
font-family: var(--secondary-font);
font-size: var(--text-verysmall);

  @media (max-width: 768px) {
  }
`;



const SmallText = props => {
    return (
      <Small>{props.children}</Small>
    );
  };
  
  export default SmallText;