import Image from "next/image";
import Link from "next/link";
export default function GenomeDataSintetic() {
  return (
    <div className="mainBlock">       
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
        {/* <div className="smallImage"/> */}
      </div>
      <Link href='/createitem/createitem' passHref>
         <button>Select Genom</button> 
      </Link>  
      
      <div className="plus" />
      <button>Submit</button>
      <style jsx>
        {`
          .mainBlock {
            width: 68%;
            margin: 0 auto;
            text-align: center;
            padding: 80px 0;
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
            width: 300px;
            height: 300px;
            outline-offset: 10px;
            outline: 1px solid #c9c9c9;
            border-radius: 50%;
            background-size: auto 100%;
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
          @media screen and (max-width: 1300px) {
            .mainBlock {
                width: 80%;
            }
          }
          @media screen and (max-width: 550px) {
            .mainBlock {
              width: 100%;
              padding: 0 0 25px;
            }
            h1 {
              font-size: 24px;
              text-align: center;
              margin-bottom: 50px;
              display: flex;
              flex-direction: column;
            }
            h1 span {
              float: none;
              margin-top: 40px;
              display: block;
            }
            h2 {
              font-size: 20px;
              margin: 30px 0;
            }
            b {
              margin: 30px 0;
            }
          }
        `}
      </style>
    </div>
  );
}
