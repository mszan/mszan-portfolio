import React from "react"
import contactClasses from "./Contact.module.css"

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className={contactClasses.contactWrapper}>
                    <div className={contactClasses.contactForm}>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <textarea rows={3} placeholder="Message" />
                        <button onClick={() => console.log("will be sending smth")} className="btnLight">SEND</button>
                    </div>
                    <div className={contactClasses.footerWrapper}>
                        <span>
                            2020 &copy; Dawid Mszanowski.<br />
                            All Rights Reserved.
                        </span>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}