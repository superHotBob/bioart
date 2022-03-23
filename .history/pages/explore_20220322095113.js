import react, {useState} from "react";

export default function Explore() {
    const [viewFilter, setViewFilter] = useState(false);
    return (
        <div >
            <div className="mainExplore">
                <div className="filters">
                    <div className="filtersHeader">
                        <p>
                            <b className="iconFilter">Filter</b>
                            <b className="viewFilter" onClick={()=>setViewFilter(!viewFilter)}/>
                        </p>
                        
                    </div>


                </div>
                <div className="items">
                    <div className="allSorting"></div>
                    <p className="count"><span>All</span><span>12,258 Items</span></p>
                </div>

            </div>


            <style jsx>{`
                .filtersHeader {
                    height: 85px;
                    padding: 50px 10px;
                    background-color: ${viewFilter ?  '#999': 'inherrit'};
                }
                .filters {
                    width: ${viewFilter ? '300px' : '50px'};
                    
                    height: 100vh;
                    transition: all 0.5s;                    
                    border-right: 1px solid #c7c7c7;
                    background-color: #f9f9f9;

                }
                .iconFilter {
                    display: ${viewFilter ? 'inline-block' : 'none'};
                    font-size: 24px;
                    color: #fff;
                    display: inline-block;
                    width: 100px;
                    text-align: right;
                    background: url('/icon_filter.svg') left center / 40% no-repeat;
                    font-family: 'GmarketSansMedium';
                    font-weight: 400;
                }
                .viewFilter {
                    display: inline-block;
                    width: 30px;
                    float: right;
                   
                    height: 30px;
                    background: url('/icon_mn_open.svg') center / 70% no-repeat;
                }
                .items {
                    display: inline-block;
                }




            `}

            </style>
        </div>
    )
}