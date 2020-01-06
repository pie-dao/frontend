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
  }
`;

const Content = styled.div`
  display: flex;
  width: 50%;
  @media (max-width: 768px) {
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
                interest rate risk. TLT might not be a core holding in a
                buy-and-hold portfolio, as long-term Treasuries are included in
                broader-based bond funds such as AGG and BND. But for those
                looking to extend the duration of their portfolio and
                potentially enhance the current return offered, this can be a
                useful product. TLT is efficient from a cost perspective, offers
                exposure to hundreds of individual securities, and delivers
                impressive liquidity to those looking to execute a trade
                quickly. Investors may also wish to consider similar products
                such VGLT and TLO; the yield and duration of these products may
                differ slightly, making one potentially more appealing depending
                on exact investment objectives.
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
                This ETF technically offers broad commodity exposure, but the underlying index is tilted heavily towards energy resources. Crude oil, natural gas, and other energy commodities make up close to 70% of the exposure, meaning that metals and livestock are under-represented in this products. GSG is essentially a cross between a pure energy ETF such as DBE and a more broad-based commodity fund such as DBC or USCI. We don't see GSG as a tremendously useful product; those seeking energy exposure would be better off in an oil ETF, while those seeking balanced commodity exposure should gravitate towards DBS or USCI.
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
                GLD is one of the most popular ETFs in the world, offering exposure to an asset class that has become increasingly important to the asset allocation process in recent years. GLD can be used in a number of different ways; some may establish short term positions as a way of hedging against equity market volatility, dollar weakness, or inflation. Others may wish to include gold exposure as part of a long-term investment strategy. GLD is a relatively straightforward product; the underlying assets consist of gold bullion stored in secure vaults. As such, the price of this ETF can be expected to move in lock step with spot gold prices. The physically-backed nature of this product eliminates any of the uncertainties introduced through futures-based strategies, though investors also have the option to approach this precious metal through futures-based funds such as UBG and DGL. The primary alternatives to GLD are other physically-backed gold ETFs, including AGOL, SGOL, and IAU. The first two on that list may appeal to investors looking to vault their gold outside of New York and London; AGOL stores bullion in Singapore, while SGOL's vaults are located in Switzerland. IAU is, in our opinion, represents a better way to play gold through the exchange-traded structure. While the underlying assets are similar and interchangeable, the expense ratios on these two funds are not. IAU is cheaper by 15 basis points; that margin isn't enormous, but is enough to essentially guarantee that GLD will lag behind IAU in terms of performance. Investors in IAU give up very little in the way of liquidity (that fund is massive as well) and will add a few basis points to their bottom lines. Bigger isn't always better; GLD is certainly an efficient tool for adding gold to a portfolio, but there is a better option out there that should be appealing particularly to cost conscious investors.            </p>
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
                This ETF offers exposure to Treasurys with three to seven years to maturity, providing relatively little interest rate risk but delivering higher returns than short-term products such as SHY. IEI can be a nice tool for fine tuning fixed income exposure, and is rather efficient from a cost perspective.   </p>         </Content>
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
                This ETF offers broad exposure to the U.S. equity market, investing in thousands of different securities across all sectors. That makes VTI an appealing option for investors looking to simplify their portfolios and minimize rebalancing obligations, as this fund can serve as a core holding of a long-term portfolio. VTI can potentially be useful as a tool for establishing quick exposure to risky assets, though most shorter-term traders with that objective will gravitate towards products such as SPY instead. One of the most attractive aspects of VTI, in addition to the extremely broad base of holdings and balance of exposure, is the price. This ETF is one of the cheapest products available, and the ability to trade commission free within a Vanguard account further increases the appeal to cost-conscious investors. For those looking to minimize fees, VTI will fit right into a portfolio. One attribute worth noting, however, is the tilt towards large caps. While VTI includes companies of all sizes, the allocations to mid caps and small caps are not significant. Those seeking more balanced exposure to U.S. equities may want to use VTI alongside more targeted products focusing on smaller companies.   </p>         </Content>
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
