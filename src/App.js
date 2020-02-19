import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class Sections extends React.Component{
    aboutMe() {
        if(document.getElementById("plus-a").parentElement.classList.contains("active-img")){
            document.getElementById("plus-a").parentElement.classList.remove("active-img");
            document.getElementById("plus-a").parentElement.classList.add("active-img-reverse");
            document.getElementById("plus-a").parentElement.parentElement.classList.remove("active-tab");
            document.getElementById("plus-a").parentElement.parentElement.classList.add("active-tab-reverse");
            ReactDOM.render(<MainScreen dataFromParent= ""/>,document.getElementById("root"));
            activateTransition();
        }else if(document.getElementById("plus-a").parentElement.classList.contains("active-img-reverse")){
            if(document.getElementById("plus-s").parentElement.classList.contains("active-img")){
                document.getElementById("plus-s").parentElement.classList.remove("active-img");
                document.getElementById("plus-s").parentElement.classList.add("active-img-reverse");
                document.getElementById("plus-s").parentElement.parentElement.classList.remove("active-tab");
                document.getElementById("plus-s").parentElement.parentElement.classList.add("active-tab-reverse");
                document.getElementById("plus-a").parentElement.classList.remove("active-img-reverse");
                document.getElementById("plus-a").parentElement.parentElement.classList.remove("active-tab-reverse");
                document.getElementById("plus-a").parentElement.classList.add("active-img");
                document.getElementById("plus-a").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "about"/>,document.getElementById("root"));
                activateTransition();
            }else if(document.getElementById("plus-p").parentElement.classList.contains("active-img")){
                document.getElementById("plus-p").parentElement.classList.remove("active-img");
                document.getElementById("plus-p").parentElement.classList.add("active-img-reverse");
                document.getElementById("plus-p").parentElement.parentElement.classList.remove("active-tab");
                document.getElementById("plus-p").parentElement.parentElement.classList.add("active-tab-reverse");
                document.getElementById("plus-a").parentElement.classList.remove("active-img-reverse");
                document.getElementById("plus-a").parentElement.parentElement.classList.remove("active-tab-reverse");
                document.getElementById("plus-a").parentElement.classList.add("active-img");
                document.getElementById("plus-a").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "about"/>,document.getElementById("root"));
                activateTransition();
            }
            else{
                document.getElementById("plus-a").parentElement.classList.remove("active-img-reverse");
                document.getElementById("plus-a").parentElement.classList.add("active-img");
                document.getElementById("plus-a").parentElement.parentElement.classList.remove("active-tab-reverse");
                document.getElementById("plus-a").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "about"/>,document.getElementById("root"));
                activateTransition();
            }
        }
        else{
            if(document.getElementById("plus-s").parentElement.classList.contains("active-img")){
                document.getElementById("plus-s").parentElement.classList.remove("active-img");
                document.getElementById("plus-s").parentElement.classList.add("active-img-reverse");
                document.getElementById("plus-s").parentElement.parentElement.classList.remove("active-tab");
                document.getElementById("plus-s").parentElement.parentElement.classList.add("active-tab-reverse");
                document.getElementById("plus-a").parentElement.classList.add("active-img");
                document.getElementById("plus-a").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "about"/>,document.getElementById("root"));
                activateTransition();
            }else if(document.getElementById("plus-p").parentElement.classList.contains("active-img")){
                document.getElementById("plus-p").parentElement.classList.remove("active-img");
                document.getElementById("plus-p").parentElement.classList.add("active-img-reverse");
                document.getElementById("plus-p").parentElement.parentElement.classList.remove("active-tab");
                document.getElementById("plus-p").parentElement.parentElement.classList.add("active-tab-reverse");
                document.getElementById("plus-a").parentElement.classList.add("active-img");
                document.getElementById("plus-a").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "about"/>,document.getElementById("root"));
                activateTransition();
            }
            else {
                document.getElementById("plus-a").parentElement.classList.add("active-img");
                document.getElementById("plus-a").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "about"/>,document.getElementById("root"));
                activateTransition();
            }
        }
    }

    skills() {
        if(document.getElementById("plus-s").parentElement.classList.contains("active-img")){
            document.getElementById("plus-s").parentElement.classList.remove("active-img");
            document.getElementById("plus-s").parentElement.classList.add("active-img-reverse");
            document.getElementById("plus-s").parentElement.parentElement.classList.remove("active-tab");
            document.getElementById("plus-s").parentElement.parentElement.classList.add("active-tab-reverse");
            ReactDOM.render(<MainScreen dataFromParent= ""/>,document.getElementById("root"));
            activateTransition();
        }else if(document.getElementById("plus-s").parentElement.classList.contains("active-img-reverse")){
            if(document.getElementById("plus-a").parentElement.classList.contains("active-img")){
                document.getElementById("plus-a").parentElement.classList.remove("active-img");
                document.getElementById("plus-a").parentElement.classList.add("active-img-reverse");
                document.getElementById("plus-a").parentElement.parentElement.classList.remove("active-tab");
                document.getElementById("plus-a").parentElement.parentElement.classList.add("active-tab-reverse");
                document.getElementById("plus-s").parentElement.classList.remove("active-img-reverse");
                document.getElementById("plus-s").parentElement.parentElement.classList.remove("active-tab-reverse");
                document.getElementById("plus-s").parentElement.classList.add("active-img");
                document.getElementById("plus-s").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "skills"/>,document.getElementById("root"));
                activateTransition();
            }else if(document.getElementById("plus-p").parentElement.classList.contains("active-img")){
                document.getElementById("plus-p").parentElement.classList.remove("active-img");
                document.getElementById("plus-p").parentElement.classList.add("active-img-reverse");
                document.getElementById("plus-p").parentElement.parentElement.classList.remove("active-tab");
                document.getElementById("plus-p").parentElement.parentElement.classList.add("active-tab-reverse");
                document.getElementById("plus-s").parentElement.classList.remove("active-img-reverse");
                document.getElementById("plus-s").parentElement.parentElement.classList.remove("active-tab-reverse");
                document.getElementById("plus-s").parentElement.classList.add("active-img");
                document.getElementById("plus-s").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "skills"/>,document.getElementById("root"));
                activateTransition();
            }else {
                document.getElementById("plus-s").parentElement.classList.remove("active-img-reverse");
                document.getElementById("plus-s").parentElement.classList.add("active-img");
                document.getElementById("plus-s").parentElement.parentElement.classList.remove("active-tab-reverse");
                document.getElementById("plus-s").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "skills"/>,document.getElementById("root"));
                activateTransition();
            }
        }
        else{
            if(document.getElementById("plus-a").parentElement.classList.contains("active-img")){
                document.getElementById("plus-a").parentElement.classList.remove("active-img");
                document.getElementById("plus-a").parentElement.classList.add("active-img-reverse");
                document.getElementById("plus-a").parentElement.parentElement.classList.remove("active-tab");
                document.getElementById("plus-a").parentElement.parentElement.classList.add("active-tab-reverse");
                document.getElementById("plus-s").parentElement.classList.add("active-img");
                document.getElementById("plus-s").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "skills"/>,document.getElementById("root"));
                activateTransition();
            }else if(document.getElementById("plus-p").parentElement.classList.contains("active-img")){
                document.getElementById("plus-p").parentElement.classList.remove("active-img");
                document.getElementById("plus-p").parentElement.classList.add("active-img-reverse");
                document.getElementById("plus-p").parentElement.parentElement.classList.remove("active-tab");
                document.getElementById("plus-p").parentElement.parentElement.classList.add("active-tab-reverse");
                document.getElementById("plus-s").parentElement.classList.add("active-img");
                document.getElementById("plus-s").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "skills"/>,document.getElementById("root"));
                activateTransition();
            }else {
                document.getElementById("plus-s").parentElement.classList.add("active-img");
                document.getElementById("plus-s").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "skills"/>,document.getElementById("root"));
                activateTransition();
            }
        }
    }

    projects() {
        if(document.getElementById("plus-p").parentElement.classList.contains("active-img")){
            document.getElementById("plus-p").parentElement.classList.remove("active-img");
            document.getElementById("plus-p").parentElement.classList.add("active-img-reverse");
            document.getElementById("plus-p").parentElement.parentElement.classList.remove("active-tab");
            document.getElementById("plus-p").parentElement.parentElement.classList.add("active-tab-reverse");
            ReactDOM.render(<MainScreen dataFromParent= ""/>,document.getElementById("root"));
            activateTransition();
        }else if(document.getElementById("plus-p").parentElement.classList.contains("active-img-reverse")){
            if(document.getElementById("plus-a").parentElement.classList.contains("active-img")){
                document.getElementById("plus-a").parentElement.classList.remove("active-img");
                document.getElementById("plus-a").parentElement.classList.add("active-img-reverse");
                document.getElementById("plus-a").parentElement.parentElement.classList.remove("active-tab");
                document.getElementById("plus-a").parentElement.parentElement.classList.add("active-tab-reverse");
                document.getElementById("plus-p").parentElement.classList.remove("active-img-reverse");
                document.getElementById("plus-p").parentElement.parentElement.classList.remove("active-tab-reverse");
                document.getElementById("plus-p").parentElement.classList.add("active-img");
                document.getElementById("plus-p").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "projects"/>,document.getElementById("root"));
                activateTransition();
            }else if(document.getElementById("plus-s").parentElement.classList.contains("active-img")){
                document.getElementById("plus-s").parentElement.classList.remove("active-img");
                document.getElementById("plus-s").parentElement.classList.add("active-img-reverse");
                document.getElementById("plus-s").parentElement.parentElement.classList.remove("active-tab");
                document.getElementById("plus-s").parentElement.parentElement.classList.add("active-tab-reverse");
                document.getElementById("plus-p").parentElement.classList.remove("active-img-reverse");
                document.getElementById("plus-p").parentElement.parentElement.classList.remove("active-tab-reverse");
                document.getElementById("plus-p").parentElement.classList.add("active-img");
                document.getElementById("plus-p").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "projects"/>,document.getElementById("root"));
                activateTransition();
            }else {
                document.getElementById("plus-p").parentElement.classList.remove("active-img-reverse");
                document.getElementById("plus-p").parentElement.classList.add("active-img");
                document.getElementById("plus-p").parentElement.parentElement.classList.remove("active-tab-reverse");
                document.getElementById("plus-p").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "projects"/>,document.getElementById("root"));
                activateTransition();
            }
        }
        else{
            if(document.getElementById("plus-a").parentElement.classList.contains("active-img")){
                document.getElementById("plus-a").parentElement.classList.remove("active-img");
                document.getElementById("plus-a").parentElement.classList.add("active-img-reverse");
                document.getElementById("plus-a").parentElement.parentElement.classList.remove("active-tab");
                document.getElementById("plus-a").parentElement.parentElement.classList.add("active-tab-reverse");
                document.getElementById("plus-p").parentElement.classList.add("active-img");
                document.getElementById("plus-p").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "projects"/>,document.getElementById("root"));
                activateTransition();
            }else if(document.getElementById("plus-s").parentElement.classList.contains("active-img")){
                document.getElementById("plus-s").parentElement.classList.remove("active-img");
                document.getElementById("plus-s").parentElement.classList.add("active-img-reverse");
                document.getElementById("plus-s").parentElement.parentElement.classList.remove("active-tab");
                document.getElementById("plus-s").parentElement.parentElement.classList.add("active-tab-reverse");
                document.getElementById("plus-p").parentElement.classList.add("active-img");
                document.getElementById("plus-p").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "projects"/>,document.getElementById("root"));
                activateTransition();
            }else {
                document.getElementById("plus-p").parentElement.classList.add("active-img");
                document.getElementById("plus-p").parentElement.parentElement.classList.add("active-tab");
                ReactDOM.render(<MainScreen dataFromParent= "projects"/>,document.getElementById("root"));
                activateTransition();
            }
        }
    }

    render(){
        ReactDOM.render(<MainScreen dataFromParent= ""/>,document.getElementById("root"));
        return (
            <React.Fragment>
              <a onClick={this.aboutMe}> 
                  <div className="about-me">
                      <div id="section"><h1>About Me</h1></div>
                      <div id="sectionText"><img id="plus-a" src="plus.png" alt="sign"/></div>
                  </div>
              </a>
              <a onClick={this.skills}>
                  <div className="skills">
                      <div id="section"><h1>Skills</h1></div>
                      <div id="sectionText"><img id="plus-s" src="plus.png" alt="sign"/></div>
                  </div>
              </a>
              <a onClick={this.projects}>
                  <div className="projects">
                      <div id="section"><h1>Projects</h1></div>
                      <div id="sectionText"><img id="plus-p" src="plus.png" alt="sign"/></div>
                  </div>
              </a>
            </React.Fragment>
          );
    }
}

export default Sections;

class MainScreen extends React.Component {
    addProject(input) {
        var data = function(input) {
            switch(input){
                case "1":
                    return (
                        <React.Fragment>
                            <div>
                                <img src="plus-white.png" className="exitButton" id="exit" alt="Exit Button"/>
                                <img src="website-picture.PNG" className="card-project-img" alt="Website Picture"/>
                                <h3>Personal Website</h3>
                                <div class="tags">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>React</p>
                                </div>
                                <a href="https://github.com/cmkozak/personal-website" target="_blank">
                                    <div class="github-view">
                                        <p>View on Github</p>
                                        <img src="GitHub-Mark-Light-32px.png" />
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
                default:
                    return;
            }
        }
        ReactDOM.render(data(input), document.getElementById("project-screen"));
        document.getElementById("project-screen").style.width = "100%";
        document.getElementById("exit").addEventListener("click", () => {document.getElementById("project-screen").style.width = "0%"});
    }
    render(){
        switch(this.props.dataFromParent){
            case "about":
                return(
                    <React.Fragment>
                        <div className="about-main">
                            <h1>About Me</h1>
                            <p>I’ve always been interested in video games. Just like any kid I played way too much Call of Duty and Halo growing up.</p>
                            <img src="/headshot.jpg" />
                            <p>That gaming passion (more like an addiction) led me to start watching YouTubers and Twitch streamers which lead me to gain a passion for videography and editing.</p>
                            <p>In 2014 I took my interest in videography to the next level by uploading gaming videos and live streaming to Twitch. However I’m too embarrassed to release them so a mystery they will remain.</p>
                            <p>However in 2016 I learned about programming and instantly was attached to it. I then dropped videography to pursue the world of coding.</p>
                            <p>It took me a while to get into programming, it started with just building a basic website, which then moved to Object Oriented languages but never pursued it too heavily.</p>
                            <p>I’m now working towards my BS in Computer Science and I am spending a lot of time learning new things and working on projects - which you can view in the projects tab.</p>
                        </div>
                    </React.Fragment>
                );
            case "skills":
                return(
                    <React.Fragment>
                        <div className="skills-main">
                            <h1>Skills</h1>
                            <div class="skills-box">
                                <p class="skills-info">Most of my skills are with Object Oriented Programming however I'm focusing
                                    mostly on front end development website development at the moment.</p>
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
                    </React.Fragment>
                );
            case "projects":
                return(
                    <React.Fragment>
                        <div className="projects-main">
                            <h1>Projects</h1>
                            <p>Click on a tab to view information on the projects</p>
                            <div className="card" onClick={this.addProject.bind(this, "1")}>
                                <img src="/website-picture.PNG"/>
                                <p>Personal Website</p>
                            </div>
                        </div>
                    </React.Fragment>
                );
            default:
                return(
                    <React.Fragment>
                        <div className="intro">
                            <h1>Welcome to my website!</h1>
                            <p>Click on the tabs to the left to explore the site.</p>
                            <p>If you want to contact me, the links to my social media are on the top left of the screen.</p>
                        </div>
                    </React.Fragment>
                );
        }
    }
}


function activateTransition() {
    if(document.getElementById("transition").classList.contains("transition1")){
        document.getElementById("transition").classList.remove("transition1");
        document.getElementById("transition").classList.add("transition2");
    }else if(document.getElementById("transition").classList.contains("transition2")){
        document.getElementById("transition").classList.remove("transition2");
        document.getElementById("transition").classList.add("transition1");
    }else {
        document.getElementById("transition").classList.add("transition1");
    }

    if(document.getElementById("root").classList.contains("text-delay1")){
        document.getElementById("root").classList.remove("text-delay1");
        document.getElementById("root").classList.add("text-delay2");
    }else if(document.getElementById("root").classList.contains("text-delay2")){
        document.getElementById("root").classList.remove("text-delay2");
        document.getElementById("root").classList.add("text-delay1");
    }else {
        document.getElementById("root").classList.add("text-delay1");
    }
    return;
}