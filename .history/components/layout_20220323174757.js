import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
        <style jsx global>{`
          .lastStringNft {
            width: 90%;
            margin: 10px auto;
            padding: 10px 0;
            border-top: 1px solid #c9c9c9;
            font-size: 18px;
            color: #333;
            display: flex;
            justify-content: space-between;
            font-family: "GmarketSansLight";
          }
          .lastStringNft b {
            margin: 0 5px 0 0;
            flex-grow: 1;
          }
          .iconGraph {
            margin: 0px 10px;
            vertical-align: top;
            display: inline-block;
          }
          .priceNft {
            text-align: center;
            font-size: 30px;
            margin: 10px 0 0;
            font-family: "GmarketSansMedium";
          }
          .textNft {
            font-size: 1vw;
            margin: 0 0 15px;
            text-align: center;
            font-weight: 300;
            font-family: "GmarketSansLight";
          }
          .iconSlider {
          margin-top: 0;
          width: 65px;
          height: 65px;
        }
        .iconItemNft {
            width: 65px;
            height: 65px;
            display: block;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 50%;
            border: 4px solid #fff;
            outline: 1px solid #ddd;
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
