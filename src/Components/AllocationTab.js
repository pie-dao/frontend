import React from "react";
import styled from "styled-components";
import "../react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CryptoBasket from "./Charts/CryptoBasket";
import DeFi from "./Charts/DeFi";
import TLT from "./Charts/TLT";
import GSG from "./Charts/GSG";
import GLD from "./Charts/GLD";
import IEI from "./Charts/IEI";
import VTI from "./Charts/VTI";
import AWP from "./Charts/AWP";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
  }
`;

const Content = styled.div`
  display: flex;
  width: 50%;
  @media (max-width: 768px) {
    width: auto;
  }
`;

const AllocationTab = props => {
  return (
    <section className="content center verticalMargins">
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>AWP++</Tab>
          <Tab>Crypto Pie</Tab>
          <Tab>VTI</Tab>
          <Tab>TLT</Tab>
          <Tab>GSG</Tab>
          <Tab>GLD</Tab>
          <Tab>IEI</Tab>
        </TabList>
        <TabPanel>
          <Container>
            <Content>
              {" "}
              <p className="Ptab">
                The All-Weather Portfolio is a buy and hold strategy that
                allocates your assets in such a way that it should get you
                through different market regimes.
                <br></br>
                Ray Dalio explains that there are only really 4 market
                environments (which he calls seasons) that can move the price of
                an asset. Additionally, each season is favorable to specific
                asset types.
                <br></br>
                As such, the idea is to try and maintain 25% of your total risk
                in each season so that the portfolio can be truly balanced.
                <br></br>
                We are taking this approach to a step further by adding a 10%
                exposure to a basket of crypto assets
              </p>
            </Content>
            <Content>
              <AWP />
            </Content>
          </Container>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList className="noborder lightWeight">
              <Tab>Overview</Tab>
              <Tab>DeFi</Tab>
            </TabList>
            <TabPanel>
              <Container>
                <Content>
                  {" "}
                  <p className="Ptab">
                    {" "}
                    The crypto basket, allocated for a maximum of 10%, aims to
                    give exposure to different assets in the blockchain
                    industry.
                  </p>
                </Content>
                <Content>
                  <CryptoBasket />{" "}
                </Content>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container>
                <Content>
                  {" "}
                  <p className="Ptab">
                    {" "}
                    The DeFI Basket is composed of an 11.11% allocation each
                    between: Dex: ZRX/SNX/BNT/KNC/LRC Misc: MKR/MLN/REN/LINK
                  </p>
                </Content>
                <Content>
                  <DeFi />{" "}
                </Content>
              </Container>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Container>
            <Content>
              {" "}
              <p className="Ptab">
                {" "}
                This ETF offers broad exposure to the U.S. equity market,
                investing in thousands of different securities across all
                sectors. That makes VTI an appealing option for investors
                looking to simplify their portfolios and minimize rebalancing
                obligations, as this fund can serve as a core holding of a
                long-term portfolio.
                <br></br>
                VTI can potentially be useful as a tool for establishing quick
                exposure to risky assets, though most shorter-term traders with
                that objective will gravitate towards products such as SPY
                instead.
                <br></br>
                One of the most attractive aspects of VTI, in addition to the
                extremely broad base of holdings and balance of exposure, is the
                price.
                <p>
                  <a href="https://etfdb.com/etf/VTI/">Learn More</a>
                </p>
              </p>
            </Content>
            <Content>
              <VTI />
            </Content>
          </Container>
        </TabPanel>
        <TabPanel>
          <Container>
            <Content>
              {" "}
              <p className="Ptab">
                {" "}
                This ETF is one of the most popular options for investors
                seeking to establish exposure to long-dated Treasuries, an asset
                class that is light on credit risk but may offer attractive
                yields thanks to an extended duration and therefore material
                interest rate risk.
                <br></br>
                TLT is efficient from a cost perspective, offers exposure to
                hundreds of individual securities, and delivers impressive
                liquidity to those looking to execute a trade quickly.
                <br></br>
                <p>
                  <a href="https://etfdb.com/etf/TLT/">Learn More</a>
                </p>
              </p>
            </Content>
            <Content>
              <TLT />
            </Content>
          </Container>
        </TabPanel>
        <TabPanel>
          <Container>
            <Content>
              {" "}
              <p className="Ptab">
                {" "}
                This ETF technically offers broad commodity exposure, but the
                underlying index is tilted heavily towards energy resources.
                <br></br>
                Crude oil, natural gas, and other energy commodities make up
                close to 70% of the exposure, meaning that metals and livestock
                are under-represented in this products.
                <br></br>
                GSG is essentially a cross between a pure energy ETF such as DBE
                and a more broad-based commodity fund such as DBC or USCI.
                <p>
                  <a href="https://etfdb.com/etf/GSG/">Learn More</a>
                </p>
              </p>
            </Content>
            <Content>
              <GSG />
            </Content>
          </Container>
        </TabPanel>
        <TabPanel>
          <Container>
            <Content>
              {" "}
              <p className="Ptab">
                {" "}
                GLD is one of the most popular ETFs in the world, offering
                exposure to an asset class that has become increasingly
                important to the asset allocation process in recent years.
                <br></br>
                GLD can be used in a number of different ways; some may
                establish short term positions as a way of hedging against
                equity market volatility, dollar weakness, or inflation.
                <br></br>
                Others may wish to include gold exposure as part of a long-term
                investment strategy. GLD is a relatively straightforward
                product; the underlying assets consist of gold bullion stored in
                secure vaults.
                <p>
                  <a href="https://etfdb.com/etf/GLD/">Learn More</a>
                </p>
              </p>
            </Content>
            <Content>
              <GLD />
            </Content>
          </Container>
        </TabPanel>
        <TabPanel>
          <Container>
            <Content>
              {" "}
              <p className="Ptab">
                {" "}
                This ETF offers exposure to Treasurys with three to seven years
                to maturity, providing relatively little interest rate risk but
                delivering higher returns than short-term products such as SHY.
                IEI can be a nice tool for fine tuning fixed income exposure,
                and is rather efficient from a cost perspective.
                <p>
                  <a href="https://etfdb.com/etf/IEI/">Learn More</a>
                </p>
              </p>
            </Content>
            <Content>
              <IEI />
            </Content>
          </Container>
        </TabPanel>
       
      </Tabs>
    </section>
  );
};

export default AllocationTab;
