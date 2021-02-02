import React from "react";
import titleClasses from "./Title.module.css";

export class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={titleClasses.titleWrapper}>
                <div className={titleClasses.titleHello}>
                    <span>Hello,</span>
                </div>
                <div className={titleClasses.titleIm}>
                    <span>I’m</span>
                    <span
                        className={titleClasses.titleDawid}
                    > Dawid</span>
                </div>
            </div>
        );
    }
}