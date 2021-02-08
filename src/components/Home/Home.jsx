import React from "react";
import homeClasses from "./Home.module.css"
import {Btns} from "./Btns/Btns"
import {Decor} from "./Decor/Decor";
import {motion} from "framer-motion";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={homeClasses.homeWrapper}>
                {/*background second color*/}
                <div className={homeClasses.homeBg}/>

                {/*background decoration*/}
                <Decor />

                <motion.div
                    className={homeClasses.titleWrapper}
                    animate={{
                        x: ["-10vw", "0vw"],
                        opacity: [0, 0, 1]
                    }}
                    transition={{ type: "spring", stiffness: 100, duration: .5 }}
                >
                    <div className={homeClasses.titleHello}>
                        <span>Hello,</span>
                    </div>
                    <span className={homeClasses.titleIm}>I’m </span>
                    <span
                        className={homeClasses.titleDawid}
                    > Dawid</span>
                    <p className={homeClasses.titleIntro}>A 21 years old IT student looking for his first full-time <br /> job as a Junior Frontend / Web Developer</p>
                    <Btns />
                </motion.div>
            </div>
        );
    }
}