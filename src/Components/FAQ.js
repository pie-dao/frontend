import React from "react";
import styled from "styled-components";
import Collapsible from "react-collapsible";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 0 10% 0;
  font-family: var(--secondary-font);
  background-color: #f6f6f6;

  @media (max-width: 768px) {
  }
`;

const Gradient = styled.div`
  width: 100%;
  padding: 1px;
  margin: -1px 0 0 0;
  background: linear-gradient(to right, #f10096 0%, #21d7ff 100%);
  font-size: var(--text-normal);

  @media (max-width: 768px) {
    width: 100%;
    font-size: var(--text-medium-mobile);
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

const Title = styled.div`
  text-align: center;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const FAQ = props => {
  return (
    <Container>
      <section class="content">
        <Title>FAQ</Title>
        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="Who the hell is Ray Dalio?"
              easing="ease-in"
              transitionTime="100"
              open={false}
              triggerTagName="div"
            >
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>
        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="What about derivatives?"
              easing="ease-in"
              transitionTime="100"
              triggerTagName="div"
            >
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>
        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="How much does PIE cost?"
              easing="ease-in"
              transitionTime="100"
              triggerTagName="div"
            >
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>
        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="How can I invest?"
              easing="ease-in"
              transitionTime="100"
              triggerTagName="div"
            >
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>
        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="Is it better than Compound?"
              easing="ease-in"
              transitionTime="100"
              triggerTagName="div"
            >
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>
        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="Is it safe?"
              easing="ease-in"
              transitionTime="100"
              triggerTagName="div"
            >
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>
      </section>
    </Container>
  );
};

export default FAQ;
