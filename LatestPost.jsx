import React from 'react';
import postimg from './Images/sidebar/s4.jpg'

const LatestPost = () => {
    return (
        <>
         <div className="container">
            <div className="site-content">
                <div className="site-posts">
                    <div className="p">
                    <div className="site-imgs">
                        <img src={postimg} alt="post1" />
                    </div>
                    <div className="site-details">
                        <h3>Catch waves with an adventure guide</h3>
                         <p>Gujrat is very beautiful and must visit 
                         city for tourist and there are so many
                          historic place sto visit there</p>
                        <p>Travel /August 23 2020</p>
                   </div>
                   </div>
                </div>
             </div>
        </div>
        <hr/>

        </>
    )
}

export default LatestPost;
