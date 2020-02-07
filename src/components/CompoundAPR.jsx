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

const CompoundAPR = () => (
  <div className="compound-apr-container">
    <If condition={compoundAPR.data}>
      <LineChart
        data={compoundAPR.data}
        width={getChartSize().size.w}
        height={getChartSize().size.h}
        margin={getChartSize().margin}
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
