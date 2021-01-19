import React from 'react'
import cardimg from '../Blogg/Images/la1.jpg'


const Latest = (props) => {
    return (
        <>
        <div className="cards">
            <div className="card">
                <img  src={cardimg} alt="img" />
                <div className="card-body">
                    <h3 className="card-title">
                      {props.title}
                    </h3>
                    <p className="card-details">{props.details}</p>
                    <p className="card-bottom"><strong>Travel</strong>/August 23 2019</p>
                </div>
             </div>
        </div>
        </>)}

export default Latest;
