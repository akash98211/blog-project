import React from 'react';
import imgg from './Images/la4.jpg'
import img1 from './Images/sidebar/s1.jpg'
import LatestPost from './LatestPost';
import SmallPost from './SmallPost';

const LatestArticles = (props) => {
    return (
       <>
         <div className="latest-article">
            <h2>{props.title}</h2>
        </div>
        <hr className="site-content-hr"/>
        <div className="container">
            <div className="site-content">
                <div className="site-posts">
                    <LatestPost/>
                    <LatestPost/>
                    <LatestPost/>
                    <LatestPost/>
                    <LatestPost/>
                    <div className="latest-img">
                        <img src={imgg} alt="" />
                        <div>
                            <h5>vertical Title</h5>
                            <p>hello this is hell</p>
                        </div>
                    </div>
                </div>
               
            <div className="sidebar-right">
                <div className="add">
                    <h1>Advertisement</h1>
                </div>
                <div className="top-posts">
                    <div className="top-post-content">
                        <h2>Top Posts</h2>
                        <img src={img1} alt="top-post1" />
                    </div>
                    <div className="top-post-details">
                        <h5>Catch and travel with amazing places</h5>
                        <p>Travel/ August 21 2020</p>
                    </div>
                        <SmallPost/>
                        <SmallPost/>
                        <SmallPost/>
                </div>
            </div>
            </div>
        </div>

       </>
    )
}

export default LatestArticles;
