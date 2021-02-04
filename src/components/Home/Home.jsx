import React from "react";
import {BgVideo} from "./BgVideo/BgVideo";
import {Title} from "./Title";
import homeClasses from "./Home.module.css"

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={homeClasses.homeWrapper}>
                <BgVideo />
                <Title />
            </div>
        );
    }
}