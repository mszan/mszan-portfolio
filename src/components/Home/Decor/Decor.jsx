import React from "react"
import decorClasses from "./Decor.module.css"
import {motion} from "framer-motion";


export class Decor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const decorBlocks = [
            //big blue block
            {
                color: "blue",
                rotation: 52,
                styles: {
                    top: "17vh",
                    background: "#0270D7",
                    opacity: ".5",
                    width: "450px",
                    height: "450px",
                    marginLeft: "15vw",
                    marginTop: "5vh"
                },
            },

            //small cyan block
            {
                color: "blue",
                rotation: -30,
                styles: {
                    top: "25vh",
                    background: "#00BFFB",
                    width: "20px",
                    height: "20px",
                    opacity: "0.3"
                }
            },



            //medium cyan block
            {
                color: "blue",
                rotation: -60,
                styles: {
                    top: "15vh",
                    background: "#00BFFB",
                    width: "40px",
                    height: "40px",
                    marginLeft: "15vw",
                }
            },


            //big cyan block
            {
                color: "blue",
                rotation: -8,
                styles: {
                    top: "60vh",
                    // opacity: ".5",
                    background: "#00BFFB",
                    width: "150px",
                    height: "150px",
                    marginLeft: "10vw"
                }
            },

            //big dark block
            {
                color: "dark",
                rotation: 0,
                styles: {
                    top: "35vh",
                    width: "400px",
                    height: "300px",
                    // transform: "perspective(500px) rotateY(-15deg) rotateX(8deg) rotateZ(-1deg)",
                }
            },

            //medium dark block
            {
                color: "dark",
                rotation: 10,
                styles: {
                    top: "30vh",
                    width: "200px",
                    height: "200px",
                    marginLeft: "20vw",
                    // transform: "translateX(20vw) rotateZ(10deg)"
                }
            },

            //small dark block
            {
                color: "dark",
                rotation: 20,
                styles: {
                    top: "40vh",
                    width: "70px",
                    height: "70px",
                    marginLeft: "5vw",
                    // transform: "translateX(-5vw) rotateZ(20deg)",
                }
            },

            //small blue block
            {
                color: "blue",
                rotation: -22,
                styles: {
                    top: "60vh",
                    background: "#0270D7",
                    width: "100px",
                    height: "100px",
                    marginLeft: "2vw"
                    // transform: "translateX(-2vw) rotateZ(-22deg)",
                }
            }
        ]

        return (
            <div className={decorClasses.decorWrapper}>
                <div className={decorClasses.decorPathWrapper}>
                    <svg width="2000" height="2000"
                         xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient x1="73%" y1="86%" x2="-8%" y2="-18%" id="gradientA">
                                <stop stopColor="#0270D7" offset="0%" stopOpacity="0" />
                                <stop stopColor="#00BFFB" offset="51.568%"/>
                                <stop stopColor="#0270D7" offset="100%"/>
                            </linearGradient>
                            <linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="gradientB">
                                <stop stopColor="#0270D7" offset="0%" />
                                <stop stopColor="#1D2026" offset="100%"/>
                            </linearGradient>
                            <linearGradient x1="25%" y1="0%" x2="0%" y2="0%" id="gradientC">
                                <stop stopColor="#00BFFB" offset="0%" />
                                <stop stopColor="#1D2026" offset="100%" stopOpacity="0" />
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
                </div>

                <div className={decorClasses.decorBlocksWrapper}>
                    {decorBlocks.map((item, itemIndex) => (
                        <motion.div
                            animate={{
                                scale: [1, 1.2],
                                rotate: [0, item.rotation],
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                                times: [0, 1],
                                // loop: Infinity,
                                repeatDelay: 1
                            }}
                            key={itemIndex}
                            style={{...item.styles}}
                            className={item.color === "blue" ? decorClasses.decorBlockGradient : decorClasses.decorBlockDark}
                        >
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }
}