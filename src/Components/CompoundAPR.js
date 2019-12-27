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
    chartData: null,
    compoundData: null,
    etfData: null,
  }
  componentDidMount(){
    this.getDataCompound();
    this.getEtfData();
  }

  
  async getDataCompound() {
    //const res = await fetch(`http://localhost:3999/charts/compound`);
    const res = await fetch(`https://pie-protocol-api.herokuapp.com/charts/compound`);
    
    const data = await res.json();
    this.setState({
      compoundData: data
    })
  }

  async getData() {
    //const res = await fetch(`http://localhost:3999/stock/VTI/monthly/chart`);
    const res = await fetch(`https://pie-protocol-api.herokuapp.com/stock/VTI/monthly/chart`);
    
    const data = await res.json();
    this.setState({
      chartData: data.reverse()
    })
  }

  async getEtfData() {
    const res = await fetch(`https://pie-protocol-api.herokuapp.com/charts/etf`);
    //const res = await fetch(`http://localhost:3999/charts/etf`);
    
    const data = await res.json();
    this.setState({
      etfData: data.reverse()
    })
  }

  renderCompoundChart() {
    const {compoundData} = this.state;
    return (
      <div>
        {!compoundData ? 'Loading' :
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={compoundData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="month"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="rate" stroke="#8884d8" activeDot={{r: 8}}/>
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
          </ResponsiveContainer>
        }
      </div>
    );
  }

  renderEtfChart() {
    const {etfData} = this.state;
    return (
      <div>
        {!etfData ? 'Loading' :
          <LineChart width={600} height={300} data={etfData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="month"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="VTI" stroke="#EC774C" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="TLT" stroke="#FCAC50" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="IEI" stroke="#ECC74C" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="GLD" stroke="#4CE5EC" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="GSG" stroke="#9F4CEC" activeDot={{r: 8}}/>
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        }
      </div>
    );
  }

  render() {
    return (
      <div>
        <Title>Compound APR for SAI</Title>
        {this.renderCompoundChart()}
      </div>
    );
  }
}

export default CompoundAPR;