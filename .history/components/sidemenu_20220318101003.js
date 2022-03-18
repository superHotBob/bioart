import Image from "next/image";

export default function SideMenu() {
  return (
    <div className="sideMenu">
      <p>
        <b>
          <Image
            className="image"
            src="/icon_graph_11.svg"
            layout="fill"
            width={25}
            alt="icon"
          />
        </b>
        <span>Transfers</span>
      </p>
      <p>
        <b>
          <Image src="/icon_graph_21.svg" layout="fill" width={25} alt="icon" />
        </b>
        <span>Edit price</span>
      </p>
      <p>
        <b>
          <Image src="/icon_graph_11.svg" layout="fill" width={25} alt="icon" />
        </b>
        <span>Edit item</span>
      </p>
      <p>
        <b>
          <Image src="/icon_graph_11.svg" layout="fill" width={25} alt="icon" />
        </b>
        <span>Cancel listing</span>
      </p>
      <p>
        <b>
          <Image src="/icon_graph_11.svg" layout="fill" width={25} alt="icon" />
        </b>
        <span>Delete item</span>
      </p>
      <div className="share">Share</div>
      <h4>
        <b>
          <Image src="/icon_graph_11.svg" layout="fill" width={25} alt="icon" />
        </b>
        <span>Delete item</span>
      </h4>
      <h4>
        <b>
          <Image src="/icon_graph_11.svg" layout="fill" width={25} alt="icon" />
        </b>
        <span>Delete item</span>
      </h4>

      <style jsx>{`
        .sideMenu {
          position: fixed;
          font-family: "GmarketSansMedium";
          left: 71%;
          top: 200px;
          width: 260px;
          height: auto;
          background-color: #fff;
          border: 1px solid #c9c9c9;
        }
        .sideMenu p {
          line-height: 60px;
          border-bottom: 1px solid #c9c9c9;
          font-size: 18px;
          margin: 0;
         
          font-family: "GmarketSansMedium";
        }
        .sideMenu p b, .sideMenu h4 b {
          margin: -5px 10px 0 20px;
          vertical-align: middle;
          height: 23px;
          position: relative;
          width: 30px;
          display: inline-block;
        }
        .image {
          margin: -2px !important;
        }
        .share {
            text-align: center;
            font-family: 'GmarketSansMedium';
            font-weight: 400;
            margin: 30px 0; 
            font-size: 18px;
        }
        h4 {
            width: 80%;
            border: 1px solid #c9c9c9;
            border-radius: 20px;
            height: 44px;
            line-height: 44px;
            font-size: 18px;
            justify-content: space-between;
            margin: 15px auto;
            font-family: "GmarketSansMedium";
        }
      `}</style>
    </div>
  );
}
