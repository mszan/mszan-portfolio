import {Home} from "../Home/Home";
import {Work} from "../Work/Work";
import {Contact} from "../Contact/Contact";
import {Sider} from "../Sidebar/Sidebar";
import {About} from "../About/About";
import {Helmet} from "react-helmet";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {Footer} from "../Footer/Footer";

function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        rootMargin: "-25%"
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const animationVariants = {
        hidden: {
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: .1,
                duration: .3,
                type: "spring",
                stiffness: 100,
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={animationVariants}
            style={{
                opacity: 0,
                x: "-10vw"
            }}
        >
            {children}
        </motion.div>
    );
}

function App() {
    return (
        <div className="container">
            <Helmet>
                <title>Dawid Mszanowski</title>

                <meta name="description" content="A 21 years old IT student looking for his first full-time job as a Junior Frontend / Web Developer." />
                <meta name="author" content="Dawid Mszanowski" />
                <meta name="keywords" content="dawid mszanowski portfolio student developer frontend front-end front end junior web react reactjs" />
                <meta charSet="utf-8" />

                <meta property="og:image" content="https://i.imgur.com/lRda4Su.png" />
                <meta property="og:title" content="Dawid Mszanowski" />
                <meta property="og:description" content="A 21 years old IT student looking for his first full-time job as a Junior Frontend / Web Developer." />
                <meta name="twitter:title" content="Dawid Mszanowski" />

                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            </Helmet>
            <Sider />
            <Home />
            <FadeInWhenVisible>
                <About/>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <Work />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <Contact />
            </FadeInWhenVisible>
            <Footer />
        </div>
    );
}

export default App;
