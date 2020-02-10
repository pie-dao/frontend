/* eslint react/no-array-index-key: 0 */
/* eslint object-curly-newline: 0 */

import React from 'react';
import { view } from 'react-easy-state';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import ChartsColors from './ChartsColors';

const data01 = [
  { name: 'Technology', value: 22 },
  { name: 'Healthcare', value: 14 },
  { name: 'Financials', value: 13 },
  { name: 'Consumer - Cylical', value: 10 },
  { name: 'Industrials', value: 10 },
  { name: 'Communications', value: 9 },
  { name: 'Consumer - Non Cylical', value: 6 },
  { name: 'Energy', value: 4 },
  { name: 'Real Estate', value: 4 },
  { name: 'Other', value: 4 },
  { name: 'Utilities', value: 3 },
  { name: 'Basic Materials', value: 2 },
];

const getChartSize = () => {
  if (window.innerWidth <= 410) {
    return {
      size: {
        w: 320,
        h: 360,
      },
    };
  }
  return {
    size: {
      w: 400,
      h: 360,
    },
  };
};

const VTI = () => (
  <PieChart
    width={getChartSize().size.w}
    height={getChartSize().size.h}
  >
    <Pie
      dataKey="value"
      isAnimationActive="true"
      data={data01}
      startAngle={45}
      endAngle={405}
      fill="#8884d8"
      label
    >
      {data01.map((entry, index) => (
        <Cell
          key={`cell-${index}`}
          fill={ChartsColors[index % ChartsColors.length]}
        />
      ))}
    </Pie>

    <Tooltip />
    <Legend verticalAlign="bottom" height={36} />
  </PieChart>
);

export default view(VTI);
