import React from "react"
import contactClasses from "./Contact.module.scss"
import {motion} from "framer-motion";
import {init, send} from 'emailjs-com';
import moment from "moment";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
init(publicRuntimeConfig.REACT_APP_EMAILJS_USERID);

export class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formName: "", // Form input field "formName" value.
            formEmail: "", // Form input field "formEmail" value.
            formEmailValid: true, // Email field value valid. Initial must me true.
            formMsg: "", // Form input field "formMsg" value.
            formBtnDisabled: true, // Tells if form button should be disabled.
            emailSent: this.didUserSendEmailLately(), // Tells if email has been sent.
        };
        this.formChangeHandler = this.formChangeHandler.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    /**
     * Checks if user sent message lately
     * by accessing localStorage item.
     * @returns {boolean}
     */
    didUserSendEmailLately = () => {
        // Check if user sent any message within last day.
        const timeLastEmailSent = moment(process.browser ? localStorage.getItem("timeLastEmailSent") : null)
        return timeLastEmailSent.add(1, "days").isAfter(moment())
    }

    /**
     * Checks if form button should be disabled.
     * Sets 'formBtnDisabled' state.
     */
    formBtnStateHandler = () => {
        if (this.state.formName === "" // If form field formName is empty.
            || this.state.formEmail === "" // If form field formEmail is empty.
            || this.state.formMsg === "" // If form field formMsg is empty.
            || !this.state.formEmailValid // If email is invalid.
            || this.state.emailSent // If email has been sent.
        ) {this.setState({formBtnDisabled: true})}
        else {this.setState({formBtnDisabled: false})}
    }

    /**
     * Validates form input fields.
     * Gets called whenever user modifies input fields.
     * @param event
     */
    formChangeHandler = event => {
        let name = event.target.name
        let val = event.target.value

        if(name === "formEmail") {
            // Check if email is valid.
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(val)) {
                this.setState({[name]: val})
                this.setState({formEmailValid: true})
            } else {this.setState({formEmailValid: false})}
        } else {this.setState({[name]: val})}
        this.formBtnStateHandler()
    }

    /**
     * Sends an email.
     * Sets 'timeLastEmailSent' localStorage item.
     */
    sendEmail = () => {
        this.setState({emailSent: true})
        send("default_service", "template_3e09je6", {
            "to_name": this.state.formName,
            "from_name": this.state.formEmail,
            "message": this.state.formMsg,
        })
            .then(() => localStorage.setItem("timeLastEmailSent", moment().format()))

    }

    render() {
        // Style for invalid input.
        const invalidInputStyle = {backgroundColor: "red", transform: "scaleX(1)"}

        return (
            <React.Fragment>
                <motion.div
                    id="contact"
                    className={contactClasses.wrapper}
                >
                    <div className={contactClasses.form}>
                        <div className={contactClasses.bg}>
                            <div/>
                            <div/>
                        </div>
                        <div className={contactClasses.inner}>
                            <input
                                type="text"
                                name="formName"
                                placeholder="Name"
                                disabled={this.state.emailSent}
                                onChange={this.formChangeHandler}
                            />
                            <div className={contactClasses.inputBorder}/>

                            <input
                                type="email"
                                name="formEmail"
                                placeholder="Email"
                                disabled={this.state.emailSent}
                                onChange={this.formChangeHandler}
                            />
                            <div
                                style={this.state.formEmailValid ? null : invalidInputStyle}
                                className={contactClasses.inputBorder}
                            />

                            <textarea
                                rows={3}
                                name="formMsg"
                                placeholder="Message"
                                disabled={this.state.emailSent}
                                onChange={this.formChangeHandler}
                            />
                            <div
                                style={{top: -20}} // because textarea bottom-margin seems to be buggy
                                className={contactClasses.inputBorder}
                            />

                            <button
                                className="btnLight"
                                disabled={this.state.formBtnDisabled}
                                onClick={this.sendEmail}
                            >{this.state.emailSent ? "Thank you for the message!" : "SEND"}</button>
                        </div>
                    </div>
                    <div>
                        <span>
                            2020 &copy; Dawid Mszanowski
                        </span>
                    </div>
                </motion.div>
            </React.Fragment>
        );
    }
}