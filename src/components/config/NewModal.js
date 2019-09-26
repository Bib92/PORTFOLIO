import React from "react";
import ReactModal from "react-modal";

const customStyles = {
  content: { 
    height:"600px",

    color:"white",
    border:"solid thin goldenrod",
    marginTop:"20px",
    padding:"20px",
    backgroundColor:"rgba(15, 37, 37, 0.75)",
    borderRadius: "15px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  zIndex: 2000
  }
};

ReactModal.setAppElement("#root");

class CustomModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };


  afterOpenModal() {
    this.subtitle.style.color = "#f00";
  }

  render() {
      const children = React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          closeModal: () => {
              this.setState({ modalIsOpen: false })
          }
        });
      });
    return (
      <div>
        <div
         className={this.props.modalClass}
        onClick={this.toggleModal}>{this.props.btnText}</div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.toggleModal}
          style={customStyles}
          contentLabel={this.props.title}
        >
          <div className="flexbox">
            <button className="deleteButton" onClick={this.toggleModal}>X</button>
            <h2 ref={subtitle => (this.subtitle = subtitle)}>
              {this.props.title}
            </h2>

            {children}

          </div>
        </ReactModal>
      </div>
    );
  }
}

export default CustomModal;