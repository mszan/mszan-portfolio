import React from "react";
import {BgVideo} from "./BgVideo/BgVideo";
import {Title} from "./Title";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div
                style={{
                    overflow: "hidden"
                }}
            >
                <BgVideo />
                <Title />
            </div>
        );
    }
}