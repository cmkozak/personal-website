import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Mobile extends React.Component {
    aboutMe() {
        const plusaElem = document.getElementById("plus-a").parentElement;
        const plussElem = document.getElementById("plus-s").parentElement;
        const pluspElem = document.getElementById("plus-p").parentElement;
        if(plusaElem.classList.contains("active-img")){
            plusaElem.classList.remove("active-img");
            plusaElem.classList.add("active-img-reverse");
            plusaElem.parentElement.classList.remove("active-tab");
            plusaElem.parentElement.classList.add("active-tab-reverse");
            document.getElementsByClassName("about-main")[0].style.display = "none";
        }else if(plusaElem.classList.contains("active-img-reverse")){
            if(plussElem.classList.contains("active-img")){
                plussElem.classList.remove("active-img");
                plussElem.classList.add("active-img-reverse");
                plussElem.parentElement.classList.remove("active-tab");
                plussElem.parentElement.classList.add("active-tab-reverse");
                plusaElem.classList.remove("active-img-reverse");
                plusaElem.parentElement.classList.remove("active-tab-reverse");
                plusaElem.classList.add("active-img");
                plusaElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("about-main")[0].style.display = "block";
                document.getElementsByClassName("skills-main")[0].style.display = "none";
            }else if(pluspElem.classList.contains("active-img")){
                pluspElem.classList.remove("active-img");
                pluspElem.classList.add("active-img-reverse");
                pluspElem.parentElement.classList.remove("active-tab");
                pluspElem.parentElement.classList.add("active-tab-reverse");
                plusaElem.classList.remove("active-img-reverse");
                plusaElem.parentElement.classList.remove("active-tab-reverse");
                plusaElem.classList.add("active-img");
                plusaElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("about-main")[0].style.display = "block";
                document.getElementsByClassName("projects-main")[0].style.display = "none";
            }
            else{
                plusaElem.classList.remove("active-img-reverse");
                plusaElem.classList.add("active-img");
                plusaElem.parentElement.classList.remove("active-tab-reverse");
                plusaElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("about-main")[0].style.display = "block";
            }
        }
        else{
            if(plussElem.classList.contains("active-img")){
                plussElem.classList.remove("active-img");
                plussElem.classList.add("active-img-reverse");
                plussElem.parentElement.classList.remove("active-tab");
                plussElem.parentElement.classList.add("active-tab-reverse");
                plusaElem.classList.add("active-img");
                plusaElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("about-main")[0].style.display = "block";
                document.getElementsByClassName("skills-main")[0].style.display = "none";
            }else if(pluspElem.classList.contains("active-img")){
                pluspElem.classList.remove("active-img");
                pluspElem.classList.add("active-img-reverse");
                pluspElem.parentElement.classList.remove("active-tab");
                pluspElem.parentElement.classList.add("active-tab-reverse");
                plusaElem.classList.add("active-img");
                plusaElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("about-main")[0].style.display = "block";
                document.getElementsByClassName("projects-main")[0].style.display = "none";
            }
            else {
                plusaElem.classList.add("active-img");
                plusaElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("about-main")[0].style.display = "block";
            }
        }
    }

    skills() {
        const plusaElem = document.getElementById("plus-a").parentElement;
        const plussElem = document.getElementById("plus-s").parentElement;
        const pluspElem = document.getElementById("plus-p").parentElement;
        if(plussElem.classList.contains("active-img")){
            plussElem.classList.remove("active-img");
            plussElem.classList.add("active-img-reverse");
            plussElem.parentElement.classList.remove("active-tab");
            plussElem.parentElement.classList.add("active-tab-reverse");
            document.getElementsByClassName("skills-main")[0].style.display = "none";
        }else if(plussElem.classList.contains("active-img-reverse")){
            if(plusaElem.classList.contains("active-img")){
                plusaElem.classList.remove("active-img");
                plusaElem.classList.add("active-img-reverse");
                plusaElem.parentElement.classList.remove("active-tab");
                plusaElem.parentElement.classList.add("active-tab-reverse");
                plussElem.classList.remove("active-img-reverse");
                plussElem.parentElement.classList.remove("active-tab-reverse");
                plussElem.classList.add("active-img");
                plussElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("about-main")[0].style.display = "none";
                document.getElementsByClassName("skills-main")[0].style.display = "block";
            }else if(pluspElem.classList.contains("active-img")){
                pluspElem.classList.remove("active-img");
                pluspElem.classList.add("active-img-reverse");
                pluspElem.parentElement.classList.remove("active-tab");
                pluspElem.parentElement.classList.add("active-tab-reverse");
                plussElem.classList.remove("active-img-reverse");
                plussElem.parentElement.classList.remove("active-tab-reverse");
                plussElem.classList.add("active-img");
                plussElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("skills-main")[0].style.display = "block";
                document.getElementsByClassName("projects-main")[0].style.display = "none";
            }else {
                plussElem.classList.remove("active-img-reverse");
                plussElem.classList.add("active-img");
                plussElem.parentElement.classList.remove("active-tab-reverse");
                plussElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("skills-main")[0].style.display = "block";
            }
        }
        else{
            if(plusaElem.classList.contains("active-img")){
                plusaElem.classList.remove("active-img");
                plusaElem.classList.add("active-img-reverse");
                plusaElem.parentElement.classList.remove("active-tab");
                plusaElem.parentElement.classList.add("active-tab-reverse");
                plussElem.classList.add("active-img");
                plussElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("about-main")[0].style.display = "none";
                document.getElementsByClassName("skills-main")[0].style.display = "block";
            }else if(pluspElem.classList.contains("active-img")){
                pluspElem.classList.remove("active-img");
                pluspElem.classList.add("active-img-reverse");
                pluspElem.parentElement.classList.remove("active-tab");
                pluspElem.parentElement.classList.add("active-tab-reverse");
                plussElem.classList.add("active-img");
                plussElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("projects-main")[0].style.display = "none";
                document.getElementsByClassName("skills-main")[0].style.display = "block";
            }else {
                plussElem.classList.add("active-img");
                plussElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("skills-main")[0].style.display = "block";
            }
        }
    }

    projects() {
        const plusaElem = document.getElementById("plus-a").parentElement;
        const plussElem = document.getElementById("plus-s").parentElement;
        const pluspElem = document.getElementById("plus-p").parentElement;
        if(pluspElem.classList.contains("active-img")){
            pluspElem.classList.remove("active-img");
            pluspElem.classList.add("active-img-reverse");
            pluspElem.parentElement.classList.remove("active-tab");
            pluspElem.parentElement.classList.add("active-tab-reverse");
            document.getElementsByClassName("projects-main")[0].style.display = "none";
        }else if(pluspElem.classList.contains("active-img-reverse")){
            if(plusaElem.classList.contains("active-img")){
                plusaElem.classList.remove("active-img");
                plusaElem.classList.add("active-img-reverse");
                plusaElem.parentElement.classList.remove("active-tab");
                plusaElem.parentElement.classList.add("active-tab-reverse");
                pluspElem.classList.remove("active-img-reverse");
                pluspElem.parentElement.classList.remove("active-tab-reverse");
                pluspElem.classList.add("active-img");
                pluspElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("about-main")[0].style.display = "none";
                document.getElementsByClassName("projects-main")[0].style.display = "block";
            }else if(plussElem.classList.contains("active-img")){
                plussElem.classList.remove("active-img");
                plussElem.classList.add("active-img-reverse");
                plussElem.parentElement.classList.remove("active-tab");
                plussElem.parentElement.classList.add("active-tab-reverse");
                pluspElem.classList.remove("active-img-reverse");
                pluspElem.parentElement.classList.remove("active-tab-reverse");
                pluspElem.classList.add("active-img");
                pluspElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("skills-main")[0].style.display = "none";
                document.getElementsByClassName("projects-main")[0].style.display = "block";
            }else {
                pluspElem.classList.remove("active-img-reverse");
                pluspElem.classList.add("active-img");
                pluspElem.parentElement.classList.remove("active-tab-reverse");
                pluspElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("projects-main")[0].style.display = "block";
            }
        }
        else{
            if(plusaElem.classList.contains("active-img")){
                plusaElem.classList.remove("active-img");
                plusaElem.classList.add("active-img-reverse");
                plusaElem.parentElement.classList.remove("active-tab");
                plusaElem.parentElement.classList.add("active-tab-reverse");
                pluspElem.classList.add("active-img");
                pluspElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("about-main")[0].style.display = "none";
                document.getElementsByClassName("projects-main")[0].style.display = "block";
            }else if(plussElem.classList.contains("active-img")){
                plussElem.classList.remove("active-img");
                plussElem.classList.add("active-img-reverse");
                plussElem.parentElement.classList.remove("active-tab");
                plussElem.parentElement.classList.add("active-tab-reverse");
                pluspElem.classList.add("active-img");
                pluspElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("skills-main")[0].style.display = "none";
                document.getElementsByClassName("projects-main")[0].style.display = "block";
            }else {
                pluspElem.classList.add("active-img");
                pluspElem.parentElement.classList.add("active-tab");
                document.getElementsByClassName("projects-main")[0].style.display = "block";
            }
        }
    }

    addProject(input) {
        var data = function(input) {
            switch(input){
                case "1":
                    return (
                        <React.Fragment>
                            <div>
                                <img src="plus-white.png" className="exitButton" id="exit" alt="Exit Button"/>
                                <img src="website-picture.PNG" className="card-project-img" alt="website picture"/>
                                <h3>Personal Website</h3>
                                <div class="tags">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>React</p>
                                </div>
                                <a href="https://github.com/cmkozak/personal-website" target="_blank">
                                    <div class="github-view">
                                        <p>View on Github</p>
                                        <img src="GitHub-Mark-Light-32px.png" alt="Github picture"/>
                                    </div>
                                </a>
                                <div className="project-info">
                                <p>With this portfolio website, I wanted to gain some knowledge on React and Javascript by creating a single page website that features a large amount of animations and transitions.</p>
                                    <p>Before starting this website I had never used React before but I knew that I wanted to make my portfolio interactive so I started learning React a few months prior to creating this website. While I'm still not great at React I'm learning more and more everyday.</p>
                                    <p>What you see now is not a finished project. As I learn more about Javascript and it's frameworks, I'll push out new updates here and on Github.</p>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                case "2":
                    return (
                        <React.Fragment>
                            <div>
                                <img src="plus-white.png" className="exitButton" id="exit" alt="Exit Button"/>
                                <img src="currency-project-picture.PNG" className="card-project-img" alt="Currency Website Picture"/>
                                <h3>Currency Converter Website</h3>
                                <div class="tags">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>Javascript</p>
                                    <p>API</p>
                                </div>
                                <a href="https://github.com/cmkozak/currency-converter" target="_blank">
                                    <div className="github-view">
                                        <p>View on Github</p>
                                        <img src="GitHub-Mark-Light-32px.png" />
                                    </div>
                                </a>
                                <a href="project-currency/currency.html" target="_blank">
                                    <div className="live-demo-view">
                                        <p>View Live Demo</p>
                                        <img src="live-red-button.png" />
                                    </div>
                                </a>
                                <div className="project-info">
                                    <p>I created this project mostly to familiarize myself with using HTTP GET requests. Creating a simple single-page website that converts from 12 different currencies types to many different currencies used all over the world.</p>
                                    <p>The website I use to get the information from is <a href="http://www.floatrates.com/json-feeds.html">http://www.floatrates.com/json-feeds.html</a> which offers free currency converters from many different countries updated daily.</p>
                                    <p>The project doesn’t look very pretty and I didn’t spend a lot of time on the design parts of it. I mostly just wanted to quickly throw some design together and get used to utilizing API requests. In the future, I want to clean up the website to look more appealing.</p>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                default:
                    return;
            }
        }
        ReactDOM.render(data(input), document.getElementById("project-screen"));
        document.getElementById("project-screen").style.width = "100%";
        document.getElementById("exit").addEventListener("click", () => {document.getElementById("project-screen").style.width = "0%"});
    }

    render(){
        return (
            <React.Fragment>
              <a onClick={this.aboutMe}> 
                  <div className="about-me">
                      <div id="section"><h1>About Me</h1></div>
                      <div id="sectionText"><img id="plus-a" src="plus.png" alt="sign"/></div>
                  </div>
              </a>
              <div className="about-main">
                  <div className="about-internal">
                            <p>I’ve always been interested in video games. Just like any kid I played way too much Call of Duty and Halo growing up.</p>
                            <img src="/headshot.jpg" />
                            <p>That gaming passion (more like an addiction) led me to start watching YouTubers and Twitch streamers which lead me to gain a passion for videography and editing.</p>
                            <p>In 2014 I took my interest in videography to the next level by uploading gaming videos and live streaming to Twitch. However I’m too embarrassed to release them so a mystery they will remain.</p>
                            <p>However in 2016 I learned about programming and instantly was attached to it. I then dropped videography to pursue the world of coding.</p>
                            <p>It took me a while to get into programming, it started with just building a basic website, which then moved to Object Oriented languages but never pursued it too heavily.</p>
                            <p>I’m now working towards my BS in Computer Science and I am spending a lot of time learning new things and working on projects - which you can view in the projects tab.</p>
                    </div>
                </div>
              <a onClick={this.skills}>
                  <div className="skills">
                      <div id="section"><h1>Skills</h1></div>
                      <div id="sectionText"><img id="plus-s" src="plus.png" alt="sign"/></div>
                  </div>
              </a>
              <div className="skills-main">
                  <div className="skills-internal">
                            <p>Most of my skills are with Object Oriented Programming however I'm mostly focusing<br/>
                            on front end development website development at the moment.</p>
                            <p className="info">Check out some of my current front-end projects in the projects tab!</p>
                            <p className="programming-skills-head">Programming Skills:</p>
                            <ul className="programming-skills">
                                <li>Java</li>
                                <li>HTML 5</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>ReactJS</li>
                                <li>Rest API</li>
                                <li>SQL</li>
                            </ul>
                    </div>
                </div>
              <a onClick={this.projects}>
                  <div className="projects">
                      <div id="section"><h1>Projects</h1></div>
                      <div id="sectionText"><img id="plus-p" src="plus.png" alt="sign"/></div>
                  </div>
              </a>
              <div className="projects-main">
                  <div className="projects-internal">
                        <p id="project-information">Click on a tab to view information on the projects</p>
                        <div className="card" onClick={this.addProject.bind(this, "1")}>
                                <img src="/website-picture.PNG"/>
                                <p>Personal Website</p>
                        </div>
                        <div className="card" onClick={this.addProject.bind(this, "2")}>
                            <img src="/currency-project-picture.PNG"/>
                            <p>Currency Converter</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
          );
    }
}

export default Mobile;