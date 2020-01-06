import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data01 = [
  { name: "ZEC", value: 33 },
  { name: "XMR", value: 33 },
  { name: "DASH", value: 33 }
];

export default class Privacy extends PureComponent {
  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data01}
          startAngle={45}
          endAngle={405}
          fill="#8884d8"
          label
        />
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    );
  }
}
