import react, { useState } from "react";

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
            <span>All</span>
            <span>12,258 Items</span>
          </p>
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
            width: 30%;
            height: 44px;
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
            width: 20%;
            float: right;
            border: 1px solid #c9c9c9;
          }
        `}
      </style>
    </div>
  );
}
