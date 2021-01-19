import React from 'react'
import Latest from './Latest';
import CardDetails from './CardDetails';
import LatestArticles from './LatestArticles';
import TopView from './TopView';
import LatestStories from './LatestStories';


const Home = () => {
  return (
      <>
      <TopView />
       <div className="latest-title">
            <h2>The Latest</h2>
           </div>
           {  
              CardDetails.map((currValue,index)=>{
                return (
                  <Latest 
                    title={currValue.title}
                    details={currValue.details}
                  />
                )})}
           <LatestArticles title='Latest Articles' />
           <div className="story-title">
            <h2>Latest Stories</h2>
            </div>
            <hr className="story"
            />
           <div className="column">
                <LatestStories text='TECH'/>
                <LatestStories text='STYLE'/>
                <LatestStories text='YOO'/>
           </div>
             <hr/>
             <div>
               <h6 className="more">view more <span className="arrow">-></span></h6>
             </div>

         </>
         )}

export default Home;
