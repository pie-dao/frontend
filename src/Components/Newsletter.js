import React from "react";
import styled from "styled-components";
import PrimaryButton from './PrimaryButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 100px 10%;
  font-size: var(--p-text);
  line-height: 1.8rem;
  background: linear-gradient(to right, #f10096 0%, #21d7ff 100%);

  @media (max-width: 680px) {
    flex-wrap: wrap;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  min-width: 300px;
  border: none;
  border-radius: 4px;
  padding: 20px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  margin: 30px 0 0 0;

  ::placeholder {
    color: var(--medium-grey);
    font-size: var(--text-prettysmall);
    text-align: center;
  }

  :focus {
    outline: none !important;
    border: 1px solid var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
  }
  :focus::placeholder {
    color: transparent;
  }
  @media (max-width: 680px) {
    flex-grow: 1;
    margin-right: 0;
  }
`;

const PreTitle = styled.div`
  font-family: var(--primary-font);
  color: var(--white);
  font-size: var(--text-big);
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
  }
`;

const Button = styled.button`
min-width: 300px;
width: 60%;
margin: 20px 0 0 0;
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

const Counter = styled.div`
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-normal);
  font-weight: 500;
  text-align: center;

  @media (max-width: 768px) {
  }
`;

const None = styled.div`
  display: none;
`;

function Newsletter() {
  return (
    <Container>
              <PreTitle>Be on top of the game</PreTitle>

      <Form
        action="https://dexlab.us17.list-manage.com/subscribe/post?u=98c7ba21bb6d63c6d14827c6e&amp;id=a51cc8153c"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate=""
      >
        <section className="newsletterField">
          <Input
            id="mce-EMAIL"
            type="email"
            placeholder="Your@email.here"
            name="EMAIL"
            className="required email newsletterInput"
          />
          <label for="mce-EMAIL" class="screenreader" style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true">
            email
          </label>
          <None class="mc-field-group input-group">
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="2"
                  name="group[7603][2]"
                  id="mce-group[7603]-7603-0"
                  checked
                />
                <label for="mce-group[7603]-7603-0">pie500</label>
              </li>
            </ul>
          </None>

          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_98c7ba21bb6d63c6d14827c6e_a51cc8153c"
              tabIndex="-1"
            />
          </div>
            <Button
              type="submit"
            >Get early access</Button>
        </section>
      </Form>
      <Counter>Spots left 405/500</Counter>
    </Container>
  );
}

export default Newsletter;
