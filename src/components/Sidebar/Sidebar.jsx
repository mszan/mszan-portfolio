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
        this.setState({sidebarOpen: open});
    }

    render() {
        // Sider menu items.
        const menuItems = [
            {anchor: "home", name: "Home"},
            {anchor: "about", name: "About me"},
            {anchor: "work", name: "My work"},
            {anchor: "contact", name: "Contact form"},
        ]

        return (
            <Sidebar
                sidebar={
                    <React.Fragment>
                        <ul className="sidebarUl">
                            <hr width={70}/>
                            {/* First link width. */}
                            {menuItems.map(item => (
                                <li>
                                    <p onClick={() => {
                                        document.querySelector('#' + item.anchor).scrollIntoView() // Scroll to given anchor.
                                        this.onSetSidebarOpen(!this.state.sidebarOpen)
                                    }}>{item.name}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="sidebarSocialsWrapper">
                            <a href="https://github.com/mszan"><img src={gitHubLogo} alt=""/></a>
                            <a href="https://www.linkedin.com/in/dawid-mszanowski"><img src={linkedInLogo} alt=""/></a>
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
                    onClick={() => {
                        this.onSetSidebarOpen(!this.state.sidebarOpen)
                    }}
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