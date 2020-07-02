import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Trigger-Styles";

import Modal from "./Modal";
import FeedbackIcon from "./feedback.svg";
import CloseIcon from "./close.svg";

class Trigger extends Component {
  state = {
    modal: false,
  };

  triggerModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    let { modal } = this.state;
    let { props } = this;

    return (
      <React.Fragment>
        <div
          className="frf-trigger-button"
          style={{
            background: props.primaryColor,
            color: props.textColor,
            zIndex: parseInt(props.zIndex),
          }}
          onClick={this.triggerModal}
        >
          <div
            className={modal ? "frf-feedback-icon-open" : "frf-feedback-icon"}
            style={{
              fill: props.textColor,
            }}
          >
            {modal ? <CloseIcon /> : <FeedbackIcon />}
          </div>
        </div>
        <TransitionGroup component={null}>
          {modal && (
            <CSSTransition
              in={modal}
              classNames="frf-dialog"
              timeout={{
                enter: 300,
                exit: 300,
              }}
            >
              <Modal
                email={props.email}
                subProject={props.subProject}
                emailRequired={props.emailRequired}
                emailDefaultValue={props.emailDefaultValue}
                projectName={props.projectName}
                projectId={props.projectId}
                feedbackTypes={props.feedbackTypes}
                primaryColor={props.primaryColor}
                textColor={props.textColor}
                hoverBorderColor={props.hoverBorderColor}
                postSubmitButtonMsg={props.postSubmitButtonMsg}
                submitButtonMsg={props.submitButtonMsg}
                triggerModal={this.triggerModal}
                modalOpen={this.state.modal}
                zIndex={props.zIndex}
              />
            </CSSTransition>
          )}
        </TransitionGroup>
      </React.Fragment>
    );
  }
}

export default Trigger;
