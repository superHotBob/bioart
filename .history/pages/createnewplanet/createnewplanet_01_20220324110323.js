export default function CreateNewPlanetOne() {
  return (
    <div className="createNewBlock">
      <h1>Create New Planet</h1>
      <p>Upload your genomic data or create a generic planet.</p>
      <div className="twoBloks">
        <div className="genome">
            <div></div>
        </div>
        <div className="common"></div>
      </div>
      <style jsx>{`
        .createNewBlock {
          width: 68%;
          margin: 0 auto;
        }
        .twoBloks {
          display: flex;
          justify-content: space-between;
          margin-top: 150px;
        }
        .genome,
        .common,.genome div{
          width: 48%;
          height: 25vw;
          border-radius: 10px;
          background-position: center center;
        background-repeat: no-repeat;
        background-size: 120px;
        }
        .genome {
          border: 2px solid transparent;
          background: linear-gradient(#f3f3f3, #f3f3f3) padding-box,
            linear-gradient(
                150deg,
                rgba(0, 0, 255, 1) 0%,
                rgba(152, 0, 255, 1) 41%,
                rgba(255, 0, 255, 1) 68%,
                rgba(255, 0, 0, 1) 100%
              )
              border-box;
              
        }
        .genome div {
           width: 100%;
        }
        .genome:before {
          content: "Genome";
          font-family: "GmarketSansMedium";
          display: block;
          margin-top: -50px;
          font-size: 22px;
        }
        .common {
          background-color: #ebebeb;
          border: 1px solid #c9c9c9;
          background-image: url('/icon_mrwt.svg');
        
        }
        .common:before {
          content: "Common";
          font-family: "GmarketSansMedium";
          display: block;
          margin-top: -50px;
          font-size: 22px;
        }
      `}</style>
    </div>
  );
}
