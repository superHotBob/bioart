import { useRouter } from "next/router";
import Image from "next/image";
import react, { useState } from "react";
import styles from "../styles/Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function Geno() {
  return (
    <div className="genosMain">
      <h1 className="genoWord">Geno`s World</h1>
      <p className="headerText">
        When the judgement`s weak, The prejudice is strong.
        <br />
        Joined 01.01.2022
      </p>
      <button className="btnGenomData">Genome Data Download</button>

      <div className="totalBalabceBlock">
        <h2>Total balance (USD)</h2>
        <p className="balance">0.00</p>
      </div>
      <div className="sol">
        <div className="count">
          <Image src="/icon_cate_13.svg" width={50} height={50} alt="icon" />
          <span>SOL</span>
          <span>0.00</span>
        </div>
        <div>
          <span>0xd5b8848a29ab901b63910ce175c55be4648953d8</span>
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="sol">
        <div className="count">
          <Image src="/icon_graph_03.svg" width={50} height={50} alt="icon" />
          <span>GERO</span>
          <span>0.00</span>
        </div>
        <div>
          <span>0xd5b8848a29ab901b63910ce175c55be4648953d8</span>
        </div>
      </div>

      <style jsx>{`
        * {
          font-family: "GmarketSansMedium";
        }
        .genosMain {
          width: 69%;
          margin: 80px auto;
        }
        .genoWord {
          font-size: 38px;
          font-family: "GmarketSansMedium";
          font-weight: 400;
          line-spacing: 1.5px;
          margin: 0;
        }
        .headerText {
          font-size: 20px;
          margin: 0;
          line-height: 40px;
          font-weight: 700;
          color: #333;
          font-family: "GmarketSansLight";
        }
        .btnGenomData {
          width: 400px;
          font-size: 20px;
          height: 44px;
          margin: 20px 0;
          background-color: #f3f3f3;
          border-radius: 20px;
          border: 1px solid #c9c9c9;
          text-align: center;
          line-height: 43px;
        }
        .totalBalabceBlock {
          width: 100%;
          height: 290px;
          border-radius: 10px;
          border: 1px solid #c9c9c9;
          margin-top: 150px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          background-color: #ebebeb;
          position: relative;
        }
        .totalBalabceBlock:before {
          content: "Wallet";
          font-size: 30px;
          top: -90px;
          position: absolute;
        }
        .totalBalabceBlock h2 {
          font-size: 31px;
          font-family: "GmarketSansLight";
          font-weight: 600;
        }
        .balance {
          font-size: 55px;
          font-family: "GmarketSansBold";
          color: #00b4e6;
          line-height: 0;
          margin-left: 50px;
          position: relative;
        }
        .balance:before {
          content: url("/icon_cate_12.svg");
          width: 55px;
          height: 55px;
          display: inline-block;
          position: absolute;
          top: -32px;
          left: -70px;
        }
        .sol {
          border: 1px solid #c9c9c9;
          border-radius: 10px;
          margin: 50px 0;
          position: relative;
          height: 120px;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .count {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 23%;
          font-size: 28px;
        }
        .count span:last-of-type {
          font-family: "GmarketSansMedium";
          font-weight: 700;
          font-size: 34px;
          color: #00b4e6;
        }
      `}</style>
    </div>
  );
}
