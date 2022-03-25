export default function GenomeDataSintetic() {
  return (
    <div className="main">
      <h1>
        Genomic Data Synthesis{" "}
        <span>
            <b>1</b>
          <b className="dot"></b>
          <b className="dot"></b>
          <b className="dot"></b>
          <b>2</b>
        </span>
      </h1>
      <style jsx>
        {`
          .main {
            width: 68%;
            margin: 0 auto;
          }
          h1 {
            text-align: center;
            font-size: 38px;
            font-family: "GmarketSansMedium";
            font-weight: 400;
          }
          h1 span {
               font-size: 12px;
               width: 50px;
               display: inline-block;
          }
          h1 span b:first-of-type {
            background-color: #c7c7c7;
            color: #fff;
            line-height: 36px;
            font-family: 'GmarketSansBold';
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }
          .dot {
             
            width: 4px;
            margin: 5px;
            display: inline-block;
            height: 4px;
            background-color: #c7c7c7;
            border-radius: 50%;
          }
        `}
      </style>
    </div>
  );
}
