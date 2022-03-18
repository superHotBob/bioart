import Image from "next/image";

export default function CreateItem() {
  return (
    <div className="createItem">
      <div className="imageBlock"></div>
      <div className="contentBlock">
          <h1>Create New Item</h1>
      </div>
      <style jsx>{`
          .createItem {
              width: 78%;
              height: 80vh;
              margin: 0 auto;
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
          
          `}</style>
    </div>
  );
}
