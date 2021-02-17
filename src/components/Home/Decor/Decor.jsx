import React from "react"
import decorClasses from "./Decor.module.css"
import {motion, useTransform, useViewportScroll} from "framer-motion";
import {getRandomBlockRotation} from "../../../helpers/getRandomBlockRotation";

export const Decor = () => {
    const { scrollY } = useViewportScroll()

    // Decor Blocks properties.
    const decorBlocks = [
        {
            id: "bigBlueBlock",
            tone: "blue",
            rotateZ: 52,
            styles: {
                top: "17vh",
                backgroundColor: "#0270D7",
                opacity: ".5",
                width: "450px",
                height: "450px",
                marginLeft: "15vw",
                marginTop: "5vh",
                y: useTransform(scrollY, [0, 1200], [0, 420]),
            },
        },

        {
            id: "smallNyanBlock",
            tone: "blue",
            rotateZ: -30,
            styles: {
                top: "25vh",
                backgroundColor: "#00BFFB",
                width: "20px",
                height: "20px",
                opacity: "0.3",
                y: useTransform(scrollY, [0, 1200], [0, 500]),
            }
        },

        {
            id: "mediumNyanBlock",
            tone: "blue",
            rotateZ: -60,
            styles: {
                top: "15vh",
                backgroundColor: "#00BFFB",
                width: "40px",
                height: "40px",
                marginLeft: "15vw",
                y: useTransform(scrollY, [0, 1200], [0, 400]),
            }
        },

        {
            id: "bigNyanBlock",
            tone: "blue",
            rotateZ: -8,
            styles: {
                top: "60vh",
                backgroundColor: "#00BFFB",
                width: "150px",
                height: "150px",
                marginLeft: "10vw",
                y: useTransform(scrollY, [0, 1200], [0, 200]),
            }
        },

        {
            id: "bigDarkBlock",
            tone: "dark",
            rotateZ: -1,
            rotateY: -15,
            rotateX: 8,
            perspective: 500,
            styles: {
                backgroundColor: "#242830",
                top: "35vh",
                width: "400px",
                height: "300px",
                y: useTransform(scrollY, [0, 1200], [0, 150]),
            }
        },

        {
            id: "mediumDarkBlock",
            tone: "dark",
            rotateZ: 10,
            styles: {
                backgroundColor: "#242830",
                top: "30vh",
                width: "200px",
                height: "200px",
                marginLeft: "20vw",
                y: useTransform(scrollY, [0, 1200], [0, 50]),
            }
        },

        {
            id: "smallDarkBlock",
            tone: "dark",
            rotateZ: 20,
            styles: {
                backgroundColor: "#242830",
                top: "40vh",
                width: "70px",
                height: "70px",
                marginLeft: "-5vw",
                y: useTransform(scrollY, [0, 1200], [0, 250]),
            }
        },

        {
            id: "smallBlueBlock",
            tone: "blue",
            rotateZ: -22,
            styles: {
                top: "60vh",
                backgroundColor: "#0270D7",
                width: "100px",
                height: "100px",
                marginLeft: "2vw",
                y: useTransform(scrollY, [0, 1200], [0, 200]),
            }
        }
    ]

    return (
        <div className={decorClasses.decorWrapper}>
            <motion.div className={decorClasses.decorPathWrapper}>
                <svg height="100%" width="100%"
                     xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient x1="73%" y1="86%" x2="-8%" y2="-18%" id="gradientA">
                            <stop stopColor="#0270D7" offset="0%" stopOpacity="0"/>
                            <stop stopColor="#00BFFB" offset="51.568%"/>
                            <stop stopColor="#0270D7" offset="100%"/>
                        </linearGradient>
                        <linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="gradientB">
                            <stop stopColor="#0270D7" offset="0%"/>
                            <stop stopColor="#1D2026" offset="100%"/>
                        </linearGradient>
                        <linearGradient x1="25%" y1="0%" x2="0%" y2="0%" id="gradientC">
                            <stop stopColor="#00BFFB" offset="0%"/>
                            <stop stopColor="#1D2026" offset="100%" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                        <path className={decorClasses.decorPathCyanOne}
                              stroke="url(#gradientA)"
                              strokeWidth="3"
                              d="M1048,820 C360,824 192,72 192,72"
                        />
                        <path className={decorClasses.decorPathCyanTwo}
                              stroke="url(#gradientB)"
                              strokeWidth="1"
                              d="M10,16 C266,15 374,161 374,161 "
                        />
                        <path className={decorClasses.decorPathCyanThree}
                              stroke="url(#gradientC)"
                              strokeWidth="2"
                              d="M611,637 C374,580 376,145 376,145 "
                        />
                    </g>
                </svg>
            </motion.div>

            <div className={decorClasses.decorBlocksWrapper}>
                {decorBlocks.map((item, itemIndex) => (
                    <motion.div
                        whileHover={{
                            rotate: getRandomBlockRotation(5, item.id === "bigDarkBlock" ? 2 : 25),
                            scale: 1.1,
                            transition: {type: "spring", stiffness: 700, duration: 0.5},
                        }}
                        whileTap={{
                            rotate: Math.floor(Math.random() * (Math.floor(90) - Math.ceil(45))) + Math.ceil(45),
                            scale: .7,
                            transition: {duration: 0.5},
                        }}
                        animate={{
                            opacity: [0, 1],
                            rotateZ: [0, item.rotateZ ? item.rotateZ : 0],
                            rotateY: [0, item.rotateY ? item.rotateY : 0],
                            rotateX: [0, item.rotateX ? item.rotateX : 0],
                            transformPerspective: [null, item.perspective ? item.perspective : null]
                        }}
                        transition={{
                            duration: .7,
                            type: "spring",
                            stiffness: 500
                        }}
                        key={itemIndex}
                        style={{...item.styles}}
                        className={item.tone === "blue" ? decorClasses.decorBlockGradient : null}
                    >
                    </motion.div>
                ))}
            </div>
        </div>
    );
}