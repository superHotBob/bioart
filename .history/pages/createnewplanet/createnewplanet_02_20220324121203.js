export default function CreateNewPlanetTwo() {
  return (
    <div className="createNewBlock">
      <h1>Create New Planet</h1>
      <p>Upload your genomic data or create a generic planet.</p>
      <p className="itemName requared"> requared input</p>
        <label>
          <p className="itemName"> Item Name</p>
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
        <label>
          <p>Hashtag</p>
          <input
            type="text"
            placeholder="e.g) #Genome #Bio #NFT #Game #Tiger #Whale"
          />
        </label>
      
      <button>Cancel</button>
      <style jsx>{`
        .createNewBlock {
          width: 68%;
          height: 80vh;
          margin: 0 auto;
          padding-top: 60px;
        }
        h1 {
          font-size: 38px;
          font-family: "GmarketSansMedium";
          font-weight: 400;
        }
        p {
          font-weight: 600;
          font-family: "GmarketSansLight";
          font-size: 18px;
          color: #333;
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
      `}</style>
    </div>
  );
}
