import Image from "next/image";

export default function CreateItem() {
  return (
    <div className="createItem">
      <div className="imageBlock"></div>
      <div className="contentBlock">
        <h1>Create New Item</h1>
        <p>* requared input</p>
        <label>
          <p>* Item Name</p>
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
          <input type="text" />
        </label>
        <div className="btnBlock">
          <button className="createBtn">Create</button>
          <button className="cancelBtn">Cancel</button>
        </div>
      </div>
      <style jsx>{`
        * {
          font-family: "GmarketSansMedium";
        }
        .createItem {
          width: 78%;
          height: 80vh;
          margin: 100px auto 0;
          display: flex;
          justify-content: space-between;
          font-family: "GmarketSansMedium";
        }
        h1 {
            margin-top: 0;
        }
        .imageBlock {
          width: 40%;
          border: 1px solid red;
        }
        .contentBlock {
          width: 58%;
        }
        label {
          display: block;
          font-size: 22px;
          font-family: "GmarketSansMedium";
          margin-bottom: 50px;
        }
        input,
        textarea {
          width: 100%;
          font-size: 20px;
          height: 44px;
          border: 1px solid #c9c9c9;
          padding: 0 20px 0 30px;
          border-radius: 20px;
        }
        textarea {
          height: 200px;
        }
        button {
          height: 44px;
          border: 1px solid #c9c9c9;
          border-radius: 20px;
          width: 25%;
          margin: 50px 0 0 20px;
          float: right;
          font-size: 18px;
        }
        .cancelBtn {
          background-color: red;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
