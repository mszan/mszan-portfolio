import React, {useEffect, useState} from "react";
import cardClasses from "./Card.module.css"
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

export const Card = (props) => {
    const [wrapperOpacity, setWrapperOpacity] = useState(1);
    const [wrapperCursor, setWrapperCursor] = useState("default");
    const [ref, inView] = useInView({
        rootMargin: "-45%"
    })

    const scrollToCard = () => {
        const workEl = document.getElementById("work")
        workEl.scrollLeft = (props.id - 1) * window.innerWidth * 0.65;
    }

    useEffect(() => {
        if (inView) {
            setWrapperOpacity(1)
            setWrapperCursor("default")
        } else {
            setWrapperOpacity(0.2)
            setWrapperCursor("pointer")
        }
    }, [inView]);

    return (
        <div
            ref={ref}
            style={{
                opacity: wrapperOpacity,
                cursor: wrapperCursor
            }}
            className={cardClasses.cardWrapper}
            onClick={scrollToCard}
        >
            <div className={cardClasses.cardBg}>
                <div/>
                <div/>
            </div>
            <div
                className={cardClasses.cardThumbnail}
                style={{
                    backgroundImage: `url(${props.thumbnail})`
                }}
                onClick={() => inView ? window.open(props.repoUrl, '_blank') : null}
            />
            <div className={cardClasses.cardBottom}>
                <div className={cardClasses.cardText}>
                    <h4>{props.title}</h4>
                    {props.description}
                </div>
            </div>
            <div className={cardClasses.cardBtnsWrapper}>
                <motion.button
                    onClick={() => window.open(props.repoUrl, '_blank')}
                    className="btnDark"
                    whileHover={{
                        scale: 0.9,
                        transition: {type: "spring", stiffness: 700, duration: 0.5}
                    }}
                >REPOSITORY
                </motion.button>
                <motion.button
                    onClick={() => window.open(props.demoUrl, '_blank')}
                    className="btnLight"
                    style={{
                        whiteSpace: "nowrap"
                    }}
                    whileHover={{
                        scale: 0.9,
                        transition: {type: "spring", stiffness: 700, duration: 0.5}
                    }}
                >LIVE DEMO
                </motion.button>
            </div>
        </div>
    );
}