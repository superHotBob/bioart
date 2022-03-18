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
      <h4 className="link">Copy Link</h4>
      <h4 className="email">Send Email</h4>
      <h4 className="telegram">Telegram</h4>
      <h4 className="instagram">Instagram</h4>
      <h4 className="fasebook">Fasebook</h4>
      <h4 className="twitter">Twitter</h4>

      <style jsx>{`
        .sideMenu {
          position: fixed;
          font-family: "GmarketSansMedium";
          left: 71.4%;
          top: 200px;
          font-size: 18px;
          width: 260px;
          height: auto;
          background-color: #fff;
          border: 1px solid #c9c9c9;
          padding-bottom: 30px;
        }
        .sideMenu p {
          line-height: 60px;
          border-bottom: 1px solid #c9c9c9;
          font-size: 18px;
          margin: 0;

          font-family: "GmarketSansMedium";
        }
        .sideMenu p b,
        .sideMenu h4 b {
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
          font-family: "GmarketSansMedium";
          font-weight: 400;
          margin: 30px 0;
        }
        h4 {
          width: 84%;
          border: 1px solid #c9c9c9;
          border-radius: 20px;
          height: 44px;
          line-height: 44px;
          font-size: 18px;
          text-align: center;
          justify-content: space-between;
          margin: 15px auto;
          font-family: "GmarketSansLight";
          background-size: 10%;
          background-position: 13% 45%;
          background-repeat: no-repeat;

          cursor: pointer;
        }
        .link {
          background-image: url("/icon_link.svg");
        }
        .link:hover {
            background-color: #00b4e6;
            color: #fff;
            background-image: url("/icon_link_w.svg");
        }
        .email {
          background-image: url("/icon_mail.svg");
        }
        .email:hover {
            background-color: #00b4e6;
            color: #fff;
            background-image: url("/icon_mail_hv.svg");
        }
      `}</style>
    </div>
  );
}
