import React from "react";
import homeBtnsClasses from "./Btns.module.css"
import {motion} from "framer-motion"

export const Btns = () => {
    return (
        <motion.div
            className={homeBtnsClasses.homeBtnsWrapper}
            animate={{opacity: [0, 0, 1]}}
            transition={{
                type: "spring",
                stiffness: 100,
                duration: .5,
                delay: 2.7
            }}
        >
            <motion.button
                className="btnLight"
                whileHover={{
                    scale: 0.9,
                    transition: { type: "spring", stiffness: 700, duration: 0.5 }
                }}
            >MY WORK</motion.button>
            <motion.button
                className="btnDark"
                whileHover={{
                    scale: 0.9,
                    transition: { type: "spring", stiffness: 700, duration: 0.5 }
                }}
            >ABOUT ME</motion.button>
        </motion.div>
    );
}