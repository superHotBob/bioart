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
                <input type='text' />
          </label>
          <label>
              <p>Website</p>
                <input type='text' />
          </label>
          <label>
              <p>Description</p>
                <input type='textarea' />
          </label>
          <label>
             <p>Hashtag</p>
                <input type='text' />
          </label>
      </div>
      <style jsx>{`
          .createItem {
              width: 78%;
              height: 80vh;
              margin: 100px auto 0;
              display: flex;
              justify-content: space-between;

          }
          .imageBlock {
              width: 40%;
              border: 1px solid red;

          }
          .contentBlock {
              width: 58%;
              border: 1px solid red;
          }
          label {
              display: block;
              font-size: 22px;
            font-family: 'GmarketSansMedium';
                margin-bottom: 50px;
          }
          input {
            width: 100%;
            height: 44px;
            border: 1px solid #c9c9c9;
            padding: 0 20px 0 30px;
            border-radius: 20px;
          }
          
          `}</style>
    </div>
  );
}
