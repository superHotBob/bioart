import react, {useState} from "react";

export default function Explore() {
    const [viewFilter, setViewFilter] = useState(false);
    return (
        <div >
            <div className="mainExplore">
                <div className="filters">
                    <b className="viewFilter" onClick={()=>setViewFilter(!viewFilter)}/>

                </div>
                <div className="items">
                    <div className="allSorting"></div>
                    <p className="count"><span>All</span><span>12,258 Items</span></p>
                </div>

            </div>


            <style jsx>{`
                .filters {
                    width: ${viewFilter ? '300px' : '50px'};
                    height: 80vh;                    
                    border-right: 1px solid #c7c7c7;
                    background-color: #f9f9f9;

                }
                .viewFilter {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    background: url('/icon_mn_open.svg') center / 100% no-repeat;
                }




            `}

            </style>
        </div>
    )
}