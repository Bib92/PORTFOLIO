import React from "react";
// import MyCard from "../MyCard";
import "./Modal.css";





const modal = props => {
  return (
    
      <div className="modal-wrapper"
        style={{
          transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        
          <div>
          <img src='../../../Images/settle.png' alt="me lol"/>
{/* <img src='./' */}
          </div>

          {/* <button className="btn-cancel" onClick={props.close}>
            close
          </button> */}
        
      </div>
    
  );
};

export default modal;
