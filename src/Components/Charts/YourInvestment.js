import React,{ Component, useState, useEffect, useCallback } from 'react';
import { LineChart, ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';
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

function formatTimestamp(timestamp)  {
  var newDate = new Date();
  newDate.setTime(timestamp*1000);
  return newDate.toUTCString();
}

export default function YourInvestment() {
  const { account } = useWeb3React();

  const localHistoricData = JSON.parse(localStorage.historicData || "[]");
  let historicPosition = Object.values(useUniswapHistoricPosition(account, AWP_ADDRESS, AWP_EXCHANGE)) || localHistoricData;
  console.log(localHistoricData);
  
  if(historicPosition && historicPosition.length) {
    console.log("setting storage")
    localStorage.historicData = JSON.stringify(historicPosition);
  }
    

  console.log('calle', historicPosition);

  return(
    <div>
      {!(localHistoricData && localHistoricData.length !== 0) ? <Placeholder/> :
        <>
        <ComposedChart width={600} height={380} data={localHistoricData} margin={{top: 0, right: 30, left: 20, bottom: 5}}>
          <XAxis tickFormatter={formatTimestamp} format="time" dataKey="timestamp"/>

          <YAxis yAxisId="totalPositionValue" dataKey="totalPositionValue" type="number" domain={[0, parseInt(localHistoricData[localHistoricData.length - 1].totalPositionValue) + 100]} />
          <YAxis hide yAxisId="price" dataKey="price" domain={[0, 100]}/>
          {/* <YAxis hide yAxisId="totalAmount" dataKey="totalAmount" domain={[0, 100]}/> */}
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip labelFormatter={formatTimestamp}/>
          <Legend />
          
         
              <Line type="monotone" dataKey="totalPositionValue" yAxisId="totalPositionValue" stroke="#2db400" fill="#82ca9d" />
              <Area type="monotone" yAxisId="price" dataKey="price" stroke="#cb1a8f" fill="#fc02a7" activeDot={{r:8}}/>  
              {/* <Line type="monotone" yAxisId="totalAmount" dataKey="totalAmount" stroke="#ff7c42" activeDot={{r:8}}/>  */}
              {/* <Line type="monotone" yAxisId="totalPositionValue" dataKey="totalPositionValue" stroke="#ee00ff"  activeDot={{r:8}}/>  */}
              
              
        </ComposedChart>
        </>
    }
    </div>
  )
}