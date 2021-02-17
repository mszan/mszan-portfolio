import React from "react";
import aboutClasses from "./About.module.css"
import gitHubLogo from "./GitHub.svg"
import linkedInLogo from "./LinkedIn.svg"

export function About() {
    return (
        <div id="about" className={aboutClasses.aboutWrapper}>
            <div className={aboutClasses.aboutContent}>
                <h1 className={aboutClasses.aboutTitle}>Dawid Mszanowski</h1>
                <p>Hi there, I am 21 years old IT Management extramural student and I am in my second year now. In my
                    current profession as <span>IT Specialist</span> I have developed mostly in <span>network management, systems maintenance</span> and <span>end-user support provision.</span>
                </p>
                <p><span className={aboutClasses.aboutSubTitle}>I am currently looking for my first full-time job as a Junior Web / Frontend Developer.</span>
                </p>
                <p>Even though, at one time or another, I work with code in my full-time job, this is not as regular and
                    amplifying as I want it to be in the nearest future. My daily routine includes developing several
                    applications in <span>HTML, CSS</span> and <span>SQL</span>.</p>
                <p>My technical skills include programming in <span>JavaScript</span> and <span>Python</span> along
                    with <span>ReactJS, Django, NodeJS</span> and <span>GIT.</span><br/>I am familiar with <span>RWD, BEM, ABEM</span> and <span>SCSS</span>.
                    I am not afraid of system’s terminal, in fact my addiction to it grows every day.<br/>I have worked
                    in and administrated operating systems such as macOS, Ubuntu and WS.</p>
                <br/>
                <div className={aboutClasses.aboutSocial}>
                    <img src={gitHubLogo} alt=""/>
                    <img src={linkedInLogo} alt=""/>
                    <p style={{marginTop: 0}}>You can find me on GitHub and LinkedIn.</p>
                </div>
            </div>
        </div>
    );
}