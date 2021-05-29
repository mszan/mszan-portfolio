import {Home} from "../src/components/Home/Home";
import {Work} from "../src/components/Work/Work";
import {Contact} from "../src/components/Contact/Contact";
import {Sider} from "../src/components/Sidebar/Sidebar";
import {About} from "../src/components/About/About";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {Footer} from "../src/components/Footer/Footer";
import Head from "next/head";

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
                x: "-3vw"
            }}
        >
            {children}
        </motion.div>
    );
}

function App() {
    return (
        <div className="container">
            <Head>
                <title>Dawid Mszanowski</title>

                <meta name="description" content="A 21 years old IT student and Full Time Junior Web Developer." />
                <meta name="author" content="Dawid Mszanowski" />
                <meta name="keywords" content="dawid mszanowski portfolio student developer frontend front-end front end junior web react reactjs docker" />
                <meta charSet="utf-8" />

                <meta property="og:image" content="https://i.imgur.com/o8x9wMA.png" />
                <meta property="og:title" content="Dawid Mszanowski" />
                <meta property="og:description" content="A 21 years old IT student and Full Time Junior Web Developer." />
                <meta name="twitter:title" content="Dawid Mszanowski" />
            </Head>
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
