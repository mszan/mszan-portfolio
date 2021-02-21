import React from "react";
import Sidebar from "react-sidebar";
import Hamburger from "./Hamburger/Hamburger";

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
                            <a href="https://github.com/mszan">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55" width="40" height="40">
                                    <path d="M53.231,2.25H0V55.481H53.231ZM32.949,47.841c-1,.178-1.366-.44-1.366-.951,0-.642.024-3.921.024-6.571a4.63,4.63,0,0,0-1.343-3.648c4.4-.487,9.03-1.093,9.03-8.686a6.1,6.1,0,0,0-2.032-4.634,7.431,7.431,0,0,0-.2-5.347c-1.652-.511-5.43,2.127-5.43,2.127a18.692,18.692,0,0,0-9.886,0s-3.778-2.638-5.43-2.127a7.374,7.374,0,0,0-.2,5.347,5.968,5.968,0,0,0-1.854,4.634c0,7.557,4.432,8.2,8.828,8.686a4.307,4.307,0,0,0-1.259,2.65c-1.129.511-4.016,1.39-5.739-1.652a4.139,4.139,0,0,0-3.03-2.032c-1.925-.024-.131,1.212-.131,1.212,1.283.594,2.186,2.875,2.186,2.875,1.153,3.529,6.666,2.341,6.666,2.341,0,1.652.024,4.337.024,4.824,0,.511-.356,1.129-1.366.951A19.713,19.713,0,0,1,7.105,29.032,18.856,18.856,0,0,1,26.354,9.843c10.908,0,19.748,8.282,19.748,19.189A19.532,19.532,0,0,1,32.949,47.841Zm-11.656-7.26c-.226.048-.44-.048-.463-.2-.024-.178.131-.333.356-.38.226-.024.44.071.463.226S21.53,40.534,21.293,40.581Zm-1.129-.107c0,.154-.178.285-.416.285-.261.024-.44-.107-.44-.285,0-.154.178-.285.416-.285C19.95,40.166,20.164,40.3,20.164,40.474Zm-1.628-.131c-.048.154-.285.226-.487.154-.226-.048-.38-.226-.333-.38s.285-.226.487-.178C18.441,40.011,18.6,40.189,18.536,40.344ZM17.074,39.7c-.107.131-.333.107-.511-.071-.178-.154-.226-.38-.107-.487.107-.131.333-.107.511.071C17.122,39.369,17.181,39.607,17.074,39.7Zm-1.081-1.081c-.107.071-.309,0-.44-.178s-.131-.38,0-.463c.131-.107.333-.024.44.154a.348.348,0,0,1,0,.487Zm-.772-1.153c-.107.107-.285.048-.416-.071-.131-.154-.154-.333-.048-.416.107-.107.285-.048.416.071C15.3,37.207,15.328,37.385,15.221,37.468Zm-.8-.879a.224.224,0,0,1-.333.048c-.154-.071-.226-.2-.178-.309a.28.28,0,0,1,.333-.048C14.4,36.363,14.472,36.494,14.425,36.589Z"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/dawid-mszanowski">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55" width="40" height="40">
                                    <path d="M0,2.25,0,55.481H52.872l.36-53.231ZM16.088,47.877H8.2v-25.4h7.9v25.4ZM12.143,19a4.575,4.575,0,1,1,4.575-4.575A4.577,4.577,0,0,1,12.143,19ZM45.663,47.877h-7.89V35.52c0-2.947-.059-6.737-4.1-6.737-4.111,0-4.741,3.208-4.741,6.523V47.877h-7.89v-25.4h7.569v3.47h.107a8.31,8.31,0,0,1,7.474-4.1c7.985,0,9.47,5.264,9.47,12.108Z"/>
                                </svg>
                            </a>
                        </div>
                    </React.Fragment>
                }
                style={{overflowY: "visible"}}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                shadow={false}
                overlayClassName="sidebarOverlay"
                sidebarClassName="sidebarContent"
            >
                <div
                    onClick={() => {
                        this.onSetSidebarOpen(!this.state.sidebarOpen)
                        console.log('POS 66: ', this.state.sidebarOpen)
                        console.log('POS 67: ', "click")
                    }}
                    className="hamburgerWrapper"
                >
                    <Hamburger open={this.state.sidebarOpen}/>
                </div>
            </Sidebar>
        );
    }
}