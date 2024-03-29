import React from "react";
import homeBtnsClasses from "./Btns.module.scss";
import { motion } from "framer-motion";

export const Btns = () => {
    return (
        <motion.div
            className={homeBtnsClasses.wrapper}
            animate={{ opacity: [0, 0, 1] }}
            transition={{
                type: "spring",
                stiffness: 100,
                duration: 0.5,
                delay: 2.7,
            }}
        >
            <a href="#work">
                <motion.button
                    className="btnLight"
                    whileHover={{
                        scale: 0.9,
                        transition: {
                            type: "spring",
                            stiffness: 700,
                            duration: 0.5,
                        },
                    }}
                >
                    MY WORK
                </motion.button>
            </a>
            <a href="#about">
                <motion.button
                    className="btnDark"
                    whileHover={{
                        scale: 0.9,
                        transition: {
                            type: "spring",
                            stiffness: 700,
                            duration: 0.5,
                        },
                    }}
                >
                    ABOUT ME
                </motion.button>
            </a>
            <a href="/cv.pdf">
                <motion.button
                    className="btnDark"
                    whileHover={{
                        scale: 0.9,
                        transition: {
                            type: "spring",
                            stiffness: 700,
                            duration: 0.5,
                        },
                    }}
                >
                    CV
                </motion.button>
            </a>
        </motion.div>
    );
};
