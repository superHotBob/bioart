import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  LabelList,
  YAxis,
  Tooltip,
} from "recharts";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import react, { useState, useEffect } from "react";

const data = [
  { date: "21.01.22", price: 0.0001 },
  { date: "14.02.22", price: 0.0002 },
  { date: "26.02.22", price: 0.00011 },
  { date: "23.03.22", price: 0.0001 },
  { date: "01.04.22", price: 0.00008 },
  { date: "04.04.22", price: 0.00013 },
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
            <select>
              <option value="1">All Time</option>
              <option value="2">30 Days</option>
              <option value="3">Last 7 Days</option>
            </select>
          </div>
          <div style={{ textAlign: "right", margin: "10px 0" }}>
            All Time Avg.Price <span className="solana blue" style={{marginLeft: 10}}>0.1</span>
          </div>
          <ResponsiveContainer height={300}>
            <LineChart
              data={data}
              margin={{ top: 30, right: 0, bottom: 10, left: 0 }}
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
                style={{ zIndex: 0, opacity: 0.5 }}
                stroke="#c9c9c9"
                strokeDasharray="0"
              />
              <XAxis
                dataKey="date"
                tick={{ stroke: "gray", strokeWidth: 1 }}
                tickFormatter={(value)=>{return [value.replace('.22','')]}}              
                style={{
                  fontSize: myscreen ? '16px' : '12px',
                  color: "#ddd",
                  fontWeight: 400,
                }}
                padding={{ left: 20, right: 20 }}
              >
                  
              </XAxis>
              <YAxis
                width={70}
                style={{
                  fontSize: myscreen ? 16 : 12,
                  color: "#333",
                  fontWeight: 400,
                  marginRight: '10px'
                }}
                padding={{ top: 20, bottom: 20 }}
                tick={{ stroke: "gray", strokeWidth: 1 }}
                tickSize="0"
                tickFormatter={(value)=>{return [value.toFixed(5)]}}
                text={{ x: 10 }}
                axisLine={false}
                domain={["dataMin - 0.00001", "dataMax + 0.00001"]}
              />
              <Tooltip
                wrapperStyle={{ textAlign: "center" }}
                offset={8}
                contentStyle={{ borderRadius: 10, with: 20, padding: '5px 20px 0' }}
                formatter={(value) => {return [value]}}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      <style jsx>{`
        .datablock div select {
          float: right;
          width: 40%;
        }
        .datablock {
          padding: 20px;
        }
        .data .solana {
          width: 15%;
        }
        h3 {
          padding: 0 20px 0 60px;
          height: 80px;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          margin: 0;
          font: 400 22px/80px "GmarketSansMedium";
        }
        
        h3 b {
          margin-top: 10px;
          float: right;
          cursor: pointer;
        }
        .headerData {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #c9c9c9;
          padding: 15px 0;
          margin: 0;
          font-size: 18px;
          font-family: "GmarketSansMedium";
          text-align: center;
        }
        .history {
          background: #f3f3f3 url("/icon_graph_01.svg") 16px center / 30px
            no-repeat;
        }
        @media screen and (max-width: 550px) {
            .datablock div select {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
