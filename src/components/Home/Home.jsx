import React from "react";
import homeClasses from "./Home.module.css"
import {Btns} from "./Btns/Btns"
import {Decor} from "./Decor/Decor";
import {motion, useTransform, useViewportScroll} from "framer-motion";

export function Home() {
    const { scrollY } = useViewportScroll()
    const y1 = useTransform(scrollY, [0, 600], [600, 800])

    return (
        <div id="home" className={homeClasses.homeWrapper}>
            {/*background second color*/}
            <motion.div
                className={homeClasses.homeBg}
                animate={{
                    x: "-50vw",
                    rotateZ: [0, -10]
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 1,
                }}
                style={{
                    y: y1
                }}
            />

            {/*background decoration*/}
            <Decor/>

            <div className={homeClasses.titleWrapper}>
                <motion.div
                    style={{
                        fontWeight: "lighter",
                        fontSize: 34,
                    }}
                    animate={{
                        x: ["-10vw", "0vw"],
                        opacity: [0, 0, 1]
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        duration: .5
                    }}
                >
                    <span>Hello,</span>
                </motion.div>
                <motion.div
                    style={{
                        fontWeight: "normal",
                        fontSize: 65,
                    }}
                    animate={{
                        x: ["-10vw", "0vw"],
                        opacity: [0, 0, 1]
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        duration: .5,
                        delay: 1
                    }}
                >
                    <span>I'm</span>
                    <span style={{fontWeight: "bold"}}>&nbsp;Dawid</span>
                </motion.div>
                <motion.div
                    animate={{
                        // x: ["-10vw", "0vw"],
                        opacity: [0, 0, 1]
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        duration: .5,
                        delay: 1.7
                    }}
                >
                    <p
                        style={{
                            color: "#8A94A7",
                            marginBottom: "2rem"
                        }}
                    >
                        A 21 years old IT student looking for his first full-time <br/> job as a Junior Frontend / Web
                        Developer
                    </p>
                </motion.div>
                <Btns/>
            </div>
        </div>
    );
}