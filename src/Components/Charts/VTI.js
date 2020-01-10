import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import COLORS from "../../Theme/Colors"

const data01 = [
  { name: "Technology", value: 22 },
  { name: "Healthcare", value: 14 },
  { name: "Financials", value: 13 },
  { name: "Consumer - Cylical", value: 10 },
  { name: "Industrials", value: 10 },
  { name: "Communications", value: 9 },
  { name: "Consumer - Non Cylical", value: 6 },
  { name: "Energy", value: 4 },
  { name: "Real Estate", value: 4 },
  { name: "Other", value: 4 },
  { name: "Utilities", value: 3 },
  { name: "Basic Materials", value: 2 }
];
export default class VTI extends PureComponent {
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
        <Legend verticalAlign="bottom" height={100} />
      </PieChart>
    );
  }
}
