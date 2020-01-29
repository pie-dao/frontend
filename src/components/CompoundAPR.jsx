import React from 'react';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { view } from 'react-easy-state';

import compoundAPR from '../stores/compoundAPR';
import If from './If';
import Unless from './Unless';

const CompoundAPR = () => (
  <div className="compound-apr-container">
    <If condition={compoundAPR.data}>
      <LineChart
        width={500}
        height={360}
        data={compoundAPR.data}
        margin={{
          top: 0,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="month" />
        <YAxis domain={[0, 40]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="awp" stroke="#00C49F" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="awpPlus" stroke="#EC774C" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="compound" stroke="#0088FE" activeDot={{ r: 8 }} />
      </LineChart>
    </If>

    <Unless condition={compoundAPR.data}>
      <div className="placeholder" />
    </Unless>
  </div>
);

export default view(CompoundAPR);
