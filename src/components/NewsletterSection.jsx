/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';

import newsletterSection from '../stores/newsletterSection';

const NewsletterSection = () => {
  return (
    <div className="newsletter lg:py-100px lg:px-10pc" id="subscribe-to-newsletter">
      <div className="pretitle font-bolder lg:text-big">
        Be on top of the game
      </div>
      <div className="smalltext">Zero fee for the first 500 Beta-testers</div>
      <form
        action="https://dexlab.us17.list-manage.com/subscribe/post?u=98c7ba21bb6d63c6d14827c6e&amp;id=a51cc8153c"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="newsletter-form validate"
        onSubmit={newsletterSection.updateNow}
        target="_blank"
        noValidate=""
      >
        <section className="newsletterField">
          <input
            id="mce-EMAIL"
            type="email"
            placeholder="Your@email.here"
            name="EMAIL"
            className="newsletter-input required email newsletterInput"
          />
          <label
            htmlFor="mce-EMAIL"
            className="screenreader"
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
          >
            email
          </label>
          <div className="mc-field-group input-group none">
            <ul>
              <li>
                <input
                  className="none"
                  type="checkbox"
                  value="2"
                  name="group[7603][2]"
                  id="mce-group[7603]-7603-0"
                  defaultChecked
                />
                <label className="none" htmlFor="mce-group[7603]-7603-0">pie500</label>
              </li>
            </ul>
          </div>

          <div id="mce-responses none" className="clear">
            <div
              className="response"
              id="mce-error-response"
            />
            <div
              className="response none"
              id="mce-success-response"
            />
          </div>
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_98c7ba21bb6d63c6d14827c6e_a51cc8153c"
              tabIndex="-1"
            />
          </div>
          <button type="submit" className="btn w-100pc">
            Get early access
          </button>
        </section>
      </form>
      <div className="urgency">
        <div className="label-black">{newsletterSection.subscribers}</div>
        / 500 Hurry Up!
      </div>
    </div>
  );
};

export default view(NewsletterSection);
