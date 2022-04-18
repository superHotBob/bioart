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
          .textNft {
            font-size: 1vw;
            margin: 15px;
            text-align: center;
            font-family: "GmarketSansLight";
          }
          .iconSlider {
          margin-top: 0;
          width: 65px;
          height: 65px;
        }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
