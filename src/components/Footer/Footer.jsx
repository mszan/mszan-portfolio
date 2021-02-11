import React from "react";

export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{
                position: "absolute",
                width: "100%",
                bottom: 25,
                left: 0,
                textAlign: "center",
                color: "#7d96b1"
            }}>
                <span>
                    2020 &copy; Dawid Mszanowski
                </span>
            </div>
        );
    }
}