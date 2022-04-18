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

      <style jsx>{`
        * {
      font-family: "GmarketSansMedium";
        }
        .genosMain {
          width: 70%;
          margin: 80px auto;
        }
        .genoWord {
          font-size: 38px;
          font-family: 'GmarketSansMedium';
          font-weight: 400;
          line-spacing: 1.5px;
        }
        .headerText {
          font-size: 20px;

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
      `}</style>
    </div>
  );
}
