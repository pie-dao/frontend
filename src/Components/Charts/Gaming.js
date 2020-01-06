import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data01 = [
  { name: "1ST", value: 25 },
  { name: "FUN", value: 25 },
  { name: "MANA", value: 25 },
  { name: "ENJ", value: 25 }

];

export default class Gaming extends PureComponent {
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
