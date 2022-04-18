export default function CreateNewPlanetTwo() {
  return (
    <div className="createNewBlock">
      <h1>Create New Planet</h1>
      <span className="itemName requared"> requared input</span>
      <label>
        <p className="itemName"> Planet Name</p>
        <input type="text" />
      </label>
      <label>
        <p>Website</p>
        <input type="text" />
      </label>
      <label>
        <p>Description</p>
        <textarea rows="10" />
      </label>
      <p>Thumbnail Image Upload</p>
      <span>File types supported : JPG, PNG, GIF, SVG</span>
      <span>600 x 400px recommended.</span>
      <div className="plus" />
      <p>Banner Image Upload</p>
      <span>File types supported : JPG, PNG, GIF, SVG</span>
      <span>600 x 400px recommended.</span>
      <div className="bigPlus" />
      <p>Links</p>
      <p className="telegram">
        <b />
        <input type="text" placeholder="Telegram" />
      </p>
      <p className="instagram">
        <b />
        <input type="text" placeholder="Instagram" />
      </p>
      <p className="facebook">
        <b />
        <input type="text" placeholder="Facebook" />
      </p>
      <p className="twitter">
        <b />
        <input type="text" placeholder="Twitter" />
      </p>
      <label>
        <p>Royalties</p>
        <span style={{marginBottom: '30px' ,display: 'block'}}>
          Option to receive a certain portion of the transaction amount as a fee
          when NFT is traded. (up to 10%)
        </span>
        <input type="text" placeholder="Percentage fee : e.g. 2.5" />
      </label>
      <label>
        <p>Hashtag </p>
        <input
          type="text"
          placeholder="e.g) #Genome #Bio #NFT #Game #Tiger #Whale"
        />
      </label>
      <div className="twoButtonsBlock">
        <button className="cancel">Cancel</button>
        <button className="create">Create</button>
      </div>     
      <style jsx>{`
        .createNewBlock {
          width: 68%;          
          margin: 0 auto;
          padding: 60px 0 150px;
        }
        @media screen and (max-width: 1300px) {
          .createNewBlock {
            width: 80%;
          }
        }
        h1 {
          font-size: 38px;
          font-family: "GmarketSansMedium";
          font-weight: 400;
        }
        p {
          font-weight: 800;
          font-family: "GmarketSansMedium";
          font-size: 22px;
          color: #333;
        }
        span {
          font-size: 18px;
          line-height: 25px;
          display: block;
          font-family: "GmarketSansLight";
        }
        label {
          display: block;
          font-size: 22px;
          font-family: "GmarketSansBold";
          margin-bottom: 80px;
        }
        .itemName:before {
          content: "";
          background-image: url("/icon_star.svg");
          background-position: center center;
          background-repeat: no-repeat;
          width: 10px;
          height: 10px;
          background-size: 10px;
          display: inline-block;
          margin-right: 5px;
          margin-left: -15px;
        }
        .itemName {
          margin-left: 15px;
        }
        label input,
        p input,
        textarea {
          width: 100%;
          font-size: 20px;
          height: 44px;
          border: 1px solid #c9c9c9;
          padding: 20px;
          border-radius: 20px;
        }

        textarea {
          height: 200px;
        }

        button {
          height: 44px;
          float: left;
          width: 20%;
          font-family: "GmarketSansMedium";
          font-size: 18px;
          border: 1px solid #c9c9c9;
          color: #fff;
          background-color: #be0000;
          border-radius: 20px;
         
        }
        .cancel:hover {
          background-color: #2f4f4f;
        }
        .create {
          width: 76%;
          float: right;
          background-color: #f3f3f3;
          color: #000;
        }
        .create:hover {
            background-color: #00b4e6;
            color: #fff;
        }
        .plus,
        .bigPlus {
          width: 188px;
          height: 188px;
          border-radius: 50%;
          margin: 40px 0;
          background-color: #ebebeb;
          background-image: url("/icon_mrwt.svg");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 120px;
          cursor: pointer;
        }
        .plus:hover,
        .bigPlus:hover {
          background-image: url("/icon_mrbk.svg");
        }
        .bigPlus {
          width: 100%;
          border-radius: 10px;
          border: 1px solid #c9c9c9;
          height: 240px;
        }
        .telegram b,
        .instagram b,
        .facebook b,
        .twitter b {
          width: 40px;
          height: 40px;
          display: inline-block;          
          background-image: url("/icon_tele_w.png");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 40px;
        }
        .telegram b {
          background-image: url("/icon_tele_b.png");
        }
        .instagram b {
          background-image: url("/icon_insta_b.png");
        }
        .facebook b {
          background-image: url("/icon_facebook_b.png");
        }
        .twitter b {
          background-image: url("/icon_twitter_b.png");
        }
        p input {
          width: 95%;
          float: right;
        }
        .twitter {
            margin-bottom: 80px;
        }
        .twoButtonsBlock {
          margin: 50px 0;
        }
      `}</style>
    </div>
  );
}
