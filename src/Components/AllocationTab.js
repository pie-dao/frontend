import React from "react";
import styled from "styled-components";
import "../react-tabs.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Settlement from "./Charts/Settlement";
import CryptoBasket from "./Charts/CryptoBasket";
import Privacy from "./Charts/Privacy";
import Gaming from "./Charts/Gaming";
import DeFi from "./Charts/DeFi";

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
          <Tab>CSG</Tab>
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
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Overview</Tab>
            </TabList>
            <TabPanel>
              <Container>
              <Content>
                {" "}
                <p className="Ptab">
                  {" "}
                  This ETF is one of the most popular options for investors
                  seeking to establish exposure to long-dated Treasuries, an
                  asset class that is light on credit risk but may offer
                  attractive yields thanks to an extended duration and therefore
                  material interest rate risk. TLT might not be a core holding
                  in a buy-and-hold portfolio, as long-term Treasuries are
                  included in broader-based bond funds such as AGG and BND. But
                  for those looking to extend the duration of their portfolio
                  and potentially enhance the current return offered, this can
                  be a useful product. TLT is efficient from a cost perspective,
                  offers exposure to hundreds of individual securities, and
                  delivers impressive liquidity to those looking to execute a
                  trade quickly. Investors may also wish to consider similar
                  products such VGLT and TLO; the yield and duration of these
                  products may differ slightly, making one potentially more
                  appealing depending on exact investment objectives.
                </p>
              </Content>
              <Content>
                <DeFi />{" "}
              </Content>
              </Container>
            </TabPanel>
            <TabPanel>
              <p>
                Mutant cyclops. Captain of the Planet Express Ship. Love
                interest of Fry.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png"
                alt="Turanga Leela"
              />
            </TabPanel>
            <TabPanel>
              <p>
                A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who
                is Fry's best friend. Built in Tijuana, Mexico, he is the Planet
                Express Ship's cook.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"
                alt="Bender Bending Rodriguez"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Chinese-Martian intern at Planet Express. Fonfon Ru of Kif
                Kroker.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/FuturamaAmyWong.png/140px-FuturamaAmyWong.png"
                alt="Amy Wong"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Many times great-nephew of Fry. CEO and owner of Planet Express
                delivery company. Tenured professor of Mars University.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png"
                alt="Professor Hubert J. Farnsworth"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Alien from Decapod 10. Planet Express' staff doctor and steward.
                Has a medical degree and Ph.D in art history.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png"
                alt="Doctor John Zoidberg"
              />
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default AllocationTab;
