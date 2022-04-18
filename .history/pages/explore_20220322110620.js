import react, { useState } from "react";
import Image from "next/image";

export default function Explore() {
  const [viewFilter, setViewFilter] = useState(false);
  return (
    <div>
      <div className="mainExplore">
        <div className="filters">
          <div className="filtersHeader">
            <p>
              <b className="iconFilter">Filter</b>
              <b
                className="viewFilter"
                onClick={() => setViewFilter(!viewFilter)}
              />
            </p>
          </div>
        </div>
        <div className="items">
          <div className="allSorting">
            <div className="selectBlock">
              <select className="one">
                <option>All</option>
                <option>Subscribe</option>
                <option>Genome</option>
                <option>Common</option>
              </select>
              <input type="search" placeholder="search" />
            </div>
            <select className="two">
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
          <p className="count">
            <span>All NFTs</span>
            <span>12,258 Items</span>
          </p>
          <div className="filterItem">
          {Array(8)
                .fill(1)
                .map((i, index) => (
                  <div className="itemSliderNft" key={index}>
                    <Link href="/nft/one" passHref>
                      <div
                        className="itemSliderImageNft"
                        style={{
                          paddingTop: "89%",
                          height: "100%",
                          marginBottom: 0,
                          backgroundImage: "url(/article-img.png)",
                        }}
                      >
                        <b className="iconSlider" style={{ backgroundImage: "url(/icon_ba.svg)" }} />
                        <p style={{ textAlign: "center" }}>
                          <b className="iconGraph">
                            <Image
                              src="/icon_graph_01.svg"
                              alt="icon"
                              width={30}
                              height={30}
                            />
                          </b>
                          <span>1.3</span>
                        </p>
                        <p>Artistic Transformation of Life into Information.</p>

                        <h5>
                          <b>
                            <Image
                              src="/icon_like_on.svg"
                              width={25}
                              height={25}
                              alt="icon"
                            />{" "}
                          </b>
                          <span style={{ flexGrow: 8, textAlign: "left" }}>
                            15.285
                          </span>
                          <b>
                            <Image
                              src="/icon_bubble.svg"
                              width={25}
                              height={25}
                              alt="icon"
                            />
                          </b>
                          <span>25.000</span>
                        </h5>
                      </div>
                    </Link>
                  </div>
                ))}

          </div>
        </div>
      </div>

      <style jsx>
        {`
          .filtersHeader {
            height: 85px;
            padding: 30px 10px 10px 20px;
            background-color: ${viewFilter ? "#999" : "#f9f9f9"};
          }
          .filters {
            width: ${viewFilter ? "20%" : "50px"};
            display: inline-block;
            height: 100vh;
            transition: all 0.5s;
            border-right: 1px solid #c7c7c7;
            background-color: #f9f9f9;
          }
          .iconFilter {
            display: ${viewFilter ? "inline-block" : "none"};
            font-size: 24px;
            color: #fff;
            width: 100px;
            text-align: right;
            background: url("/icon_filter.svg") left center / 30% no-repeat;
            font-family: "GmarketSansMedium";
            font-weight: 400;
          }
          .viewFilter {
            display: inline-block;
            width: 30px;
            float: right;

            height: 30px;
            background: ${viewFilter
                ? "url('/icon_mn_close.svg')"
                : "url('/icon_mn_open.svg')"}
              center / 70% no-repeat;
          }
          .items {
            display: inline-block;
            padding: 40px;
            vertical-align: top;
            width: ${viewFilter ? "78%" : "90%"};
          }
          .selectBlock {
            width: 500px;
            height: 44px;
            display: inline-block;
            border-radius: 20px;
            border: 1px solid #c9c9c9;
          }
          .one,
          .selectBlock input {
            width: 50%;
            border: none;
            padding: 10px 20px;
            border-radius: 20px;
            outline: none;
            font-size: 18px;
          }
          .one {
            border-right: 1px solid #c9c9c9;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            background-color: #f9f9f9;
          }
          .two {
            height: 44px;
            border-radius: 20px;
            width: 300px;
            padding: 10px 20px;
            float: right;
            outline: none;
            border: 1px solid #c9c9c9;
          }
          .count {
              margin-top: 50px;
              font-size: 20px;
              display: flex;
              justify-content: space-between;
              font-size: 18px;
            font-family: 'GmarketSansMedium';
           
            font-weight: 500;
          }
        `}
      </style>
    </div>
  );
}
