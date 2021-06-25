import React from "react";
import workClasses from "./Work.module.scss"
import {Card} from "./Card";

const thumbnailTodos = "/thumbnails/todos.png"
const thumbnailGerd = "/thumbnails/gerd.png"
const thumbnailArchitect = "/thumbnails/architect.png"
const thumbnailSampleportfolio = "/thumbnails/sampleportfolio.png"
const thumbnailSellit = "/thumbnails/sellit.png"
const thumbnailChatApp = "/thumbnails/chatapp.png"
const thumbnailMyPortfolio = "/thumbnails/myportfolio.png"
const iconReact = "/icons/react.svg"
const iconNodeJS = "/icons/node-dot-js.svg"
const iconDjango = "/icons/django.svg"
const iconHTML = "/icons/html5.svg"
const iconCSS = "/icons/css3.svg"
const iconJS = "/icons/javascript.svg"
const iconDocker = "/icons/docker.svg"
const iconWebsocket = "/icons/websocket.svg"
const iconNextJS = "/icons/nextdotjs.svg"
const iconPostgreSQL = "/icons/postgresql.svg"
const iconMySQL = "/icons/mysql.svg"
const iconJWT = "/icons/jwt.svg"
const iconAntD = "/icons/antdesign.svg"
const iconExpress = "/icons/express.svg"


export const Work = () => {
        return (
        <div
            id="work"
            className={workClasses.wrapper}
        >
            <Card
                id="portfolio"
                title="My Portfolio"
                description={<p>Dockerized website built with <b>NextJS</b> that describes me, displays my projects and allows users to contact me.</p>}
                thumbnail={thumbnailMyPortfolio}
                repoUrl="https://github.com/mszan/mszan-portfolio"
                demoUrl="https://mszanowski.pl/"
                icons={[iconDocker, iconNextJS]}
            />
            <Card
                id="chatapp"
                title="Chat App"
                description={<p>Dockerized real-time web chat app built with <b>ReactJS</b>, <b>Django Rest Framework</b>, <b>WebSockets</b> and <b>Postgres</b>. Users can create private rooms and invite others to chat in real-time.</p>}
                thumbnail={thumbnailChatApp}
                repoUrl="https://github.com/mszan/chat-app"
                demoUrl="https://chat-app.mszanowski.pl/"
                icons={[iconDocker, iconReact, iconDjango, iconWebsocket, iconPostgreSQL]}
            />
            <Card
                id="todos"
                title="Todos"
                description={<p>Dockerized web app built that allows users to add, modify and delete tasks. Backend uses <b>ExpressJS</b> along with <b>MySQL</b> and <b>JWT</b>. Frontend uses <b>ReactJS</b> along with <b>Ant Design</b> and <b>Ant Motion.</b></p>}
                thumbnail={thumbnailTodos}
                repoUrl="https://github.com/mszan/todos"
                demoUrl="https://todos.mszanowski.pl/"
                icons={[iconDocker, iconReact, iconAntD, iconNodeJS, iconExpress, iconMySQL, iconJWT]}
            />
            <Card
                id="photographer"
                title="Photographer portfolio"
                description={<p>Dockerized web web app built for a photographer built with <b>Django</b> (both backend and frontend) and <b>Postgres</b>. It allows users to view photo galleries managed by the photographer.</p>}
                thumbnail={thumbnailGerd}
                repoUrl="https://github.com/mszan/photographer-portfolio"
                demoUrl="https://gerd.mszanowski.pl/"
                icons={[iconDocker, iconDjango, iconPostgreSQL]}
            />
            <Card
                id="architect"
                title="Architect portfolio"
                description={<p>Simple architect portfolio built with <b>React.</b></p>}
                thumbnail={thumbnailArchitect}
                repoUrl="https://github.com/mszan/architect-portfolio"
                demoUrl="https://github.com/mszan/architect-portfolio"
                icons={[iconReact]}
            />
            <Card
                id="sample1"
                title="Sample portfolio"
                description={<p>Simple fully-responsive portfolio website built with <b>pure HTML, CSS and JS</b> (with an exception for a small jQuery snippet).</p>}
                thumbnail={thumbnailSampleportfolio}
                repoUrl="https://github.com/mszan/ethworks-portfolio"
                demoUrl="https://ethworks.mszanowski.pl/"
                icons={[iconHTML, iconCSS, iconJS]}
            />
            <Card
                id="sellit"
                title="Sell it!"
                description={<p>Dockerized online marketplace web application built with <b>Django</b> (both backend and frontend) and <b>MySQL</b> that handles offers announcements displaying and allows their management.</p>}
                thumbnail={thumbnailSellit}
                repoUrl="https://github.com/mszan/sell-it"
                demoUrl="https://sell-it.mszanowski.pl/"
                icons={[iconDocker, iconDjango]}
            />
            <div style={{width: "3vw"}}>&nbsp;</div>
        </div>
    );
}