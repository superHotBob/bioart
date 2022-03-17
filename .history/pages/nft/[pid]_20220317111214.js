import { useRouter } from "next/router";

const NFT = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className="mainNft">
      <div className="menu">
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className="image"></div>
      <div className="content"></div>

      <style jsx>{`
        .mainNft {
          width: 70%;
          margin: 0 auto;
          height: 80vh;
        }
        .menu {
          width: 40px;
          height: 40px;
          margin: 50px 0;
          border: 1px solid #ddd;
          border-radius: 10px;
          float: right;
          text-align: center;
        }
        .menu p {
          margin: 8px auto;
          width: 5px;
          height: 5px;
          background-color: #333;
        }
        .image {
          height: 30vh;
          width: 30%;
          background-image: url('/article-img.png');
          background-size: 100%;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
};

export default NFT;
