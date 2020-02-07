import React from 'react';

import {
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { view } from 'react-easy-state';

import yourInvestment from '../stores/yourInvestment';
import If from './If';
import Unless from './Unless';

const getChartSize = () => {
  if (window.innerWidth <= 410) {
    return {
      size: {
        w: 320,
        h: 360,
      },
      margin: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 10,
      },
    };
  }
  return {
    size: {
      w: 500,
      h: 360,
    },
    margin: {
      top: 0,
      right: 20,
      left: 0,
      bottom: 20,
    },
  };
};

const formatTimestamp = (timestamp) => (new Date(timestamp * 1000)).toUTCString();
const formatTimestampDay = (timestamp) => (new Date(timestamp * 1000)).toDateString();

const YourInvestment = () => (
  <div className="your-investment-container">
    <If condition={yourInvestment.data}>
      <ComposedChart
        data={yourInvestment.data}
        width={getChartSize().size.w}
        height={getChartSize().size.h}
        margin={getChartSize().margin}
      >
        <XAxis tickFormatter={formatTimestampDay} format="time" dataKey="timestamp" />
        <YAxis
          yAxisId="totalPositionValue"
          dataKey="totalPositionValue"
          // eslint-disable-next-line radix
          domain={[0, parseInt(yourInvestment.chartTop)]}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip labelFormatter={formatTimestamp} />
        <Legend />
        <Line
          type="monotone"
          dataKey="totalPositionValue"
          yAxisId="totalPositionValue"
          stroke="#2db400"
          fill="#82ca9d"
        />
      </ComposedChart>
    </If>

    <Unless condition={yourInvestment.data}>
      <div className="placeholder" />
    </Unless>
  </div>
);

export default view(YourInvestment);
