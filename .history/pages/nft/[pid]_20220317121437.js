import { useRouter } from "next/router";

const NFT = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className="mainNft">
      <div style={{border: '1px solid red'}}>
        <div className="menu">
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div style={{border: '1px solid red'}}>
        <div className="image"></div>
        <div className="content">
          <a>BioArts</a>|<a>bioarts.net</a>
          <h1>
            BioArts for Humans -<br /> # Night Explorer
          </h1>
          <p>
            Hi everyone, this collection is all about enjoying and cherishing
            the small things in life. Appreciate all that you have. Soak in all
            the peace that nature has to offer, and be present. Lead with love
            and kindness, it will take you to a beautiful place. Hi everyone,
            this collection is all about enjoying and cherishing the small
            things in life. Appreciate all that you have. Soak in all the peace
          </p>
          <div className="lastString">
            <span style={{flexGrow:3,textAlign: 'left'}}>Owner by <b style={{color: '#00b4e6'}}>you</b></span>
            <span className="view">1 View</span>
            <span className="comment">1 Comment</span>
            <span className="like">1 Like</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        a {
          color: #00b4e6 !important;
          margin: 0 10px;
          letter-spacing: 1.5px;
          font-size: 16px;
        }
        h1 {
          font-weight: 400;
          font-size: 50px;
          font-family: "GmarketSansMedium";
        }
        .mainNft {
          width: 70%;
          margin: 0 auto;
          height: 80vh;
        }
        .menu {
          width: 40px;
          height: 40px;
          margin: 10px 0;
          border: 1px solid #ddd;
          border-radius: 10px;
          text-align: right;
          
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
          margin: 0;
         
          display: inline-block;
          background-image: url("/article-img.png");
          background-size: 100%;
          background-position: center top;
          background-repeat: no-repeat;
        }
        .content {
          height: 60vh;
          width: 54%;
         vertical-align: top;
          margin-left: 20px;
          display: inline-block;
        }
        .content p {
          font-size: 20px;
          line-height: 25px;
          font-family: "GmarketSansLight";
        }
        .lastString {
          font-family: 'GmarketSansMedium';
          font-weight: 400;
          font-size: 16px;
          display: flex;
          line-height: 26px;
          justify-content: space-between;
        }
        .lastString span {
          flex-grow: 1;
          text-align: right;
        }
        .view, .comment, .like {
          background-size: 30%;
          background-position: 25% center;
          background-repeat: no-repeat;
        }
        .view {
          background-image: url('/icon_view.svg');
        }
        .comment {
          background-image: url('/icon_bubblebk.svg');
          background-size: 15%;
          background-position: 24% center;
        }
        .like {
          background-image: url('/icon_like_on.svg');
          background-size: 25%;
          background-position: 28% center;
        }
      `}</style>
    </div>
  );
};

export default NFT;
