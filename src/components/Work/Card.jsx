import React from "react";
import cardClasses from "./Card.module.css"

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
                        {/*<hr style={{borderColor: "rgba(115, 149, 187, 0.05)"}}/>*/}
                        <p>{this.props.description}</p>
                    </div>
                </div>
                <div className={cardClasses.cardBtnsWrapper}>
                    <button onClick={() => window.open(this.props.repoUrl, '_blank')} className="btnDark">REPOSITORY</button>
                    <button onClick={() => window.open(this.props.demoUrl, '_blank')} className="btnLight" style={{whiteSpace:"nowrap"}}>LIVE DEMO</button>
                </div>
            </div>
        );
    }
}