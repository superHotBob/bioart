import Image from "next/image";
export default function GenomeDataSintetic() {
  return (
    <div className="main">
       
      <h1> 
          <span style={{float: 'left',width: 150}} />
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
      <div className="wraperSmallImage">
        <div className="smallImage"/>
      </div>

      <button>Select Genom</button>
      <div className="plus" />
      <button>Submit</button>
      <style jsx>
        {`
          .main {
            width: 68%;
            margin: 0 auto;
            text-align: center;
            padding: 80px;
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
          .mainImage, .smallImage {
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
          .wraperSmallImage {
            background: url('/icon_graph_14.svg') center center no-repeat;
            height: 140px;
          }
          .smallImage {
            width: 140px;
            height: 140px;
            margin-bottom: 30px;
          }
          b {
            margin: 30px auto 80px;
            display: block;
          }
          
          h2 {
              text-align: center;
              font-size: 38px;
              font-family: 'GmarketSansMedium';
              font-weight: 400;
          }
          .plus {
            width: 45px;
            height: 45px;
            background: url('/icon_graph_17.svg') center center no-repeat;
            border-radius: 50%;
            margin: 80px auto;
            
          }
          button {
            width: 300px;
            height: 44px;
            margin-top: 30px;
            background-color: #f3f3f3;
            border: 1px solid #c9c9c9;
            border-radius: 20px;
            font-size: 18px;
          }
          button:hover {
            background-color: #00b4e6;
              color: #fff;
          }
          button:last-of-type {
              background-color: #00b4e6;
              color: #fff;
          }
          button:last-of-type:hover {
            background-color: #f3f3f3;
            color: #000;
          }
        `}
      </style>
    </div>
  );
}
