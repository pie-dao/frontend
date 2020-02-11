/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';
import PropTypes from 'prop-types';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';
import TransactionsTable from './TransactionsTable';
import AwpLightPortfolioPage from './charts/AwpLightPortfolioPage';
import SingleAssetLight from './SingleAssetLight';

const PortfolioDetail = (props) => {
  return (
    <div className="content">
      <div className="portfolio-detail lg:w-90pc lg:mx-10pc">
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab>Portfolio</Tab>
            <Tab>Transactions</Tab>
          </TabList>
          <TabPanel>
            <div className="liquidity-right lg:w-auto lg:tex-left lg:flex-row lg:flex-grow">
              <div className="liquidity-column lg:items-start lg:text-left lg:pl-3pc lg:pr-1pc lg:max-w-500px">
                <h1 className="title lg:text-left lg:text-big py-2pc">Liquidity Breakdown</h1>
                <AwpLightPortfolioPage />
                <div className="normal-text lg:m-0 lg:text-left py-2pc">
                  We backtested the All Weather Portfolio and the AWP++ against DeFi
                  Landing in the last 12 months. Don&apos;t take our word for it. Have a
                  look at the chart on the left.
                </div>
              </div>
              <div className="liquidity-column lg:flex-grow lg:pl-2pc lg:pr-3pc">
                <SingleAssetLight token="tlt" />
                <SingleAssetLight token="vti" />
                <SingleAssetLight token="iei" />
                <SingleAssetLight token="gld" />
                <SingleAssetLight token="gsg" />
                <SingleAssetLight token="btc" />
                <SingleAssetLight token="eth" />
                <SingleAssetLight token="link" />
                <SingleAssetLight token="zrk" />
                <SingleAssetLight token="snx" />
                <SingleAssetLight token="ren" />
                <SingleAssetLight token="lrc" />
                <SingleAssetLight token="knc" />
                <SingleAssetLight token="bnt" />
                <SingleAssetLight token="mln" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <TransactionsTable {...props} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

PortfolioDetail.propTypes = {
  mixpanel: PropTypes.shape({
    cta: PropTypes.func.isRequired,
  }).isRequired,
  links: PropTypes.shape({
    portfolio: PropTypes.func.isRequired,
  }).isRequired,
};

export default view(PortfolioDetail);
