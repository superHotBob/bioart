import Image from "next/image";

export default function Sell(){
  return (
    <div className="sellMainBlock">
        <div className="nft">
        <div
                 
                  className="itemSliderImageNft"
                  style={{
                    height: "520px",
                    width: "300px",
                    paddingTop: "270px",
                    backgroundImage: "url(/article-img.png)"                       
                  }}
                >
                  <b
                    className="iconItemNft"
                    style={{ backgroundImage: "url(/icon_ba.svg)" }}
                  />
                  <p style={{ textAlign: "center" }}>
                    <b className="iconGraph">
                      <Image
                        src="/icon_graph_01.svg"
                        alt="icon"
                        width={35}
                        height={35}
                      />
                    </b>
                    <span>1.3</span>
                  </p>
                  <p className="textNft">
                    Artistic Transformation of Life into Information.
                  </p>

                  <h5 className="lastStringNft">
                    <b>
                      <Image
                        src="/icon_like_on.svg"
                        width={25}
                        height={25}
                        alt="icon"
                      />{" "}
                    </b>
                    <span style={{ flexGrow: 8, textAlign: "left" }}>
                      15.285
                    </span>
                    <b>
                      <Image
                        src="/icon_bubble.svg"
                        width={25}
                        height={25}
                        alt="icon"
                      />
                    </b>
                    <span>25.000</span>
                  </h5>
                </div>

        </div>
        <div className="content">
            <h1 className="firstString">
            List item for Sale
            </h1>
            <p>Type</p>
            <label>
                <input type="radio" />
                <span>Fixed Price</span>
            </label>
            <label>
                <input type="radio" />
                <span>Timed Auction</span>
            </label>
            <p>Starting Price</p>
            <label>
                <span>Fixed Price</span>
                <input type="text" placeholder="Amount" />                
            </label>
            <p><input type="checkbox" /> Ending Price</p>
            <label>
                <span>Ending Price</span>
                <input type="text" placeholder="Amount" />                
            </label>
            <p>Duration</p>
            <div className="blockRadios">
            <label>
                <input type="radio" />
                1 day
            </label>
            <label>
                <input type="radio" />
                7 day
            </label>
            <label>
                <input type="radio" />
               1 mounth
            </label>

            </div>

        </div>
      <style jsx>{`
          .sellMainBlock {
              width: 68%;
              margin: 0 auto;
              padding: 80px 0;
          }
          .nft {
            display: inline-block;
              width: 32%;
          }
          .content {
              display: inline-block;
              width: 65%;
              vertical-align: top;
          }
          .content p {
            font-size: 22px;
            font-family: 'GmarketSansMedium';
            margin-bottom: 20px;
          }
          .blockRadios {
              width: 300px;

          }
          .blockRadios label {
              width: 30%;
              font-size: 18px;
              color: #333;
              display: inline-block;
          }
          .firstString {
            font-size: 38px;
            margin: 0 0 25px;
            font-family: 'GmarketSansMedium';
            font-weight: 400;
          }
          .itemSliderImageNft {
            outline-offset: 3px;
            outline: 1px solid #ddd;
            background-size: 100% auto;
            border-radius: 10px;
            background-position: center top;
            background-repeat: no-repeat;
            height: auto;
            margin-bottom: 40px;
            cursor: pointer;
          }
          
      `}</style>
    </div>
  );
};
