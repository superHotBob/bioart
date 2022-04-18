import {
    LineChart,
    Line,
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
  } from "recharts";
  import Image from "next/image";
  import styles from "../styles/Home.module.css";
import react, { useState, useEffect } from "react";


const data = [
   
    { name: "21.01", price: 0.0001 },
    { name: "01.06", price: 0.00001 },
    { name: "25.08", price: 0.00005 },
   
  ];

  export default function PriceHistory() {
    const [viewHistory, setViewHistory] = useState(false);
    const [myscreen, setMyScreen] = useState(true);
    useEffect(() => setMyScreen(window.screen.width > 500), []);
      return (
        <div className="viewOffers">
        <h3 className="history">
          Price History
          <b>
            <Image
              src={viewHistory ? "/icon_vwar_02.svg" : "/icon_vwar_01.svg"}
              width={30}
              height={30}
              alt="icon"
              onClick={() => setViewHistory(!viewHistory)}
            />
          </b>
        </h3>
        {viewHistory && (
          <div className="datablock">
            <div style={{ height: 50 }}>
              <select >
                <option value="1">All Time</option>
                <option value="2">30 Days</option>
                <option value="3">Last 7 Days</option>
              </select>
            </div>
            <div style={{ textAlign: "right", margin: "10px 0" }}>
              All Time Avg.Price <span className="solana blue">0.1</span>
            </div>
            <ResponsiveContainer height={300} >
            <LineChart                 
              data={data}
              margin={{ top: 30, right: 10, bottom: 10, left: 0 }}
            >
              <Line
                dataKey="price"
                stroke="#00b4e6"
                dot={{
                  zIndex: 100,
                  stroke: "#00b4e6",
                  strokeWidth: 3,
                  r: 5,
                  strokeFill: "#fff",
                }}
              />
              <CartesianGrid 
                style={{zIndex:0,opacity: 0.5}}
                stroke="#c9c9c9" 
                strokeDasharray="5" 
              />
              <XAxis 
                dataKey="name"
                tick={{stroke: 'gray', strokeWidth: 1}} 
                style={{fontSize: myscreen ? 16: 12,color: '#ddd',fontWeight: 400}}
                padding={{left: 20,right: 20}}
                
              />               
              <YAxis
                width={60}
                style={{fontSize: myscreen ? 16: 12,color: '#333',fontWeight: 400}}
                tick={{stroke: 'gray', strokeWidth: 1}}
                tickSize='0'
                text={{x:10}}
                axisLine={false}
                domain={["dataMin - 0.00001", "dataMax + 0.00001"]}
              />
              <Tooltip
                wrapperStyle={{ textAlign: "center" }}
                contentStyle={{ borderRadius: 10, with: 20 }}
              />
            </LineChart>
            </ResponsiveContainer>
          </div>
        )}
        <styles jsx>{`


        `}</styles>
      </div>
      )
  }