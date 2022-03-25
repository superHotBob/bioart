import Image from "next/image";
export default function Profile() {
  return (
    <div className="mainBlock">
      <h1>Profile Settings</h1>
      <form>
        <label>
          <h2>User Name</h2>
          <input type="text" />
        </label>
        <label>
          <h2>Email Address</h2>
          <input type="text" />
        </label>
        <label>
          <h2>Representaive Planet</h2>
          <p>
            <input type="radio" />
            <span>
              <Image src="/icon_ba.svg" width={38} height={38} alt="icon" />
            </span>
            Genome NFT
          </p>
          <p>
            <input type="radio" />
            <span>
              <Image src="/icon_ba.svg" width={38} height={38} alt="icon" />
            </span>
            Geno`s Collection
          </p>
          <p>
            <input type="radio" />
            <span>
              <Image src="/icon_ba.svg" width={38} height={38} alt="icon" />
            </span>
            Geno`s Collection
          </p>
          <p>
            <input type="radio" />
            <b>
              <Image src="/icon_ba.svg" width={38} height={38} alt="icon" />
            </b>
            Genome Story
          </p>
        </label>
        <label>
          <h2>Notification Settings</h2>
          <p>
            <input type="checkbox" /> <b>Item Sold</b> When someone purchased
            one of your items
          </p>
          <p>
            <input type="checkbox" /> <b>Bid Activity</b> When someone bids on
            one of your items
          </p>
          <p>
            <input type="checkbox" /> <b>Price Change</b> When an item you made
            an offer on changes in price
          </p>
          <p>
            <input type="checkbox" /> <b>Auction Expiration</b> When a timed
            auction you created ends
          </p>
          <p>
            <input type="checkbox" /> <b>Successful Purchase</b> When an item
            you made an offer on changes in price
          </p>
          <p>
            <input type="checkbox" /> <b>GenoVerse Newsletter</b> When a timed
            auction you created ends
          </p>
        </label>
        <div className="buttons">
            <button className="cancel">Cancel</button>
            <button className="save">Save</button>
        </div>
      </form>

      <style jsx>{`
        .mainBlock {
          width: 69%;
          margin: 80px auto;
        }
        h1 {
            font-size: 38px;
            font-family: 'GmarketSansMedium';
            font-weight: 400;
            margin-bottom: 40px;
        }
        h2 {
          font-size: 22px;
          font-family: "GmarketSansMedium";
          margin-bottom: 20px;
        }
        input {
          margin-right: 30px;
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }
        input[type="text"] {
          width: 100%;
          height: 44px;
          border: 1px solid #c9c9c9;
          padding: 0 20px 0 30px;
          border-radius: 20px;
        }
        label {
          margin-bottom: 100px;
          display: block;
        }
        p {
          font-size: 18px;
          font-family: "GmarketSansLight";
          font-weight: 800;
        }
        p b {
          font-family: "GmarketSansMedium";
        }
        span {
          display: inline-block;
          width: 38px;
          height: 38px;
          vertical-align: middle;
          margin-right: 10px;
        }
        button {
            height: 44px;
            border: 1px solid #c9c9c9;
            color: #fff;
            font-size: 18px;
            background-color: #be0000;
            border-radius: 20px;
            width: 20%;
        }
        button:hover {
            opacity: 0.5;
        }
        button.save {
            width: 78%;
            float: right;
            color: #000;
            background-color: #f3f3f3;
        }
        button.save:hover {
            background-color: #00b4e6;
            color: #fff;
        }
      `}</style>
    </div>
  );
}
