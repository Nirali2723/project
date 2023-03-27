import React from "react";
import "./Progress.css"

function Progressbar () {
   return (
       <div className="container">
           <h1 className="title1-text">Our progress in past few years</h1>

           <div className="skill-box">
               <h1 className="title1">Artists hiring</h1>
               <div className="skill-bar">
                   <span className="skill-per html">
                       <span className="tooltip" >70%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <h1 className="title1">Number of recruiters increased</h1>
               <div className="skill-bar">
                   <span className="skill-per css">
                       <span className="tooltip">84%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <h1 className="title1">Our success rate</h1>
               <div className="skill-bar">
                   <span className="skill-per javascript">
                       <span className="tooltip">68%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <h1 className="title1"> Successfull interactions</h1>
               <div className="skill-bar">
                   <span className="skill-per nodejs">
                       <span className="tooltip">90%</span>
                   </span>
               </div>
           </div>

         
       </div>
   )
}

export default Progressbar;
