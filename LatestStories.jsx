import React from 'react'

const LatestStories = (props) => {
    return (
        <>
        <div className="col">
            <div className="col-title">
                <div>
                 <h3>Catch waves with an adventure guide</h3>
                </div>
                <div className="story-details">
                    <p>Food is usually of plant, animal or fungal in origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth.</p>
                    <p><span>{props.text}</span>/ AUGUST 21 2020</p>
                </div>
            </div>
        </div>


        </>
    )
}

export default LatestStories
