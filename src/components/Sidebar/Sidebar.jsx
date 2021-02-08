import React from "react";
import Sidebar from "react-sidebar";
import "./Sidebar.css"
import Hamburger from "./Hamburger/Hamburger";
import gitHubLogo from "./GitHub.svg"
import linkedInLogo from "./LinkedIn.svg"

export class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false

        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <Sidebar
                sidebar={
                    <React.Fragment>
                            <ul className="sidebarUl">
                                <hr width={70} /> {/* Home link width. */}
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About me</a>
                                </li>
                                <li>
                                    <a href="#">My work</a>
                                </li>
                                <li>
                                    <a href="#">Contact form</a>
                                </li>
                            </ul>
                            <div className="sidebarSocialsWrapper">
                                <a href="#"><img src={gitHubLogo} alt="" /></a>
                                <a href="#"><img src={linkedInLogo} alt="" /></a>
                            </div>
                    </React.Fragment>
                }
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                shadow={false}
                overlayClassName="sidebarOverlay"
                sidebarClassName="sidebarContent"
            >
                <div
                    onClick={() => {this.onSetSidebarOpen(!this.state.sidebarOpen)}}
                    style={{
                        zIndex: 100,
                        width: 90,
                        height: 80,
                        position: "fixed",
                        cursor: "pointer"
                    }}
                >
                    <Hamburger open={this.state.sidebarOpen}/>
                </div>
            </Sidebar>
        );
    }
}