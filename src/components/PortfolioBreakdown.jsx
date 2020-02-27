/* eslint arrow-body-style: 0 */
/* eslint object-curly-newline: 0 */

import React from 'react';
import { view } from 'react-easy-state';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PropTypes from 'prop-types';
import CryptoBasket from './charts/CryptoBasket';
import DeFi from './charts/DeFi';
import TLT from './charts/TLT';
import GSG from './charts/GSG';
import GLD from './charts/GLD';
import IEI from './charts/IEI';
import VTI from './charts/VTI';
import AWP from './charts/AWP';

const PortfolioBreakdown = ({ mixpanel }) => {
  return (
    <div className="content">
      <section className="PortfolioBreakdown lg:w-90pc lg:mx-5pc">
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab
              onClick={() => {
                mixpanel.track({
                  position: 'portfolio breakdown',
                  type: 'tab navi',
                  label: 'awp++',
                });
              }}
            >
              AWP++
            </Tab>
            <Tab
              onClick={() => {
                mixpanel.track({
                  position: 'portfolio breakdown',
                  type: 'tab navi',
                  label: 'crypto pie',
                });
              }}
            >
              Crypto Pie
            </Tab>
            <Tab
              onClick={() => {
                mixpanel.track({
                  position: 'portfolio breakdown',
                  type: 'tab navi',
                  label: 'VTI',
                });
              }}
            >
              VTI
            </Tab>
            <Tab
              onClick={() => {
                mixpanel.track({
                  position: 'portfolio breakdown',
                  type: 'tab navi',
                  label: 'TLT',
                });
              }}
            >
              TLT
            </Tab>
            <Tab
              onClick={() => {
                mixpanel.track({
                  position: 'portfolio breakdown',
                  type: 'tab navi',
                  label: 'GSG',
                });
              }}
            >
              GSG
            </Tab>
            <Tab
              onClick={() => {
                mixpanel.track({
                  position: 'portfolio breakdown',
                  type: 'tab navi',
                  label: 'GLD',
                });
              }}
            >
              GLD
            </Tab>
            <Tab
              onClick={() => {
                mixpanel.track({
                  position: 'portfolio breakdown',
                  type: 'tab navi',
                  label: 'IEI',
                });
              }}
            >
              IEI
            </Tab>
          </TabList>
          <TabPanel>
            <div className="portfolio-container lg:flex-row">
              <div className="portfolio-content w-50pc">
                <p className="Ptab">
                  The All-Weather Portfolio is a buy and hold strategy that
                  allocates your assets in such a way that it should get you
                  through different market regimes.
                  <br />
                  Ray Dalio explains that there are only really 4 market
                  environments (which he calls seasons) that can move the price of
                  an asset. Additionally, each season is favorable to specific
                  asset types.
                  <br />
                  As such, the idea is to try and maintain 25% of your total risk
                  in each season so that the portfolio can be truly balanced.
                  <br />
                  We are taking this approach to a step further by adding a 10%
                  exposure to a basket of crypto assets
                </p>
              </div>
              <div className="portfolio-content w-50pc">
                <AWP />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList className="noborder lightWeight">
                <Tab
                  onClick={() => {
                    mixpanel.track({
                      position: 'portfolio breakdown',
                      type: 'tab navi',
                      label: 'crypto overview',
                    });
                  }}
                >
                  Overview
                </Tab>
                <Tab
                  onClick={() => {
                    mixpanel.track({
                      position: 'portfolio breakdown',
                      type: 'tab navi',
                      label: 'DeFI',
                    });
                  }}
                >
                  DeFi
                </Tab>
              </TabList>
              <TabPanel>
                <div className="portfolio-container lg:flex-row">
                  <div className="portfolio-content w-50pc">
                    <p className="Ptab">
                      The crypto basket, allocated for a maximum of 10%, aims to
                      give exposure to different assets in the blockchain
                      industry.
                    </p>
                  </div>
                  <div className="portfolio-content w-50pc">
                    <CryptoBasket />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="portfolio-container lg:flex-row">
                  <div className="portfolio-content w-50pc">
                    <p className="Ptab">
                      The DeFI Basket is composed of an 11.11% allocation each
                      between: Dex: ZRX/SNX/BNT/KNC/LRC Misc: MKR/MLN/REN/LINK
                    </p>
                  </div>
                  <div className="portfolio-content w-50pc">
                    <DeFi />
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <div className="portfolio-container lg:flex-row">
              <div className="portfolio-content w-50pc">
                <p className="Ptab">
                  This ETF offers broad exposure to the U.S. equity market,
                  investing in thousands of different securities across all
                  sectors. That makes VTI an appealing option for investors
                  looking to simplify their portfolios and minimize rebalancing
                  obligations, as this fund can serve as a core holding of a
                  long-term portfolio.
                  <br />
                  VTI can potentially be useful as a tool for establishing quick
                  exposure to risky assets, though most shorter-term traders with
                  that objective will gravitate towards products such as SPY
                  instead.
                  <br />
                  One of the most attractive aspects of VTI, in addition to the
                  extremely broad base of holdings and balance of exposure, is the
                  price.
                  <p>
                    <a href="https://etfdb.com/etf/VTI/">Learn More</a>
                  </p>
                </p>
              </div>
              <div className="portfolio-content w-50pc">
                <VTI />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="portfolio-container lg:flex-row">
              <div className="portfolio-content w-50pc">
                <p className="Ptab">
                  This ETF is one of the most popular options for investors
                  seeking to establish exposure to long-dated Treasuries, an asset
                  class that is light on credit risk but may offer attractive
                  yields thanks to an extended duration and therefore material
                  interest rate risk.
                  <br />
                  TLT is efficient from a cost perspective, offers exposure to
                  hundreds of individual securities, and delivers impressive
                  liquidity to those looking to execute a trade quickly.
                  <br />
                  <p>
                    <a href="https://etfdb.com/etf/TLT/">Learn More</a>
                  </p>
                </p>
              </div>
              <div className="portfolio-content w-50pc">
                <TLT />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="portfolio-container lg:flex-row">
              <div className="portfolio-content w-50pc">
                <p className="Ptab">
                  This ETF technically offers broad commodity exposure, but the
                  underlying index is tilted heavily towards energy resources.
                  <br />
                  Crude oil, natural gas, and other energy commodities make up
                  close to 70% of the exposure, meaning that metals and livestock
                  are under-represented in this products.
                  <br />
                  GSG is essentially a cross between a pure energy ETF such as DBE
                  and a more broad-based commodity fund such as DBC or USCI.
                  <p>
                    <a href="https://etfdb.com/etf/GSG/">Learn More</a>
                  </p>
                </p>
              </div>
              <div className="portfolio-content w-50pc">
                <GSG />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="portfolio-container lg:flex-row">
              <div className="portfolio-content w-50pc">
                <p className="Ptab">
                  GLD is one of the most popular ETFs in the world, offering
                  exposure to an asset class that has become increasingly
                  important to the asset allocation process in recent years.
                  <br />
                  GLD can be used in a number of different ways; some may
                  establish short term positions as a way of hedging against
                  equity market volatility, dollar weakness, or inflation.
                  <br />
                  Others may wish to include gold exposure as part of a long-term
                  investment strategy. GLD is a relatively straightforward
                  product; the underlying assets consist of gold bullion stored in
                  secure vaults.
                  <p>
                    <a href="https://etfdb.com/etf/GLD/">Learn More</a>
                  </p>
                </p>
              </div>
              <div className="portfolio-content w-50pc">
                <GLD />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="portfolio-container lg:flex-row">
              <div className="portfolio-content w-50pc">
                <p className="Ptab">
                  This ETF offers exposure to Treasurys with three to seven years
                  to maturity, providing relatively little interest rate risk but
                  delivering higher returns than short-term products such as SHY.
                  IEI can be a nice tool for fine tuning fixed income exposure,
                  and is rather efficient from a cost perspective.
                  <p>
                    <a href="https://etfdb.com/etf/IEI/">Learn More</a>
                  </p>
                </p>
              </div>
              <div className="portfolio-content w-50pc">
                <IEI />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

PortfolioBreakdown.propTypes = {
  mixpanel: PropTypes.shape({
    track: PropTypes.func.isRequired,
  }).isRequired,
  links: PropTypes.shape({
    portfolio: PropTypes.func.isRequired,
  }).isRequired,
};

export default view(PortfolioBreakdown);
