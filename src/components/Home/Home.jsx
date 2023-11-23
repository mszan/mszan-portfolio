import React from "react";
import homeClasses from "./Home.module.scss";
import { Btns } from "./Btns/Btns";
import { Decor } from "./Decor/Decor";
import { motion, useTransform, useViewportScroll } from "framer-motion";

export function Home() {
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 600], [600, 800]);
    const y2 = useTransform(scrollY, [0, 600], [0, -400]);

    return (
        <div id="home" className={homeClasses.wrapper}>
            {/*background second color*/}
            <motion.div
                className={homeClasses.bg}
                animate={{
                    x: "-50vw",
                    rotateZ: [0, -10],
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 1,
                }}
                style={{ y: y1 }}
            />

            {/*background decoration*/}
            <Decor />

            <motion.div
                style={{
                    y: process.browser ? (window.innerWidth > 968 ? y2 : 0) : 0,
                }}
                className={homeClasses.title}
            >
                <motion.div
                    style={{
                        fontWeight: "lighter",
                        fontSize: 34,
                        opacity: 0,
                    }}
                    animate={{
                        x: ["-10vw", "0vw"],
                        opacity: [0, 0, 1],
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        duration: 0.5,
                    }}
                >
                    <span>Hello,</span>
                </motion.div>
                <motion.div
                    style={{
                        fontWeight: "normal",
                        fontSize: 65,
                        opacity: 0,
                    }}
                    animate={{
                        x: ["-10vw", "0vw"],
                        opacity: [0, 0, 1],
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        duration: 0.5,
                        delay: 1,
                    }}
                >
                    <span>I'm</span>
                    <span style={{ fontWeight: "bold" }}>&nbsp;Dawid</span>
                </motion.div>
                <motion.div
                    style={{
                        opacity: 0,
                    }}
                    animate={{
                        // x: ["-10vw", "0vw"],
                        opacity: [0, 0, 1],
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        duration: 0.5,
                        delay: 1.7,
                    }}
                >
                    <p
                        style={{
                            color: "#8A94A7",
                            marginBottom: "2rem",
                        }}
                    >
                        A 24 years old Backend Engineer
                    </p>
                </motion.div>
                <Btns />
            </motion.div>
        </div>
    );
}
