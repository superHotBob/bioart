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
      <button>Cancel</button>
      <style jsx>{`
        .createNewBlock {
          width: 68%;
          height: 120vh;
          margin: 0 auto;
          padding-top: 60px;
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
        input,
        textarea {
          width: 100%;
          font-size: 20px;
          height: 44px;
          border: 1px solid #c9c9c9;
          padding: 20px;
          border-radius: 20px;
          outline: none;
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
          margin: 50px 0 100px;
        }
        button:hover {
          background-color: #2f4f4f;
        }
        .plus, .bigPlus {
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
        .plus:hover, .bigPlus:hover {
          background-image: url("/icon_mrbk.svg");
        }
        .bigPlus {
            width: 100%;
            border-radius: 10px;
            border: 1px solid #c9c9c9;
            height: 240px;
        }
      `}</style>
    </div>
  );
}
