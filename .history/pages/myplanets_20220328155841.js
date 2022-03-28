import react, { useState } from "react";
import Image from "next/image";
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
      <div className="mainExplore">
        <div className="header__image" />

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
          <div className="genomeStoreHeader">
            <div className="genomeStoreHeader__text">
              <h2>Gemone Story</h2>
              <p className="icons">
                <figure>
                  <Image
                    src="/icon_tele.png"
                    width={27}
                    height={27}
                    alt="icon"
                  />
                </figure>
                <figure>
                  <Image
                    src="/icon_insta_b.png"
                    width={27}
                    height={27}
                    alt="icon"
                  />
                </figure>
                <figure>
                  <Image
                    src="/icon_facebook.png"
                    width={27}
                    height={27}
                    alt="icon"
                  />
                </figure>
                <figure>
                  <Image
                    src="/icon_twitter_b.png"
                    width={27}
                    height={27}
                    alt="icon"
                  />
                </figure>
                <a href="/">bioart.net</a>
              </p>
              <p>Genome Story</p>
              <div className="counters">
                <span>
                  Item <b>8</b>
                </span>
                <span>
                  Owner <b>305</b>
                </span>
                <span>
                  Floor price
                  <figure>
                    <Image
                      src="/icon_graph_01.svg"
                      width={20}
                      height={20}
                      alt="icon"
                    />
                  </figure>{" "}
                  <b>---</b>
                </span>
                <span>
                  Valume traded <b>1</b>
                </span>
              </div>
            </div>
            <div className="genomeMarks">
                <figure className="one"/>
                <figure className="two"/>
                <figure className="three"/>
                <figure className="four"/>
            </div>
          </div>
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
            <span>12,258 Items</span>
          </p>
          <div className="filterItem">
            {newNft.map((i, index) => (
              <>
                <Link href="/nft/one" passHref key={index}>
                  <div
                    key={index}
                    className="itemSliderImageNft"
                    style={{
                      height: "500px",
                      width: "300px",
                      paddingTop: "270px",
                      backgroundImage:
                        index % 2
                          ? "url(/article-img.png)"
                          : "url(/planet-img-01.png)",
                    }}
                  >
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
                    <p className="textNft">
                      Artistic Transformation of Life into Information.
                    </p>

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
                </Link>{" "}
              </>
            ))}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .mainExplore {
            width: 100%;
          }
          .header__image {
            background: url("/planet_top_bg.jpg") 100% / 100% no-repeat;
            height: 240px;
            border-bottom: 1px solid #c9c9c9;
          }
          .filtersHeader {
            height: 85px;
            padding: 30px 10px 10px 25px;
            background-color: ${viewFilter ? "#999" : "#f9f9f9"};
          }
          .filters {
            width: 20%;
            margin-left: ${viewFilter ? "0" : "-17%"};
            display: inline-block;
            transition: all 0.5s;
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
            vertical-align: top;
            width: ${viewFilter ? "80%" : "97%"};
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

          .itemSliderImageNft p:first-of-type {
            font-size: 30px;
            margin: 15px;
            font-family: "GmarketSansMedium";
          }
          .itemSliderImageNft .img {
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
            margin: 10px auto;
            padding: 10px 0;
            border-top: 1px solid #c9c9c9;
            font-size: 18px;
            color: #333;
            display: flex;
            justify-content: space-between;
          }
          h5 b {
            margin: 0 5px 0 0;
            flex-grow: 1;
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
            background: url(/icon_drp_arr.svg) no-repeat 100% / 34% 35%;
          }
          .genomeStoreHeader {
            height: 350px;
            padding: 35px 0 0 250px;
            position: relative;
          }
          .genomeStoreHeader__text {
            position: relative;
          }
          .genomeStoreHeader__text:before {
            content: "";
            background: url("/planet_top_bg.jpg") center / cover no-repeat;
            height: 110px;
            position: absolute;
            top: -50px;
            width: 110px;
            left: -140px;
            display: inline-block;
            border-radius: 50%;
            border: 1px solid #c9c9c9;
          }
          .genomeStoreHeader__text h2 {
            font-size: 35px;
            font-family: "GmarketSansLight";
            font-weight: 800;
          }
          .icons figure {
            margin-right: 10px;
          }
          p {
            font-size: 20px;
            font-family: "GmarketSansLight";
            font-weight: 800;
          }
          a {
            font-size: 20px;
            color: #00b4e6;
            vertical-align: super;
          }
          .counters span {
            width: auto;
            font-family: "GmarketSansLight";
            font-weight: 800;
            margin-right: 30px;
            display: inline-block;
            font-size: 18px;
          }
          .counters b {
            color: #00b4e6;
            font-family: "GmarketSansBold";
          }
          .counters figure {
            margin: 10px;
            vertical-align: sub;
            width: 20px;
            display: inline-block;
            height: 20px;
          }
          .genomeMarks {
            width: 200px;
            height: 40px;
            position: absolute;
            left: 80%;
            height: 10%;
            display: flex;
            justify-content: space-between;
          }
          .genomeMarks figure {
              width: 40px;
              height: 40px;
              cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
