import Image from "next/dist/client/image";
export default function LastStringNft() {
  return (
    <div className="lastString">
      <b>
        <Image src="/icon_like_on.svg" width={25} height={25} alt="icon" />{" "}
      </b>
      <span style={{ flexGrow: 8, textAlign: "left" }}>15</span>
      <b>
        <Image src="/icon_bubble.svg" width={25} height={25} alt="icon" />
      </b>
      <span>25</span>
      <b>
        <Image src="/icon_bubble.svg" width={25} height={25} alt="icon" />
      </b>
      <style jsx>
        {`
          .lastString {
            width: 90%;
            margin: 0 auto;
            padding: 15px 0 5px;
            border-top: 1px solid #c9c9c9;
            font-size: 18px;
            color: #333;
            display: flex;
            justify-content: space-between;
          }
          .lastString b {
            margin: 0 5px 0 0;
            flex-grow: 1;
          } 
          @media screen and (max-width: 550px) {
            .lastString span {
              font: 800 14px/25px "GmarketSansLight";
            }
            .lastString b {
              height: 10px;
              width: 10px;
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
