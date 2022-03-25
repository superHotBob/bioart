export default function Profile() {
  return (
    <div className="mainBlock">
      <h1>Profile Settings</h1>
      <label>
        <p>User Name</p>
        <input type="text" />
      </label>
      <label>
        <p>Email Address</p>
        <input type="text" />
      </label>
      <label>
        <p>Representaive Planet</p>
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
      </label>
      <label>
        <p>Notification Settings</p>
        <p><input type="checkbox" /> <b>Item Sold</b> When someone purchased one of your items</p>
        <p><input type="checkbox" /> <b>Bid Activity</b> When someone bids on one of your items</p>
        <p><input type="checkbox" /> <b>Price Change</b> When an item you made an offer on changes in price</p>
        <p><input type="checkbox" /> <b>Auction Expiration</b> When a timed auction you created ends</p>
        <p><input type="checkbox" /> <b>Successful Purchase</b> When an item you made an offer on changes in price</p>
        <p><input type="checkbox" /> <b>GenoVerse Newsletter</b> When a timed auction you created ends</p>
      </label>

      <style jsx>{`
        .mainBlock {
          width: 69%;
          margin: 80px auto;
        }
      `}</style>
    </div>
  );
}
