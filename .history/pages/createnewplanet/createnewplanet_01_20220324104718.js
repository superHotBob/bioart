export default function CreateNewPlanetOne() {
  return (
    <div className="createNewBlock">
      <h1>Create New Planet</h1>
      <p>Upload your genomic data or create a generic planet.</p>

      <div className="genome"></div>
      <div className="common"></div>
      <style jsx>{`
        .createNewBlock {
          width: 68%;
          margin: 0 auto;
        }
        .genome,
        .common {
          width: 48%;
          height: 20vw;
        }
        .genome {
          border: 2px solid transparent;
          border-radius: 10px;
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
      `}</style>
    </div>
  );
}
