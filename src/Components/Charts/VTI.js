import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data01 = [
  { name: "Microsoft Corp (MSFT)", value: 3.68 },
  { name: "Apple Inc (AAPL)", value: 3.72 },
  { name: "Amazon.com Inc (AMZN)", value: 2.48 },
  { name: "Facebook Inc (FB)", value: 1.58 },
  { name: "Alphabet Inc (GOOG)", value: 1.39 },
  { name: "Berkshire Hathaway Inc (BRK.B)", value: 1.35 },
  { name: "JPMorgan Chase & Co (JPM)", value: 1.27 },
  { name: "Johnson & Johnson (JNJ)", value: 1.19 },
  { name: "Alphabet Inc (GOOGL)", value: 1.15 },
  // { name: "Visa Inc (V)", value: 1 },
  // { name: "Procter & Gamble Co (PG)", value: 0.95 },
  // { name: "Exxon Mobil Corp (XOM)", value: 0.92 },
  // { name: "AT&T Inc (T)", value: 0.89 },
  // { name: "Bank of America Corp (BAC)", value: 0.87 },
  // { name: "UnitedHealth Group Inc (UNH)", value: 0.86 },
  // { name: "Mastercard Inc (MA)", value: 0.84 },
  // { name: "Walt Disney Co (DIS)", value: 0.83 },
  // { name: "Intel Corp (INTC)", value: 0.82 },
  // { name: "Verizon Communications Inc (VZ)", value: 0.77 },
  // { name: "Merck & Co Inc (MRK)", value: 0.74 },
  // { name: "Home Depot Inc (HD)", value: 0.73 },
  // { name: "Chevron Corp (CVX)", value: 0.71 },
  // { name: "Pfizer Inc (PFE)", value: 0.68 },
  // { name: "Coca-Cola Co (KO)", value: 0.66 },
  // { name: "Cisco Systems Inc (CSCO)", value: 0.64 },
  // { name: "Comcast Corp (CMCSA)", value: 0.64 },
  // { name: "Wells Fargo & Co (WFC)", value: 0.64 },
  // { name: "PepsiCo Inc (PEP)", value: 0.56 },
  // { name: "Boeing Co (BA)", value: 0.56 },
  // { name: "Citigroup Inc ©", value: 0.54 },
  { name: "Others", value: 82.19 },





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
        />
        <Tooltip />
        <Legend verticalAlign="bottom" height={100} />
      </PieChart>
    );
  }
}