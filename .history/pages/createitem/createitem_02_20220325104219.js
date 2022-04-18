import Image from "next/image";
export default function GenomeDataSintetic() {
  return (
    <div className="main">
      <h1>
        Genomic Data Synthesis{" "}
        <span>
          <b>1</b>
          <b className="dot"></b>
          <b className="dot"></b>
          <b className="dot"></b>
          <b>2</b>
        </span>
      </h1>
      <div className="mainImage"/>

      <h2>Night Explorer</h2>
      <b>
          <Image src="/icon_graph_13.svg" width={35} height={35} alt="icon" />
      </b>
      <style jsx>
        {`
          .main {
            width: 68%;
            margin: 0 auto;
          }
          h1 {
            text-align: center;
            font-size: 38px;
            font-family: "GmarketSansMedium";
            font-weight: 400;
            margin-bottom: 120px;
          }
          h1 span {
            font-size: 18px;
            float: right;
            margin-top: 10px;
            display: inline-block;
          }
          h1 span b:first-of-type,
          h1 span b:last-of-type {
            background-color: #c7c7c7;
            color: #fff;
            display: inline-block;
            line-height: 36px;
            font-family: "GmarketSansBold";
            width: 32px;
            margin: 0 10px;
            height: 32px;
            border-radius: 50%;
          }
          h1 span b:last-of-type {
            background-color: #000;
            color: #fff;
          }
          .dot {
            width: 4px;
            margin: 5px;
            display: inline-block;
            height: 4px;
            background-color: #c7c7c7;
            border-radius: 50%;
          }
          .mainImage {
            margin: 0 auto;
            width: 340px;
            height: 340px;
            outline-offset: 6px;
            outline: 1px solid #c9c9c9;
            border-radius: 50%;
            background-size: cover;
            background-position: center;
            background-image: url('/test.png');
          }
          b {
            margin: 0 auto;
          }
          
          h2 {
              text-align: center;
              font-size: 38px;
              font-family: 'GmarketSansMedium';
              font-weight: 400;
          }
        `}
      </style>
    </div>
  );
}
