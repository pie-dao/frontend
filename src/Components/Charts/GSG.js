import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const data01 = [
  { name: "Sweet Light Crude Oil (WTI)", value: 35.32 },
  { name: "Brent Crude Oil", value: 13.04 },
  { name: "Natural Gas", value: 7.48 },
  { name: "NY Harbor ULSD (Heating Oil)", value: 4.68 },
  { name: "Gas Oil", value: 4.55 },
  { name: "Gasoline RBOB", value: 4.55 },
  { name: "Copper", value: 4.01 },
  { name: "Aluminum	", value: 3.49 },
  { name: "Wheat", value: 3.4 },
  { name: "Corn", value: 3.3 },
  { name: "Other", value: 15.16 }
  // { name: "Live Cattle", value: 2.74 },
  // { name: "Gold", value: 1.95 },
  // { name: "Soybean", value: 1.84 },
  // { name: "Nickel", value: 1.64 },
  // { name: "Lean Hogs", value: 1.53 },
  // { name: "Zinc", value: 1.29 },
  // { name: "Sugar", value: 1.23 },
  // { name: "Cotton", value: 0.90 },
  // { name: "Coffee", value: 0.69 },
  // { name: "Cattle Feeder", value: 0.54 },
  // { name: "Lead", value: 0.52 },
  // { name: "Silver", value: 0.29 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28"
];

export default class GSG extends PureComponent {
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
