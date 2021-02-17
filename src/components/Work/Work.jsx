import React from "react";
import workClasses from "./Work.module.css"
import {Card} from "./Card";
import todos from "./img/todos.png"

export const Work = () => {
    return (
        <div
            id="work"
            className={workClasses.workWrapper}
        >
            <Card
                title="Todos"
                description="A web app built that allows users to add, modify and delete tasks. Backend uses ExpressJS along with MySQL and JWT. Frontend uses ReactJS along with Ant Design and Ant Motion."
                thumbnail={todos}
                repoUrl="https://github.com/mszan/todos"
                demoUrl="https://todos.mszanowski.pl/"
            />
            <Card
                title="Photographer portfolio"
                description="A web web app built for a photographer built with Django (both backend and frontend). It allows users to view photo galleries managed by the photographer."
                thumbnail={todos}
                repoUrl="https://github.com/mszan/photographer_portfolio"
                demoUrl="https://gerd.mszanowski.pl/"
            />
            <Card
                title="Architect portfolio"
                description="Simple architect portfolio built with React."
                thumbnail={todos}
                repoUrl="https://github.com/mszan/architect_portfolio"
                demoUrl="https://github.com/mszan/architect_portfolio/deployments/activity_log?environment=github-pages"
            />
            <Card
                title="Sample portfolio"
                description="A simple fully-responsive portfolio website built with pure HTML, CSS and JS (with an exception for a small jQuery snippet)."
                thumbnail={todos}
                repoUrl="https://github.com/mszan/ethworks_portfolio"
                demoUrl="https://ethworks.mszanowski.pl/"
            />
            <Card
                title="Sell it!"
                description="An online marketplace web application built with Django (both backend and frontend) that handles offers announcements displaying and allows their management."
                thumbnail={todos}
                repoUrl="https://github.com/mszan/sell_it"
                demoUrl="https://sell-it.mszanowski.pl/"
            />
            <div style={{width: "3vw"}}>&nbsp;</div>
        </div>
    );
}