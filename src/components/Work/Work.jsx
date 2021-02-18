import React from "react";
import workClasses from "./Work.module.css"
import {Card} from "./Card";
import todos from "./img/todos.png"
import gerd from "./img/gerd.png"
import architect from "./img/architect.png"
import sampleportfolio from "./img/sampleportfolio.png"
import sellit from "./img/sellit.png"

export const Work = () => {
    return (
        <div
            id="work"
            className={workClasses.workWrapper}
        >
            <Card
                title="Todos"
                description={<p>A web app built that allows users to add, modify and delete tasks. Backend uses <b>ExpressJS</b> along with <b>MySQL</b> and <b>JWT</b>. Frontend uses <b>ReactJS</b> along with <b>Ant Design</b> and <b>Ant Motion.</b></p>}
                thumbnail={todos}
                repoUrl="https://github.com/mszan/todos"
                demoUrl="https://todos.mszanowski.pl/"
            />
            <Card
                title="Photographer portfolio"
                description={<p>A web web app built for a photographer built with <b>Django</b> (both backend and frontend). It allows users to view photo galleries managed by the photographer.</p>}
                thumbnail={gerd}
                repoUrl="https://github.com/mszan/photographer_portfolio"
                demoUrl="https://gerd.mszanowski.pl/"
            />
            <Card
                title="Architect portfolio"
                description={<p>Simple architect portfolio built with <b>React.</b></p>}
                thumbnail={architect}
                repoUrl="https://github.com/mszan/architect_portfolio"
                demoUrl="https://github.com/mszan/architect_portfolio/deployments/activity_log?environment=github-pages"
            />
            <Card
                title="Sample portfolio"
                description={<p>A simple fully-responsive portfolio website built with <b>pure HTML, CSS and JS</b> (with an exception for a small jQuery snippet).</p>}
                thumbnail={sampleportfolio}
                repoUrl="https://github.com/mszan/ethworks_portfolio"
                demoUrl="https://ethworks.mszanowski.pl/"
            />
            <Card
                title="Sell it!"
                description={<p>An online marketplace web application built with <b>Django</b> (both backend and frontend) that handles offers announcements displaying and allows their management.</p>}
                thumbnail={sellit}
                repoUrl="https://github.com/mszan/sell_it"
                demoUrl="https://sell-it.mszanowski.pl/"
            />
            <div style={{width: "3vw"}}>&nbsp;</div>
        </div>
    );
}