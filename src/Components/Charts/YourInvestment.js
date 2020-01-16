import React,{ Component, useState, useEffect, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from "styled-components";
import { useUniswapHistoricPosition } from '../../contexts/UniswapActions';
import { useTransactionsContext } from '../../contexts/Transactions';
import { AWP_ADDRESS, AWP_EXCHANGE } from '../../constants';
import { useWeb3React } from '../../hooks';
import { useBlocksContext } from '../../contexts/Blocks';


const Placeholder = styled.div`
  margin: 5px 30px 20px 5px;
  width: 600px;
  height: 300px;
`;


export default function YourInvestment() {
  const { account } = useWeb3React();

  const historicPosition = Object.values(useUniswapHistoricPosition(account, AWP_ADDRESS, AWP_EXCHANGE))

  console.log('calle', historicPosition);

  return(
    <div>
      {!(historicPosition && historicPosition.length !== 0) ? <Placeholder/> :
        <LineChart width={600} height={380} data={historicPosition} margin={{top: 0, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="timestamp"/>
          <YAxis domain={[0, historicPosition[historicPosition.length - 1].totalAmount]}/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          
         
              <Line type="monotone" dataKey="price" stroke="#22FF22" activeDot={{r:8}}/> 
              <Line type="monotone" dataKey="totalAmount" stroke="#dddddd" activeDot={{r:8}}/> 
              <Line type="monotone" dataKey="totalPositionValue" stroke="#ee00ff" activeDot={{r:8}}/> 
              
              
        </LineChart>
    }
    </div>
  )
}