import Image from "next/image";

export default function sideMenu() {
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
      <style jsx>{`
        .sideMenu {
          position: fixed;
          left: 71%;
          top: 200px;
          width: 260px;
          height: auto;
          border: 1px solid #c9c9c9;
        }
        .sideMenu p {
          line-height: 60px;
          border-bottom: 1px solid #c9c9c9;
          font-size: 18px;
          margin: 0;
          background-color: #fff;
          font-family: "GmarketSansMedium";
        }
        .sideMenu p b {
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
      `}</style>
    </div>
  );
}
