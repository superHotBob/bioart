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


            <style jsx>{`
                .filters {
                    width: ${viewFilter ? '20%' : '5%'};
                    height: 80vh;

                }
                .viewFilter {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    background: url('/icon_mn_open.svg') center / 100% no-repeat;
                }




            `}

            </styles>
        </div>
    )
}