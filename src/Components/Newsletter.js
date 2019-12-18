import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--accent-color);
  margin: 0;
  padding: 100px 40px;
  font-size: var(--p-text);
  line-height: 1.8rem;
  background-color: #ffee00;

  @media (max-width: 680px) {
    flex-wrap: wrap;
  }
`;

const Input = styled.input`
  min-width: 200px;
  border: solid 1px var(--black);
  border-radius: 0.4rem;
  padding: 20px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  margin-right: 20px;

  ::placeholder {
    color: var(--medium-grey);
    font-size: var(--p-text);
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
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;
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
      <form
        action="https://dexlab.us17.list-manage.com/subscribe/post?u=98c7ba21bb6d63c6d14827c6e&amp;id=a51cc8153c"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate=""
      >
        <PreTitle>Don't get left behind</PreTitle>
        <section className="newsletterField">
          <Input
            id="mce-EMAIL"
            type="email"
            placeholder="Your@email.here"
            name="EMAIL"
            className="required email newsletterInput"
          />
          <label for="mce-EMAIL" class="screenreader">
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
                  <label for="mce-group[7603]-7603-0">
                  pie500
                </label>
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
          <section className="mainButton clear">
            <button
              type="submit"
              id="mc-embedded-subscribe"
              className="button newsletterButton"
            >
              Subscribe
            </button>
          </section>
        </section>
      </form>
    </Container>
  );
}

export default Newsletter;
