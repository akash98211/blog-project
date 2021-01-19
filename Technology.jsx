import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import user from './Images/sidebar/user.jpg'
import img1 from './Images/sidebar/r-img.png';
import img2 from './Images/sidebar/code.png';
import Latest from './Latest';
import UserInfo from './UserInfo';
import TechCard from './TechCard';


const Technology = () => {
    return (
    <>
    <div className="tech">
        <div className="tech-content">
            <div className="tech-clap">
                <div className="clap">
                    <img className="claps" src="https://img.icons8.com/emoji/48/000000/nikita-clapping-hands-emoji.png"/>
                     <span>9.3k</span>
                </div>
                <div className="share">
                     <img src="https://img.icons8.com/android/24/000000/share.png"/>
                     <span>share this articles</span>
                </div>
            </div>
            <div className="tech-post">
                <div className="tech-title">
                    <div>
                        <h3>5 Ways to animate a React App</h3>
                    </div>
                        <div className="user-info">
                            <div className="user-details">
                                <img className="user" src={user} />
                                <div className="user-name">
                                    <h6>Dmitry Noshenko</h6>
                                    <span>jan 22,2019 10 min read</span>
                                </div>
                            </div>
                            <div className="icons">
                                <a href="#"><FacebookIcon/></a>
                                <a href="#"><InstagramIcon/></a>
                                <a href="#"><TwitterIcon/></a>
                                <a href="#"><YouTubeIcon/></a>
                            </div>
                        </div>
                    <div>
                        <img src={img1} />
                    </div>
                        <div className="techpost-text">
                            <p>It is also possible to use custom class names for each of the steps in your transitions. Instead of passing a string into transitionName you can pass an object containing either the enter and leave class names, or an object containing the enter, enter-active, leave-active, and leave class names. If only the enter and leave classes are provided, the enter-active and leave-active classes will be determined by appending ‘-active’ to the end of the class name. Here are two examples using custom classes:</p>
                        </div>
                    <div>
                    <div className="shadow">
                        <img src={img2} />
                    </div>
                       
                        <div className="btn-clap">
                            <div className="btn">
                                <button>React</button>
                                <button>javascript</button>
                                <button>Animation</button>
                            </div>
                            <div className="clap-detail">
                                <img className="fa-calendar-plus-o" src="https://img.icons8.com/emoji/48/000000/nikita-clapping-hands-emoji.png"/>
                                <span>9.3k claps</span>
                            </div>
                      <hr/>
                        </div>
                            
                    </div>
                </div>  
            </div>
        </div>
    </div>
        <UserInfo/>
        <TechCard/>
    
</>
    )
}

export default Technology;
