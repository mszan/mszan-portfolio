import React from "react"
import contactClasses from "./Contact.module.css"
import {motion} from "framer-motion";

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
                        <div className={contactClasses.contactFormBg}>
                            <div/>
                            <div/>
                        </div>
                        <div className={contactClasses.contactFormInner}>
                            <input type="text" placeholder="Name" />
                            <div className={contactClasses.contactFormInputBorder}/>
                            <input type="text" placeholder="Email" />
                            <div className={contactClasses.contactFormInputBorder}/>
                            <textarea rows={3} placeholder="Message" />
                            <div className={contactClasses.contactFormInputBorder}
                                 style={{top: -20}} // because textarea bottom-margin seems to be buggy
                            />
                            <button
                                onClick={() => console.log("will be sending smth")}
                                className="btnLight"
                            >SEND</button>
                        </div>
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