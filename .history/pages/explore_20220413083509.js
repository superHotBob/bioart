import react, { useState, useEffect } from "react";
import Image from "next/image";
import Head from 'next/head'

import Link from "next/link";


const nft = [
  { price: 1.1 },
  { price: 2.3 },
  { price: 3.4 },
  { price: 4.5 },
  { price: 5.5 },
  { price: 1.8 },
  { price: 4.1 },
  { price: 2.3 },
  { price: 9.4 },
  { price: 5.5 },
  { price: 7.5 },
  { price: 2.8 },
];

export default function Explore() {
  const [myscreen, setMyScreen] = useState(true);
  const [viewText, setViewText] = useState(false);
  useEffect(() => setMyScreen(window.screen.width > 500), []);
  const [viewFilter, setViewFilter] = useState(false);
  const [statusView, setStatusView] = useState(false);
  const [priceView, setPriceView] = useState(false);
  const [priceСurrenсy, setPriceCurrency] = useState("usd");
  const [categoriesView, setCategoriesView] = useState(false);
  const [planetView, setPlanetView] = useState(false);
  const [newNft, setNewNft] = useState(nft);
  const [sort, setSort] = useState("priceLow");
  const [minPrice, setMinPriceOld] = useState(0);
  const [maxPrice, setMaxPriceOld] = useState(1000);

  function selectSort(e) {
    if (e.target.value === "priceHight") {
      let Nft = newNft.sort((a, b) => (a.price < b.price ? 1 : -1));
      setNewNft([...Nft]);
      setSort(e.target.value);
    } else {
      let Nft = newNft.sort((a, b) => (a.price > b.price ? 1 : -1));
      setNewNft([...Nft]);
      setSort(e.target.value);
    }
  }
  function setMaxPrice(e) {
    setMaxPriceOld(e.target.value);
    let Nft = nft
      .sort((a, b) =>
        (sort === "priceLow" ? a.price > b.price : a.price < b.price) ? 1 : -1
      )
      .filter(
        (i) => (minPrice || 0) < i.price && i.price < (e.target.value || 1000)
      );
    setNewNft([...Nft]);
  }
  function setMinPrice(e) {
    setMinPriceOld(e.target.value);
    let Nft = nft
      .sort((a, b) =>
        (sort === "priceLow" ? a.price > b.price : a.price < b.price) ? 1 : -1
      )
      .filter(
        (i) => (maxPrice || 1000) > i.price && i.price > (e.target.value || 0)
      );
    setNewNft([...Nft]);
  }
  function clear() {
    setMaxPriceOld(1000);
    setMinPriceOld(0);
    let Nft = nft
      .sort((a, b) =>
        (sort === "priceLow" ? a.price > b.price : a.price < b.price) ? 1 : -1
      )
      .filter((i) => 1000 > i.price && i.price > 0);
    setNewNft([...Nft]);
  }

  return (
    <>
    <Head>
        <title>My NFTs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
          {viewFilter && (
            <>
              <div className="status">
                <p onClick={() => setStatusView(!statusView)}>Status</p>
                <label>
                  <input type="checkbox" />
                  <span>Buy Now</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>One Action</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>New</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>Has offer</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>Solid out</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>Ready</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>Hidden</span>
                </label>
              </div>
              <div className="price">
                <p onClick={() => setPriceView(!priceView)}>Price</p>
                <label>
                  <input
                    type="radio"
                    checked={priceСurrenсy === "usd"}
                    onClick={() => setPriceCurrency("usd")}
                  />
                  <b>
                    <Image
                      src="/icon_cate_12.svg"
                      width={30}
                      height={30}
                      alt="icon"
                    />{" "}
                  </b>
                  <span>USD</span>
                </label>
                <label>
                  <input
                    type="radio"
                    checked={priceСurrenсy === "solana"}
                    onClick={() => setPriceCurrency("solana")}
                  />
                  <b>
                    <Image
                      src="/icon_cate_off_13.svg"
                      width={30}
                      height={30}
                      alt="icon"
                    />{" "}
                  </b>
                  <span>SOLANA</span>
                </label>
                <input
                  style={{ margin: "0 0 15px 55px" }}
                  className="priceInter"
                  onChange={setMinPrice}
                  value={minPrice}
                  type="text"
                />
                <span style={{ margin: "0 10px" }}>-</span>
                <input
                  className="priceInter"
                  onChange={setMaxPrice}
                  value={maxPrice}
                  type="text"
                />
                <b className="searchPrice" onClick={clear} />
              </div>
              <div className="categories">
                <p onClick={() => setCategoriesView(!categoriesView)}>
                  Categories
                </p>
                <label>
                  <input type="checkbox" />
                  <b>
                    <Image
                      src="/icon_cate_star.svg"
                      width={30}
                      height={30}
                      alt="icon"
                    />{" "}
                  </b>
                  <span>Subscribe</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <b>
                    <Image
                      src="/icon_cate_off_01.svg"
                      width={30}
                      height={30}
                      alt="icon"
                    />{" "}
                  </b>
                  <span>All</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <b>
                    <Image
                      src="/icon_cate_off_02.svg"
                      width={30}
                      height={30}
                      alt="icon"
                    />{" "}
                  </b>
                  <span>Genome</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <b>
                    <Image
                      src="/icon_cate_04.svg"
                      width={30}
                      height={30}
                      alt="icon"
                    />{" "}
                  </b>
                  <span>Common</span>
                </label>
              </div>
              <div className="planets">
                <p onClick={() => setPlanetView(!planetView)}>Planets</p>
                <label className="planetsSearchLabel">
                  <input
                    type="search"
                    placeholder="search"
                    className="planetsSearch"
                  />
                </label>
              </div>
            </>
          )}
        </div>
        <div className="items">
          <b
            className="iconFilterMobile"
            onClick={() => setViewFilter(!viewFilter)}
          />
          <div className="allSorting">
            <div className="selectBlock">
              {myscreen && (
                <select className="one">
                  <option>All</option>
                  <option>Subscribe</option>
                  <option>Genome</option>
                  <option>Common</option>
                </select>
              )}
              <input type="search" placeholder="Search" />
            </div>
            <select className="two" onChange={selectSort}>
              <option className="option">Resently Listed</option>
              <option className="option">Resently Created</option>
              <option className="option" value="priceHight">
                Price: Hight to Low
              </option>
              <option className="option" value="priceLow">
                Price: Low to Hight
              </option>
              <option className="option">Ending Soon</option>
              <option className="option">Resently Sold</option>
              <option className="option">Most Favorited</option>
              <option className="option">Most viewed</option>
              <option className="option">Oldest</option>
            </select>
          </div>
          <p className="count">
            <span>All NFTs</span>
            <span>{nft.length} Items</span>
          </p>
          <div className="filterItem">
            {newNft.map((i, index) => (
              <>
                <div key={index} className="itemSlider">
                  <Link href="/nft/one" passHref key={index}>
                    <figure className="imageNft" 
                    style={{ backgroundImage: 'url("/article-img.png")' }}
                    />    
                    
                  </Link>{" "}
                  <b
                    className="iconItemNft"
                    style={{ backgroundImage: "url(/icon_ba.svg)" }}
                  />
                  <p style={{ textAlign: "center", margin: "10px 0 2px" }}>
                    <b className="iconGraph">
                      <Image
                        src="/icon_graph_01.svg"
                        alt="icon"
                        width={35}
                        height={35}
                      />
                    </b>
                    <span>{i.price}</span>
                  </p>
                  <p className="textNft" onClick={() => setViewText(!viewText)}>
                    Artistic Transformation
                    {viewText && <>...</>}
                    <span className="hide"> of Life into Information.</span>
                  </p>
                  <h5>
                    <b>
                      <Image
                        src={
                          index % 2 ? "/icon_like_on.svg" : "/icon_like_off.svg"
                        }
                        layout="fill"
                        alt="icon"
                      />{" "}
                    </b>
                    <span
                      style={{ flexGrow: 8, textAlign: "left", marginTop: 5 }}
                    >
                      15.285
                    </span>
                    <b>
                      <Image src="/icon_bubble.svg" layout="fill" alt="icon" />
                    </b>
                    <span style={{ marginTop: 5 }}>25.000</span>
                  </h5>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .mainExplore {
            width: 100%;
            display: flex;
          }         
          .filtersHeader {
            display: ${myscreen ? "inline-block" : "none"};
            height: 85px;
            width: 100%;
            padding: 30px 10px 10px 25px;
            background-color: ${viewFilter ? "#999" : "#f9f9f9"};
          }
          .filters {
            width: ${myscreen ? 20 : 100}%;
            margin-left: ${viewFilter ? 0 : myscreen ? -17 : 0}%;
            display: inline-block;
            transition: all 0.5s;
            background-color: #f9f9f9;
          }
          .iconFilter,
          .iconFilterMobile {
            display: ${viewFilter ? "inline-block" : "none"};
            font-size: 24px;
            color: #fff;
            width: 100px;
            text-align: right;
            background: url("/icon_filter.svg") left center / 30% no-repeat;
            font-family: "GmarketSansMedium";
            font-weight: 400;
          }
          .iconFilterMobile {
            display: ${!myscreen ? "block" : "none"};
            background: url("/filter_blk.png") right center / 100% no-repeat;
            height: 30px;
            width: 30px;
            margin: 0 0 0 90%;
          }
          .viewFilter {
            display: inline-block;
            width: 30px;
            float: right;
            cursor: pointer;
            height: 30px;
            background: ${viewFilter
                ? "url('/icon_mn_close.svg')"
                : "url('/icon_mn_open.svg')"}
              center / 70% no-repeat;
          }
          .items {
            display: inline-block;
            padding: 2%;
            width: ${viewFilter ? (myscreen ? "80%" : "100%") : "97%"};
            border-left: 1px solid #c7c7c7;
          }
          .selectBlock {
            width: 500px;
            height: 47px;
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
            font-weight: 800;
            font-family: "GmarketSansLight";
          }
          .filterItem {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .itemSlider {
            height: 500px;
            width: 305px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            background-size: 100% auto;
            border-radius: 15px;
            height: auto;
            margin-bottom: 40px;           
          }
          .imageNft {
            width: 100%;
            height: 250px;
            background-size: cover;
            background-position: center;
            position: relative;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            z-index: 1;
          }
          .textNft {
            font-size: 18px;
            width: 80%;
            margin: 0 auto;
          }
          .itemSlider:hover {
            box-shadow: 0px 0px 12px 5px rgba(34, 60, 80, 0.2);
          }
          .itemNft {
            height: auto;
            width: 18%;
            text-align: center;
          }

          .itemSlider p:first-of-type {
            font-size: 30px;
            margin: 15px;
            font-family: "GmarketSansMedium";
          }
          .itemSlider .img {
            margin: 15px;
          }
          .status {
            height: ${statusView ? "auto" : "60px"};
            background-color: #fff;
            transition: all 1s;
            overflow: hidden;
          }
          .price {
            height: ${priceView ? "auto" : "60px"};
            background-color: #fff;
            transition: all 0.5s;
            overflow: hidden;
          }
          .planets {
            height: ${planetView ? "auto" : "60px"};
            background-color: #fff;
            transition: all 0.5s;
            overflow: hidden;
          }
          .categories {
            height: ${categoriesView ? "auto" : "60px"};
            background-color: #fff;
            transition: all 0.5s;
            overflow: hidden;
          }
          .status p,
          .price p,
          .planets p,
          .categories p {
            font-family: "GmarketSansMedium";
            cursor: pointer;
            margin: 0;
            height: 60px;
            padding: 20px 50px;
            font-size: 18px;
            border-top: 1px solid #c9c9c9;
          }
          .price p {
            background: #f9f9f9
              url(${!priceView
                ? "/icon_filtermn_btn_off.svg"
                : "/icon_filtermn_btn_on.svg"})
              95% center / 20px no-repeat;
            border-bottom: ${priceView ? "1px solid #c9c9c9" : "none"};
          }
          .price p:hover,
          .status p:hover,
          .categories p:hover,
          .planets p:hover {
            background: #f9f9f9 url("/icon_filtermn_btn_off_hv.svg") 95% center /
              20px no-repeat;
          }
          .status p {
            background: #f9f9f9
              url(${!statusView
                ? "/icon_filtermn_btn_off.svg"
                : "/icon_filtermn_btn_on.svg"})
              95% center / 20px no-repeat;
            border-bottom: ${statusView ? "1px solid #c9c9c9" : "none"};
          }
          .categories p {
            background: #f9f9f9
              url(${!categoriesView
                ? "/icon_filtermn_btn_off.svg"
                : "/icon_filtermn_btn_on.svg"})
              95% center / 20px no-repeat;
            border-bottom: ${categoriesView ? "1px solid #c9c9c9" : "none"};
          }
          .planets p {
            background: #f9f9f9
              url(${!planetView
                ? "/icon_filtermn_btn_off.svg"
                : "/icon_filtermn_btn_on.svg"})
              95% center / 20px no-repeat;
            border-bottom: 1px solid #c9c9c9;
          }
          label {
            display: block;
            font-size: 18px;
            color: #c9c9c9;
            cursor: pointer;
            margin: 13px 0 13px 50px;
            font-family: "GmarketSansMedium";
          }
          label b {
            vertical-align: middle;
            margin: 0 5px;
            height: 30px;
            display: inline-block;
          }
          input[type="checkbox"],
          input[type="radio"] {
            display: inline-block;
            margin-right: 10px;
            border: 1px solid #c9c9c9;
            border-radius: 1px;
            width: 18px;
            height: 18px;
            vertical-align: text-bottom;
          }
          .priceInter {
            display: inline-block;
            width: 22%;
            border: 1px solid #c7c7c7;
            border-radius: 10px;
            height: 38px;
            font-size: 18px;
            padding: 10px;
            outline: none;
          }
          .searchPrice {
            background: url("/icon_search_02.svg") 95% center no-repeat;
            display: inline-block;
            width: 40px;
            vertical-align: middle;
            height: 40px;
            margin-left: 10px;
            cursor: pointer;
          }
          .searchPrice:hover {
            background: url("/icon_search_02_hv.svg") 95% center no-repeat;
          }
          .planetsSearch {
            border: 1px solid #c9c9c9;
            border-radius: 34px;
            margin: 30px auto;
            padding: 15px 15px 15px 45px;
            width: 67%;
            display: block;
            font-size: 18px;
            outline: none;
          }
          .planetsSearchLabel {
            margin: 0;
            position: relative;
          }
          .planetsSearchLabel:before {
            content: url("/icon_search.svg");
            height: 20px;
            width: 20px;
            display: inline-block;
            position: absolute;
            left: 24%;
            top: 19px;
          }
          input:checked ~ span,
          input:hover ~ span {
            color: #000;
          }
          h5 {
            width: 90%;
            margin: 10px auto 5px;
            padding: 10px 0;
            border-top: 1px solid #c9c9c9;
            font: 800 18px/14px GmarketSansLight;
            color: #333;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          h5 b {
            margin: 0 5px 0 0;
            flex-grow: 1;
            position: relative;
            height: 22px;
            width: 22px;
          }
          select {
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 18%;
            height: 44px;
            padding-left: 20px;
            font-size: 18px;
            background: transparent;
            border: 1px solid #c9c9c9;
            border-radius: 20px;
            background: url(/icon_drp_arr.svg) no-repeat 110% / 34% 35%;
          }
          @media screen and (max-width: 550px) {
            .hide {
              display: ${viewText ? "inline-block" : "none"};
              font: 300 12px/16px "GmarketSansLight";
            }
            .textNft {
              font: 300 12px/16px "GmarketSansLight";
              margin-bottom: 10px;
            }
            .mainExplore {
              flex-direction: column;
            }
            .items {
              width: 98%;
              margin: 0 auto;
              display: block;
              border: none;
            }
            .itemSlider {
              height: auto;
              width: 48%;
              
            }
            .imageNft {
              height: 150px;
            }
            .selectBlock,
            .two {
              margin: 20px auto;
              float: none;
              width: 100%;
              margin: 20px auto 0;
            }
            .count {
              margin: 30px auto 10px;
              font-size: 14px;
            }
            .textNft {
              font-size: 14px;
            }
            h5 b {
              width: 17px;
              height: 17px;
            }
            h5 {
              font-size: 14px;
              margin: 0 auto;
            }
            .selectBlock input {
              width: 100%;
              padding: 12px 28px 12px 60px;
              background: url("/icon_search.svg") 6% 58% / 9% no-repeat;
            }
          }
        `}
      </style>
    </>
  );
}
