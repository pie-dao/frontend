/* eslint react/no-array-index-key: 0 */
/* eslint object-curly-newline: 0 */

import React from 'react';
import { view } from 'react-easy-state';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import ChartsColors from './ChartsColors';

const data01 = [{ name: 'UNITED STATES TREASURY', value: 100 }];

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

const TLT = () => (
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

export default view(TLT);
