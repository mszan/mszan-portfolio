import React from "react"
import decorClasses from "./Decor.module.css"


export class Decor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
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
                    {/*big blue block*/}
                    <div className={decorClasses.decorBlockGradient} style={{
                        top: "17vh",
                        transform: "translateX(15vw) rotateZ(52deg)",
                        background: "#0270D7",
                        opacity: ".5",
                        width: "450px",
                        height: "450px"
                    }}/>

                    {/*small cyan block*/}
                    <div className={decorClasses.decorBlockGradient} style={{
                        top: "25vh",
                        transform: "rotateZ(-30deg)",
                        background: "#00BFFB",
                        width: "20px",
                        height: "20px",
                        opacity: "0.3"
                    }}/>

                    {/*medium cyan block*/}
                    <div className={decorClasses.decorBlockGradient} style={{
                        top: "15vh",
                        transform: "translateX(15vw) rotateZ(-60deg)",
                        background: "#00BFFB",
                        width: "40px",
                        height: "40px"
                    }}/>

                    {/*big cyan block*/}
                    <div className={decorClasses.decorBlockGradient} style={{
                        top: "60vh",
                        transform: "translateX(10vw) rotateZ(-8deg)",
                        // opacity: ".5",
                        background: "#00BFFB",
                        width: "150px",
                        height: "150px"
                    }}/>

                    {/*big dark block*/}
                    <div className={decorClasses.decorBlockDark} style={{
                        top: "35vh",
                        transform: "perspective(500px) rotateY(-15deg) rotateX(8deg) rotateZ(-1deg)",
                        width: "400px",
                        height: "300px"
                    }}/>

                    {/*medium dark block*/}
                    <div className={decorClasses.decorBlockDark} style={{
                        top: "30vh",
                        width: "200px",
                        height: "200px",
                        transform: "translateX(20vw) rotateZ(10deg)"
                    }}/>

                    {/*small dark block*/}
                    <div className={decorClasses.decorBlockDark} style={{
                        top: "40vh",
                        width: "70px",
                        height: "70px",
                        transform: "translateX(-5vw) rotateZ(20deg)",
                    }}/>

                    {/*small blue block*/}
                    <div className={decorClasses.decorBlockGradient} style={{
                        top: "60vh",
                        transform: "translateX(-2vw) rotateZ(-22deg)",
                        background: "#0270D7",
                        width: "100px",
                        height: "100px"
                    }}/>
                </div>
            </div>
        );
    }
}