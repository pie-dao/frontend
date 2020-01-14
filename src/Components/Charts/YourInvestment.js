import React,{ Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from "styled-components";


const Placeholder = styled.div`
  margin: 5px 30px 20px 5px;
  width: 600px;
  height: 300px;
`;

class YourInvestment extends Component {

  state = {
    comparisonData: null,
  }
  componentDidMount(){
    this.getData();
  }



  
  async getData() {
    const res = await fetch(`https://pie-protocol-api.herokuapp.com/charts/comparison/2019-12`);
    //const res = await fetch(`http://localhost:3999/charts/comparison/2019-12`);
    
    
    const data = await res.json();
    this.setState({
      comparisonData: data
    })
  }


  renderComparisonChart() {
    const {comparisonData} = this.state;


    return (
      <div>
        {!(comparisonData) ? <Placeholder/> :
          <LineChart width={600} height={380} data={comparisonData} margin={{top: 0, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="month"/>
            <YAxis domain={[0, 40]}/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="awpPlus" stroke="#EC774C" activeDot={{r: 8}}/>
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

export default YourInvestment;