import React from "react";

const Hamburger = (props) => {
    return (
        <div className={`hamburger ${props.open ? "open" : null}`}>
            <span/>
            <span/>
            <span/>
            <span/>
        </div>
    );
}

export default Hamburger;