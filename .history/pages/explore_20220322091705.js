import react, {useState} from "react";

export default function Explore() {
    const [viewFilter, setViewFilter] = useState(false);
    return (
        <div >
            <div className="mainExplore">
                <div className="filters">
                    <b className="viewFilter"/>

                </div>
                <div className="items">
                    <div className="allSorting"></div>
                    <p className="count"><span>All</span><span>12,258 Items</span></p>
                </div>

            </div>


            <styles jsx>{`




            `}

            </styles>
        </div>
    )
}