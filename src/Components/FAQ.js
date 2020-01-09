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
      <section className="content">
        <Title>FAQ</Title>
        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="What is Pie Network?"
              easing="ease-in"
              transitionTime={100}
              triggerTagName="div"
            >
              <p>
                Pie is a decentralized network of individuals backtesting and reaching consensous on asset allocations and DeFi opportunities.
                Pie is governed by the Pie DAO.
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>

        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="What is governance?"
              easing="ease-in"
              transitionTime={100}
              triggerTagName="div"
            >
              <p>
                Governance is a process through which a group of stakeholders come to a decision on a particular change within their system or organization. Many centralized entities have expedited the governance process through the nomination of critical decision makers like board members and executives. 
                In the context of Pie DAO, it is done through a voting system where anyone who owns and has staked PIE can vote on changes to the Asset Allocation within the products offered by Pie Network.
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>

        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="What is a DAO?"
              easing="ease-in"
              transitionTime={100}
              triggerTagName="div"
            >
              <p>
                DAO stands for "Decentralized Autonomous Organization", which is a smart contract system that functions through a governance structure embedded into the code of the system. 
                The organization is made up of all PIE token holders, as they have the sole authority to enact changes to the system. 
                It is decentralized because no single party can have control over the system. 
                It's autonomous in the sense that, once deployed, the system governs itself through the built-in governance structure.
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>
        

        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="What is Pie DAO?"
              easing="ease-in"
              transitionTime={100}
              triggerTagName="div"
            >
              <p>
                PieDAO is a decentralized organization dedicated to bringing accessibility and economic empowerment to anyone with an internet connection. 
                The PIE token holders are the decision makers in the DAO, anybody in the public community is invited to support these efforts.
                Pie Network aims to leverage the power of decentralized finance to create an inclusive platform for economic empowerment for everyone by democratizing the access to best in class asset allocations strategies, removing minimum capital requirement and massively reduce fees; 
                allowing everyone equal access to the global financial marketplace.
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>

        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="How do PIE holders manage the Pie Network?"
              easing="ease-in"
              transitionTime={100}
              triggerTagName="div"
            >
              <p>
                For the Pie Network to be successful, the stakeholders in the system need to collaborate and vote on a variety of parameters. 
                Some examples include: which assets will be included in which index (Ex: AWP++), how much weight a specific asset will have, and the management fees a AWP++ holder is charged. The process is done through an on-chain voting mechanism in the Pie Dao. Stakeholders still have the option of voting directly by interacting with the smart contacts via a friendly user interface.
                <br/> <a href="" target="blank">Request access to Whitepaper</a>
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>

        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="Who is Ray Dalio?"
              easing="ease-in"
              transitionTime={100}
              open={false}
              triggerTagName="div"
            >
              <p>
              Ray Dalio is considered by many the most successful hedge fund manager in history.
              </p>
              <p>
              Raymond Dalio is an American billionaire investor, he is the founder, co-chairman and co-chief investment officer of investment firm Bridgewater Associates, one of the world's largest hedge funds. Bloomberg ranked him as the world's 58th-wealthiest person in June 2019.
              <br/> <a href="https://en.wikipedia.org/wiki/Ray_Dalio" target="blank">Read more on Wikipedia</a>
              </p>
              <p>
                Ray Dalio has been an advocate of diversified asset allocation to counter the impredictability of markets, we are deeply inspired by his work.
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>
        
        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="What's different from Compound?"
              easing="ease-in"
              transitionTime={100}
              triggerTagName="div"
            >
              <p>
                Compound is a transparent, autonomous money market— allowing users & applications to frictionlessly earn interest or borrow Ethereum assets without relying on a counterparty.
                Interest for lenders on Compound are calculated algorithmically at every block, therefore, having predictability on ROI by holding cTokens is challending.
              </p>
              <p>
                Pie asset allocations by comparison are designed to aim for resiliance and a greater degree of predictability.
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>
        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="Is PIE itself a derivative?"
              easing="ease-in"
              transitionTime={100}
              triggerTagName="div"
            >
              <p>
                PIE is not a derivative, it is a protocol for cryptocurrency users to create their own tokenized asset allocation using sythetics assets. PIE is a set of open source smart contracts that can be deployed to the Ethereum blockchain. The Pie Network is nothing more than open source software, and individual users of the Pie Network are the ones that create a tokenized derivative using the Pie Network. The Pie DAO has zero involvement in the creation of individual derivative tokens on the Pie Network, and the Pie DAO is not "Pie Network".
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>

        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="Are asset allocations on the Pie Network binary options, derivatives, CFDs, futures, or options?"
              easing="ease-in"
              transitionTime={100}
              triggerTagName="div"
            >
              <p>
                Asset allocations on Pie Network are created by stakeholder of the Pie Dao and deployed by individual users of the Pie smart contracts.
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>

        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="What does the Pie Dao do and what does it not do?"
              easing="ease-in"
              transitionTime={100}
              triggerTagName="div"
            >
              <p>
                The Pie Dao writes and publishes open source software on Github. There is a test website for developers at dev.pie.network running on the test network of Ethereum (play money). The Pie Network is a set of Solidity smart contracts that exist on the Ethereum blockchain.
              </p>
              <p>
                Among other things, the Pie Dao does not:
                <ul>
                  <li>Operate an exchange</li>
                  <li>Create markets or contracts on the Pie Network</li>
                  <li>Escrow, custody, transfer, or otherwise handle funds or cryptocurrencies on the Pie Network</li>
                  <li>Control who accesses the Pie Network</li>
                </ul>
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>

        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="Which protocol are used inside the Pie Network smart contracts?"
              easing="ease-in"
              transitionTime={100}
              triggerTagName="div"
            >
              <p>
              Pie Dao uses existing DeFi protocols as building blocks to unlock the compounding value of multiple financial primitives. Pie Network combines the use of synthetic asset platforms, and decentralized exchanges. 
              Synthetic asset systems, like Maker, Synthetix, UMA, and the Market Protocol, creates tokens that are pegged to a target asset but backed by a different collateral asset.
              </p>
              <p>
                Among other things, the Pie Network smartcontracts integrate with:
                <ul>
                  <li><a target="blank" href="https://umaproject.org/">UMA Project</a></li>
                  <li><a target="blank" href="https://www.synthetix.io/">Synthetix</a></li>
                  <li><a target="blank" href="https://makerdao.com/en/">MakerDAO</a></li>
                </ul>
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>

        <Gradient>
          <SingleItem>
            <Collapsible
              trigger="What are the risks associated for a retail investor of these tokens? In what situation would an investor lose all of their investments?"
              easing="ease-in"
              transitionTime={100}
              triggerTagName="div"
            >
              <p>
                While Pie and Pie Dao gives no guarantees, it is highly unlikely that the value of the asset in the portfolio allocations will reach zero.
                You are invited to NOT INVEST as you might loose all your money.
              </p>
            </Collapsible>
          </SingleItem>
        </Gradient>

        
      </section>
    </Container>
  );
};

export default FAQ;
