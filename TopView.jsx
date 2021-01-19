import React from 'react';
import img1 from './Images/m4.jpg';
import img2 from './Images/m4.jpg';
import img3 from './Images/m4.jpg';

const TopView = () => {
    return (
      <>
       <div className="main">
            <div className="gallery">
             <div className="col1">
               <img className="img" src={img1} alt="title-post" />
               <h5 className="heading">hello there buddy</h5>
               </div>
              <div className="col2">
               <img  className="img1" src={img2} alt="title-post" />
               <h5 className="heading2">Sound Cloud </h5>
               <img  className="img1" src={img3} alt="title-post" />
               <h5 className="heading3">hello</h5>
               </div>
             </div>
          </div>
        {/* <div className="main">
		<div className="gallery">
			<div className="col">
				<img className="img" src={img1} />
				<div className="title">
					<h3>Title of vertical gallery</h3>
					<em>Travel/August 23 2020</em>
				</div>
			    </div>
			<div className="col">
				<img className="img1" src={img2} />
					<div className="title2">
					<h3>The Sound Cloud</h3>
					<h3>You Loved is doomed</h3>
					<em>Travel/August 23 2020</em>
				</div>
				<img className="img2" src={img3} />
					<div className="title3">
					<h3>The Sound Cloud</h3>
					<h3>You Loved is doomed</h3>
					<em>Travel/August 23 2020</em>
				</div>
			</div>
		</div>
	</div> */}


      </>
    )
}

export default TopView
