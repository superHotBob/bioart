export default function Profile() {
  return (
    <div className="mainBlock">
      <h1>Profile Settings</h1>
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
        <p><input type="radio" /></p>
        <p><input type="radio" /></p>
        <p><input type="radio" /></p>
        <p><input type="radio" /></p>
      </label>
      <label>
        <h2>Notification Settings</h2>
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
