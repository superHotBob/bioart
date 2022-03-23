import react, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
          <div className="status">
              <p>Status</p>

          </div>
          <div className="price">
              <p>Price</p>

          </div>
          <div className="categories">
            <p>Categories</p>
          </div>
          <div className="planets">
              <p>Planets</p>

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
              <option className="option"></option>
              <option className="option"></option>
              <option className="option">Price: Hight to Low</option>
              <option className="option">Price: Low to Hight</option>
              <option className="option">Ending Soon</option>
              <option className="option">Resently Listed</option>
              <option className="option">Most Favorited</option>
              <option className="option">Most viewed</option>
              <option className="option">Oldest</option>
            </select>
          </div>
          <p className="count">
            <span>All NFTs</span>
            <span>12,258 Items</span>
          </p>
          <div className="filterItem">
            {Array(10)
              .fill(1)
              .map((i, index) => (
                <div
                  key={index}
                  className="itemSliderImageNft"
                  style={{
                    height: "520px",
                    width: "300px",
                    paddingTop: "270px",
                    backgroundImage: "url(/article-img.png)",
                  }}
                >
                  <b
                    className="iconItemNft"
                    style={{ backgroundImage: "url(/icon_ba.svg)" }}
                  />
                  <p style={{ textAlign: "center" }}>
                    <b className="iconGraph">
                      <Image
                        src="/icon_graph_01.svg"
                        alt="icon"
                        width={35}
                        height={35}
                      />
                    </b>
                    <span>1.3</span>
                  </p>
                  <p className="textNft">
                    Artistic Transformation of Life into Information.
                  </p>

                  <h5 className="lastStringNft">
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
            padding: 2%;
            vertical-align: top;
            width: ${viewFilter ? "80%" : "97%"};
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
          .option {
              font-size: 18px;
              padding: 10px;
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
            font-size: 18px;
            outline: none;
            border: 1px solid #c9c9c9;
          }
          .count {
            margin: 100px 0 50px;
            font-size: 20px;
            display: flex;
            justify-content: space-between;
            font-size: 18px;
            font-family: "GmarketSansMedium";

            font-weight: 500;
          }
          .filterItem {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .itemSliderImageNft {
            outline-offset: 3px;
            outline: 1px solid #ddd;
            background-size: 100% auto;
            border-radius: 10px;
            background-position: center top;
            background-repeat: no-repeat;
            height: auto;
            margin-bottom: 40px;
            cursor: pointer;
          }
          .itemSliderImageNft:hover {
            box-shadow: 0px 0px 12px 5px rgba(34, 60, 80, 0.2);
          }
          .itemNft {
            height: auto;
            width: 18%;

            text-align: center;
          }
          .iconItemNft {
            width: 60px;
            height: 60px;
            display: block;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 50%;
            border: 2px solid #fff;
          }
          .itemSliderImageNft p:first-of-type {
            font-size: 30px;
            margin: 15px;
            font-family: "GmarketSansMedium";
          }
          .itemSliderImageNft .img {
            margin: 15px;
          }
          .status {
            font-family: "GmarketSansMedium";
            height: 60px;           
            padding: 0 20px 0 60px;
            background-color: #f9f9f9;
            border-top: 1px solid #c9c9c9;
            border-bottom: 1px solid #c9c9c9;
            text-align: left;

          }
        `}
      </style>
    </div>
  );
}
