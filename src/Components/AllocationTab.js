import React from "react";
import styled from "styled-components";
import "../react-tabs.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Settlement from "./Charts/Settlement";
import CryptoBasket from "./Charts/CryptoBasket";
import Privacy from "./Charts/Privacy";
import Gaming from "./Charts/Gaming";
import DeFi from "./Charts/DeFi";
import TLT from "./Charts/TLT";
import GSG from "./Charts/GSG";
import GLD from "./Charts/GLD";
import IEI from "./Charts/IEI";
import VTI from "./Charts/VTI";

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
      <Tabs forceRenderTabPanel defaultIndex={0}>
        <TabList>
          <Tab>Crypto</Tab>
          <Tab>TLT</Tab>
          <Tab>GSG</Tab>
          <Tab>GLD</Tab>
          <Tab>IEI</Tab>
          <Tab>VTI</Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className="noborder lightWeight">
              <Tab>Overview</Tab>
              <Tab>Settlement Layer</Tab>
              <Tab>Privacy</Tab>
              <Tab>Gaming</Tab>
              <Tab>DeFi</Tab>
            </TabList>
            <TabPanel>
              <Container>
                <Content>
                  {" "}
                  <p className="Ptab">
                    {" "}
                    The crypto basket, allocated for a maximum of 10%, aims to
                    give exposure to different assets in the blockchain industry
                    between:
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
                    The Settlement Layer Basked is composed of a 50/50
                    allocation between the two largest chains in the market.
                  </p>
                </Content>
                <Content>
                  {" "}
                  <Settlement />
                </Content>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container>
                <Content>
                  {" "}
                  <p className="Ptab">
                    {" "}
                    The Privacy Basked is composed of a 33/33/33 allocation
                    between ZEC / XMR / DASH
                  </p>
                </Content>
                <Content>
                  <Privacy />{" "}
                </Content>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container>
                <Content>
                  {" "}
                  <p className="Ptab">
                    The Gaming Basket is composed of a 25% allocation each
                    between: 1ST FUN MANA ENJ
                  </p>
                </Content>
                <Content>
                  <Gaming />{" "}
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
                This ETF is one of the most popular options for investors
                seeking to establish exposure to long-dated Treasuries, an asset
                class that is light on credit risk but may offer attractive
                yields thanks to an extended duration and therefore material
                interest rate risk. TLT is efficient from a cost perspective, offers
                exposure to hundreds of individual securities, and delivers
                impressive liquidity to those looking to execute a trade
                quickly. Investors may also wish to consider similar products
                such VGLT and TLO; the yield and duration of these products may
                differ slightly, making one potentially more appealing depending
                on exact investment objectives.
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
                Crude oil, natural gas, and other energy commodities make up
                close to 70% of the exposure, meaning that metals and livestock
                are under-represented in this products. GSG is essentially a
                cross between a pure energy ETF such as DBE and a more
                broad-based commodity fund such as DBC or USCI. We don't see GSG
                as a tremendously useful product; those seeking energy exposure
                would be better off in an oil ETF, while those seeking balanced
                commodity exposure should gravitate towards DBS or USCI.
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
                important to the asset allocation process in recent years. GLD
                can be used in a number of different ways; some may establish
                short term positions as a way of hedging against equity market
                volatility, dollar weakness, or inflation. Others may wish to
                include gold exposure as part of a long-term investment
                strategy. GLD is a relatively straightforward product; the
                underlying assets consist of gold bullion stored in secure
                vaults.
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
                long-term portfolio. VTI can potentially be useful as a tool for
                establishing quick exposure to risky assets, though most
                shorter-term traders with that objective will gravitate towards
                products such as SPY instead. One of the most attractive aspects
                of VTI, in addition to the extremely broad base of holdings and
                balance of exposure, is the price.
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
      </Tabs>
    </section>
  );
};

export default AllocationTab;
