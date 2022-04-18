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
      <div className="content">
        <a>BioArts</a>|
        <a>bioarts.net</a>
        <h1>BioArts for Humans - # Night Explorer</h1>
        <p>
          Hi everyone, this collection is all about enjoying and cherishing the
          small things in life. Appreciate all that you have. Soak in all the
          peace that nature has to offer, and be present. Lead with love and
          kindness, it will take you to a beautiful place. Hi everyone, this
          collection is all about enjoying and cherishing the small things in
          life. Appreciate all that you have. Soak in all the peace
        </p>
      </div>

      <style jsx>{`
        a {
          color: #00b4e6 !important;
          margin: 0 10px;
          letter-spacing: 1.5px;
          font-size: 16px;
        }
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
          height: 60vh;
          width: 40%;
          display: inline-block;
          background-image: url("/article-img.png");
          background-size: 100%;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
};

export default NFT;
