import React from "react";
import workClasses from "./Work.module.css"
import {Card} from "./Card";
import {Col, Row} from "antd";
import thumbnail1 from "./thumbnail1.png"

export class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={workClasses.workWrapper}>
                <Card
                    title="Here will be the project title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
                    thumbnail={thumbnail1}
                    repoUrl="https://www.google.com/"
                    demoUrl="https://www.google.com/"
                />
                <Card
                    title="Here will be the project title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
                    thumbnail={thumbnail1}
                    repoUrl="https://www.google.com/"
                    demoUrl="https://www.google.com/"
                />
                <Card
                    title="Here will be the project title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
                    thumbnail={thumbnail1}
                    repoUrl="https://www.google.com/"
                    demoUrl="https://www.google.com/"
                />
                <Card
                    title="Here will be the project title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
                    thumbnail={thumbnail1}
                    repoUrl="https://www.google.com/"
                    demoUrl="https://www.google.com/"
                />
                <Card
                    title="Here will be the project title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
                    thumbnail={thumbnail1}
                    repoUrl="https://www.google.com/"
                    demoUrl="https://www.google.com/"
                />
                <div style={{width: "3vw"}}>&nbsp;</div>
            </div>
        );
    }
}