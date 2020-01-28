/* eslint react/no-array-index-key: 0 */
/* eslint object-curly-newline: 0 */

import React from 'react';
import { view } from 'react-easy-state';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import ChartsColors from './ChartsColors';

const data01 = [
  { name: 'Sweet Light Crude Oil (WTI)', value: 35.32 },
  { name: 'Brent Crude Oil', value: 13.04 },
  { name: 'Natural Gas', value: 7.48 },
  { name: 'NY Harbor ULSD (Heating Oil)', value: 4.68 },
  { name: 'Gas Oil', value: 4.55 },
  { name: 'Gasoline RBOB', value: 4.55 },
  { name: 'Copper', value: 4.01 },
  { name: 'Aluminum', value: 3.49 },
  { name: 'Wheat', value: 3.4 },
  { name: 'Corn', value: 3.3 },
  { name: 'Other', value: 15.16 },
];
const GSG = () => (
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

export default view(GSG);
