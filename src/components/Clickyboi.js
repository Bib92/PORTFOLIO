import React from "react";
import MyCard from './MyCard';


class Clickyboi extends React.Component {

    // imageClick = () => {
    //    return ()
    // }       
 
    render () {
       return (
          <div>
             <img className="monster" src='../../Images/clickMe.jpg' alt="click me" onClick={this.imageClick} />
          </div>
       );
    }
 }
 export default Clickyboi;