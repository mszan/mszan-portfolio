import React from "react";
import "./Hamburger.css";

const Hamburger = (props) => {
    // const [prevScrollPos, setPrevScrollPos] = React.useState(0);
    // const [visible, setVisible] = React.useState(true);
    //
    // const handleScroll = React.useCallback(() => {
    //     // find current scroll position
    //     const currentScrollPos = window.pageYOffset;
    //
    //     // set state based on scrolling up/down and sider status
    //     setVisible(prevScrollPos > currentScrollPos || props.open);
    //
    //     // set state to new scroll position
    //     setPrevScrollPos(currentScrollPos);
    // }, [prevScrollPos, props.open]);
    //
    // React.useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [prevScrollPos, visible, handleScroll]);

    return (
        <div
            className={`hamburger ${props.open ? "open" : null}`}
            // style={{top: visible ? '0' : '-80px'}}
        >
            <span/>
            <span/>
            <span/>
            <span/>
        </div>
    );
}

export default Hamburger;