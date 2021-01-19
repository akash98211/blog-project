import React from 'react'
import img from './Images/m4.jpg';
import img1 from './Images/sidebar/user.jpg';

const TechCard = () => {
    return (
        <>
        <div className="tech-bott">
            <div className="tech-bott-details">
                <h6 className="title">More From The Siren</h6>
                {/* <div className="tech-bott-header">
                    <h6>related tags</h6>
                </div> */}
                <div className="card">
                    <div className="tech-bott-img">
                        <img className="img" src={img} alt="" />
                    </div>
                    <div className="bott-title">
                        <h3>Joshua tree overnight adventure</h3>
                    </div>
                    <div className="bott-details">
                           <img  src={img1}  />
                            <div className="info">
                                <h6>Cmitry Noshenko</h6>
                                <p>jan 22 2020,10 min read</p>
                            </div>
                    </div>
                   
                </div>
                <div className="card">
                    <div className="tech-bott-img">
                        <img className="img" src={img} />
                    </div>
                    <div className="bott-title">
                        <h3>Joshua tree overnight adventure</h3>
                    </div>
                    <div className="bott-details">
                           <img  src={img1}  />
                            <div className="info">
                                <h6>Cmitry Noshenko</h6>
                                <p>jan 22 2020,10 min read</p>
                            </div>
                    </div>
                   
                </div>
                <div className="card">
                    <div className="tech-bott-img">
                        <img className="img" src={img} alt="" />
                    </div>
                    <div className="bott-title">
                        <h3>Joshua tree overnight adventure</h3>
                    </div>
                    <div className="bott-details">
                           <img  src={img1}  />
                            <div className="info">
                                <h6>Cmitry Noshenko</h6>
                                <p>jan 22 2020,10 min read</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default TechCard
