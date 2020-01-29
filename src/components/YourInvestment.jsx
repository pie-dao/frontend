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

const formatTimestamp = (timestamp) => (new Date(timestamp * 1000)).toUTCString();
const formatTimestampDay = (timestamp) => (new Date(timestamp * 1000)).toDateString();

const YourInvestment = () => (
  <div className="your-investment-container">
    <If condition={yourInvestment.data}>
      <ComposedChart
        width={600}
        height={380}
        data={yourInvestment.data}
        margin={{
          bottom: 5,
          left: 20,
          right: 30,
          top: 0,
        }}
      >
        <XAxis tickFormatter={formatTimestampDay} format="time" dataKey="timestamp" />
        <YAxis
          yAxisId="totalPositionValue"
          dataKey="totalPositionValue"
          domain={[0, yourInvestment.chartTop]}
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
