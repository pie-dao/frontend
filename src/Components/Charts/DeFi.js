import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import COLORS from "../../Theme/Colors"

const data01 = [
  { name: "ZRX", value: 11.1 },
  { name: "SNX", value: 11.1 },
  { name: "BNT", value: 11.1 },
  { name: "KNC", value: 11.1 },
  { name: "LRC", value: 11.1 },
  { name: "MKR", value: 11.1 },
  { name: "MLN", value: 11.1 },
  { name: "REN", value: 11.1 },
  { name: "LINK", value: 11.1 }
];
export default class DeFi extends PureComponent {
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
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    );
  }
}
