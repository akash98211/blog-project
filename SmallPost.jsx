import React from 'react'
import img from './Images/t-img3.jpg';


const SmallPost = () => {
    return (
      <>
      <hr/>
        <div className="small-post">
            <div className="small-imgs">
                <img src={img} alt="img" />
            </div>
            <div className="details">
                <h6>Catch Waves with adventure guide</h6>
                <p>Travel /August 21 2020</p>
            </div>
        </div>

      </>
    )
}

export default SmallPost
