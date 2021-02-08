import {Home} from "../Home/Home";
import {Work} from "../Work/Work";
import {Contact} from "../Contact/Contact";
import {Sider} from "../Sidebar/Sidebar";
import {About} from "../About/About";
import {Helmet} from "react-helmet";

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
            <About />
            <Work />
            <Contact />
        </div>
    );
}

export default App;
