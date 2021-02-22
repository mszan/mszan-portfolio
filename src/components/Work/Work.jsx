import React from "react";
import workClasses from "./Work.module.scss"
import {Card} from "./Card";

const thumbnailTodos = "/thumbnails/todos.png"
const thumbnailGerd = "/thumbnails/gerd.png"
const thumbnailArchitect = "/thumbnails/architect.png"
const thumbnailSampleportfolio = "/thumbnails/sampleportfolio.png"
const thumbnailSellit = "/thumbnails/sellit.png"
const iconReact = "/icons/react.svg"
const iconNodeJS = "/icons/node-dot-js.svg"
const iconDjango = "/icons/django.svg"
const iconHTML = "/icons/html5.svg"
const iconCSS = "/icons/css3.svg"
const iconJS = "/icons/javascript.svg"


export const Work = () => {
        return (
        <div
            id="work"
            className={workClasses.wrapper}
        >
            <Card
                id="1"
                title="Todos"
                description={<p>A web app built that allows users to add, modify and delete tasks. Backend uses <b>ExpressJS</b> along with <b>MySQL</b> and <b>JWT</b>. Frontend uses <b>ReactJS</b> along with <b>Ant Design</b> and <b>Ant Motion.</b></p>}
                thumbnail={thumbnailTodos}
                repoUrl="https://github.com/mszan/todos"
                demoUrl="https://todos.mszanowski.pl/"
                icons={[iconReact, iconNodeJS]}
            />
            <Card
                id="2"
                title="Photographer portfolio"
                description={<p>A web web app built for a photographer built with <b>Django</b> (both backend and frontend). It allows users to view photo galleries managed by the photographer.</p>}
                thumbnail={thumbnailGerd}
                repoUrl="https://github.com/mszan/photographer_portfolio"
                demoUrl="https://gerd.mszanowski.pl/"
                icons={[iconDjango]}
            />
            <Card
                id="3"
                title="Architect portfolio"
                description={<p>Simple architect portfolio built with <b>React.</b></p>}
                thumbnail={thumbnailArchitect}
                repoUrl="https://github.com/mszan/architect_portfolio"
                demoUrl="https://mszan.github.io/architect_portfolio/"
                icons={[iconReact]}
            />
            <Card
                id="4"
                title="Sample portfolio"
                description={<p>A simple fully-responsive portfolio website built with <b>pure HTML, CSS and JS</b> (with an exception for a small jQuery snippet).</p>}
                thumbnail={thumbnailSampleportfolio}
                repoUrl="https://github.com/mszan/ethworks_portfolio"
                demoUrl="https://ethworks.mszanowski.pl/"
                icons={[iconHTML, iconCSS, iconJS]}
            />
            <Card
                id="5"
                title="Sell it!"
                description={<p>An online marketplace web application built with <b>Django</b> (both backend and frontend) that handles offers announcements displaying and allows their management.</p>}
                thumbnail={thumbnailSellit}
                repoUrl="https://github.com/mszan/sell_it"
                demoUrl="https://sell-it.mszanowski.pl/"
                icons={[iconDjango]}
            />
            <div style={{width: "3vw"}}>&nbsp;</div>
        </div>
    );
}