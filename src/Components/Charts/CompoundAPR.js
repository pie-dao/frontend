import React,{ useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from "styled-components";
import { useWeb3React } from '../../hooks';


const Placeholder = styled.div`
  margin: 5px 30px 20px 5px;
  width: 600px;
  height: 300px;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 380px;
  @media (min-width: 1000px) {
    margin-right: 30px;
  }

`;


const CompoundAPR = props => {
  const [comparisonData, setComparisonData] = useState(null);
  const [error, setError] = useState(null);
  const { account } = useWeb3React();

  async function getData() {
    const res = await fetch(`https://pie-protocol-api.herokuapp.com/charts/comparison/2019-12`);
    res
      .json()
      .then(res => setComparisonData(res))
      .catch(err => setError(err));

  }

  useEffect(() => {
    getData();
  }, []);

  // const tokensSold = useUniswapTokensSold(account, AWP_ADDRESS);

  // console.log(tokensSold);

  return (
    <>
      {!(comparisonData) ? <Placeholder/> :
      <ChartContainer>
          <ResponsiveContainer>
            <LineChart data={comparisonData} margin={{top: 0, right: 0, left: -20, bottom: 5}}>
              <XAxis dataKey="month"/>
              <YAxis domain={[0, 40]}/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Line type="monotone" dataKey="awp" stroke="#00C49F" activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="awpPlus" stroke="#EC774C" activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="compound" stroke="#0088FE" activeDot={{r: 8}}/>
            </LineChart>
          </ResponsiveContainer>
      </ChartContainer>
      }
    </>
  );
}

export default CompoundAPR;
