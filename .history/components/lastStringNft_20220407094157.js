import Image from "next/dist/client/image";

export default function LastStringNft({mobile}) {
  
  return (
    <div className="lastString">
      {/* <b>
        <Image src="/icon_like_on.svg" layout="fill" alt="icon" />{" "}
      </b> */}
      <span style={{ flexGrow: 8, textAlign: "left" }} className="like">15</span>
      {!mobile && <span>25</span>}
      <b>
        <Image src="/icon_bubble.svg" layout="fill" alt="icon" />
      </b>
      {mobile && <span>25</span>}
     
      <style jsx>
        {`
          .lastString {
            width: 90%;
            margin: 0 auto;
            padding: 15px 0 5px;
            border-top: 1px solid #c9c9c9;
            font-size: 18px;
            color: #333;
            align-items: center;
            display: flex;
            justify-content: space-between;
          }
          .lastString b {
            margin: 0 5px 0 0;
            flex-grow: 1;
            height: 19px;
            width: 10px;
            position: relative;
          }
          .like:before {
            content: url('/icon_like_on.svg');
            display: inline-block;
            height: 15px;
            width: 15px;
          }  
          @media screen and (max-width: 550px) {
            .lastString span {
              font: 800 14px/25px "GmarketSansLight";
            }
            .lastString b {
              height: 15px;
              width: 15px;
            }
            .lastString {
                padding: 10px 0 0;
            }
          }
        `}
      </style>
    </div>
  );
}
