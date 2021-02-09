import React from "react";
import cardClasses from "./Card.module.css"
import {motion} from "framer-motion";

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={cardClasses.cardWrapper}>
                <div className={cardClasses.cardThumbnail} style={{backgroundImage: `url(${this.props.thumbnail})`}}>
                </div>
                <div className={cardClasses.cardBottom}>
                    <div className={cardClasses.cardText}>
                        <h4>{this.props.title}</h4>
                        <p>{this.props.description}</p>
                    </div>
                </div>
                <div className={cardClasses.cardBtnsWrapper}>
                    <motion.button
                        onClick={() => window.open(this.props.repoUrl, '_blank')}
                        className="btnDark"
                        whileHover={{
                            scale: 0.9,
                            transition: { type: "spring", stiffness: 700, duration: 0.5 }
                        }}
                    >REPOSITORY</motion.button>
                    <motion.button
                        onClick={() => window.open(this.props.demoUrl, '_blank')}
                        className="btnLight"
                        style={{
                            whiteSpace:"nowrap"
                        }}
                        whileHover={{
                            scale: 0.9,
                            transition: { type: "spring", stiffness: 700, duration: 0.5 }
                        }}
                    >LIVE DEMO</motion.button>
                </div>
            </div>
        );
    }
}