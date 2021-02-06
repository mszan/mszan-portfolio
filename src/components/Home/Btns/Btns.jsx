import React from "react";
import homeBtnsClasses from "./Btns.module.css"

export function Btns(props) {
    return (
        <div className={homeBtnsClasses.homeBtnsWrapper}>
            <button className="btnLight">MY WORK</button>
            <button className="btnDark">ABOUT ME</button>
        </div>
    );
}