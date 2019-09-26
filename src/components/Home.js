import React from "react";
import { Link } from "react-router-dom";
import "../../src/CSS/Card.css";
// import MyCard from "./MyCard";
import Modal from './Modal/Modal.js';
// import MyCard from "./MyCard";

class notHome extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowing: false
  }
}

openModalHandler = (e) => {
  e.preventDefault();
  this.setState({
      isShowing: true
  });
}

closeModalHandler = () => {
  this.setState({
      isShowing: false
  });
}

render () {
  return (
    <div className="blackgrad App">
      
      <ul
        style={{
          listStyleType: "none",
        display: "block",
        border: "thick black"

        }}
      >
        <li>
          <Link className="active1" to="/">
            Home{" "}
          </Link>
        </li>
        <li>
          <Link className="link" to="/resume">
            Resume
          </Link>
        </li>
        <li>
          <Link className="link" to="/aboutme">
            About Me{" "}
          </Link>
        </li>
        <li>
          <Link className="link" to="/contactme">
            Contact Me{" "}
          </Link>
        </li>
      </ul>
      <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                {/* <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button> */}
                <img className="open-modal-btn monster" src='../../Images/clickMe.jpg' alt="click me" onClick={this.openModalHandler} />

                <Modal 
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                      
                </Modal>
            </div>


        </div>
  );
}
}



export default Home;
