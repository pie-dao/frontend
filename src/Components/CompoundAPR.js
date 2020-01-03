import React,{ Component } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from "styled-components";


const Title = styled.div`
  text-align: left;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-normal);
  font-weight: 300;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, },
  {name: 'Page B', uv: 3000, pv: 1398, },
  {name: 'Page C', uv: 2000, pv: 9800, },
  {name: 'Page D', uv: 2780, pv: 3908, },
  {name: 'Page E', uv: 1890, pv: 4800, },
  {name: 'Page F', uv: 2390, pv: 3800, },
  {name: 'Page G', uv: 3490, pv: 4300, },
];

class CompoundAPR extends Component {

  state = {
    comparisonData: null,
  }
  componentDidMount(){
    this.getData();
  }

  
  async getData() {
    const res = await fetch(`https://pie-protocol-api.herokuapp.com/charts/comparison`);
    
    const data = await res.json();
    this.setState({
      comparisonData: data
    })
  }

  renderComparisonChart() {
    const {comparisonData} = this.state;

    return (
      <div>
        {!(comparisonData) ? 'Loading' :
          <LineChart width={600} height={300} data={comparisonData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="month"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="awp" stroke="#00C49F" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="awpPlus" stroke="#EC774C" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="compound" stroke="#0088FE" activeDot={{r: 8}}/>
          </LineChart>
        }
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderComparisonChart()}
      </div>
    );
  }
}

export default CompoundAPR;