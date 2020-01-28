/* eslint react/no-array-index-key: 0 */
/* eslint object-curly-newline: 0 */

import React from 'react';
import { view } from 'react-easy-state';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import ChartsColors from './ChartsColors';

const data01 = [
  { name: 'Crypto Basket', value: 10 },
  { name: 'Equity, U.S., Large Cap', value: 27 },
  { name: 'Bond, U.S., Long-Term', value: 36 },
  { name: 'Bond, U.S., Intermediate-Term', value: 13.5 },
  { name: 'Commodity, Gold', value: 6.75 },
  { name: 'Commodity, Broad Diversified', value: 6.75 },
];
const AWP = () => (
  <PieChart width={400} height={400}>
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

export default view(AWP);
