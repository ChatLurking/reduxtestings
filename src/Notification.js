import React, { Component } from 'react';
import './Notification.css';



class notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 'inactive',
    }
  }

  setActive() {
    this.setState({isActive: 'active'});
  }

  setInactive() {
    this.setState({isActive: 'inactive'});
  }

  onClick(){
    this.setActive();
    setTimeout(() => {
      this.setInactive();
    }, 3500);
  }

  render() {
    console.log(this);
    var isActive = this.state.isActive;
    console.log(isActive);

    return(
      <div>
        <button onClick={() => this.onClick()}>Magic!</button>
        <div className="overlay-wrapper">
          <div className="bottom-left-notification">
            <div className={"notification-square " + isActive}>
              <div className={"notification-rectangle-wrapper " + isActive}>
                <div className="notification-rectangle">
                  <div className="notification-text">Words
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default notification;
