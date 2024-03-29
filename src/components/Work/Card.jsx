import React, { useEffect, useState } from "react";
import cardClasses from "./Card.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export const Card = (props) => {
    const [wrapperOpacity, setWrapperOpacity] = useState(1);
    const [wrapperCursor, setWrapperCursor] = useState("default");
    const [ref, inView] = useInView({
        rootMargin: "-45%",
    });

    const scrollToCard = () => {
        const workEl = document.getElementById("work");
        workEl.scrollLeft = (props.id - 1) * window.innerWidth * 0.65;
    };

    useEffect(() => {
        if (inView) {
            setWrapperOpacity(1);
            setWrapperCursor("default");
        } else {
            setWrapperOpacity(0.2);
            setWrapperCursor("pointer");
        }
    }, [inView]);

    return (
        <div
            ref={ref}
            style={{
                opacity: wrapperOpacity,
                cursor: wrapperCursor,
            }}
            className={cardClasses.wrapper}
            onClick={scrollToCard}
        >
            <div className={cardClasses.bg}>
                <div />
                <div />
            </div>
            <div
                className={cardClasses.thumbnail}
                onClick={() =>
                    inView ? window.open(props.repoUrl, "_blank") : null
                }
            >
                <Image
                    src={props.thumbnail}
                    alt={props.title}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            <div className={cardClasses.bottom}>
                <div className={cardClasses.text}>
                    <h4>{props.title}</h4>
                    {props.icons.map((icon) => (
                        <img
                            key={icon}
                            src={icon}
                            alt={icon}
                            className={cardClasses.icon}
                        />
                    ))}
                    {props.description}
                </div>
            </div>
            <div className={cardClasses.btns}>
                <motion.button
                    onClick={() => window.open(props.repoUrl, "_blank")}
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
                    REPOSITORY
                </motion.button>
                <motion.button
                    onClick={() => window.open(props.demoUrl, "_blank")}
                    className="btnLight"
                    style={{
                        whiteSpace: "nowrap",
                    }}
                    whileHover={{
                        scale: 0.9,
                        transition: {
                            type: "spring",
                            stiffness: 700,
                            duration: 0.5,
                        },
                    }}
                >
                    LIVE DEMO
                </motion.button>
            </div>
        </div>
    );
};
