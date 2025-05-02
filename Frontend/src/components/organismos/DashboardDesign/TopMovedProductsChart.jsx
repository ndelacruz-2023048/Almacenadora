import React from 'react'
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, YAxis, Legend } from 'recharts';
import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components';
import { useChartStore } from '../../../stores/ChartsStore';
export const TopMovedProductsChart = () => {
    const {topMovedProductChart,setTopMovedProductChart} = useChartStore()
    const {data} = useQuery({queryKey:['topMovedProducts'],queryFn:setTopMovedProductChart})
    const dataForChart = data?.result?.map((item) => ({
        name: item.name,           // o aquí puedes usar otro campo como nombre
        totalMovements: Number(item.totalMovements),
      }));
    console.log(dataForChart);
      
    const datas = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={dataForChart} margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}>
        <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#28364b" stopOpacity={1}/>
            <stop offset="95%" stopColor="#e8ebea" stopOpacity={0.8}/>
            </linearGradient>
        </defs>

          <Bar dataKey="totalMovements" fill="url(#colorGradient)" strokeWidth={6} 
            type="monotone" 
            activeDot={{r:6}}
            fillOpacity={1}
            radius={[10,10,0,0]}
            />
            <YAxis hide />
          <XAxis dataKey="name" />
          <Tooltip content={<CustomToolTip/>}/>
        </BarChart>
      </ResponsiveContainer>
  )
}

const CustomToolTip= ({active,payload,label})=>{
    if(active && payload && payload.length ){
        return(
            <TooltipContainer>
                <Date>
                    {label}
                    <Value>cant mov: {payload[0].value}</Value>
                </Date>
            </TooltipContainer>
        )
    }
}

const TooltipContainer = styled.div`
    background:rgb(255, 254, 254);
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    font-size: 12px;
    box-shadow: 0px 10px 20px -20px rgba(0,0,0,0.1);
`

const Date = styled.div`
    font-size: 14px;
`

const Value = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: "#363637";
` 
