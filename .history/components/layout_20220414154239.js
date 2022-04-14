import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{borderBottom: '1px solid #000'}}>
        {children}
        <style jsx global>{`
          .lastStringNft {
            width: 90%;
            position: absolute;
            top: 85%;
            left: 5%;
            padding: 10px 0;
            border-top: 1px solid #c9c9c9;
            font-size: 18px;
            color: #333;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: "GmarketSansLight";
          }
          .lastStringNft b {
            margin: 0 5px 0 0;
            flex-grow: 1;
          }
          .iconGraph {
            margin: 0px 15px;
            vertical-align: top;
            display: inline-block;
            height: 34px;
            width: 34px;
            position: relative;
          }
          .priceNft {
            text-align: center;
            font-size: 30px;
            margin: 10px 0 0;
            font-family: "GmarketSansMedium";
          }
          .textNft {
            font: 300 18px/26px GmarketSansLight;
            margin: 0 55px 15px;
            text-align: center;
            
          }
          .iconSlider {
          margin-top: 0;
          width: 65px;
          height: 65px;
        }
        .iconItemNft {
            width: 65px;
            height: 64px;
            display: block;
            margin: -37px auto 0;
            z-index: 100;
            position: relative;
            background-size: 90%;
            background-position: center;
            background-color: #fff;
            border-radius: 50%;
           
            border: 1px solid #ddd;
          }
          .itemSliderNft {
            position: relative;
          }
          @media screen and (max-width: 550px) {
            .iconGraph {
              height: 22px;
              width: 22px;
              margin-right: 5px;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
