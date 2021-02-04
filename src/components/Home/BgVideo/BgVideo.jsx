import React from "react";
import BgVideoInput from "./1.mp4";
import bgVideoClasses from "./BgVideo.module.css"

export class BgVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={bgVideoClasses.bgVideoWrapper}>
                <video
                    autoPlay
                    muted
                    loop
                    style={{height: "100%",}}
                >
                    <source src={BgVideoInput} type="video/mp4" />
                </video>
            </div>
        );
    }
}