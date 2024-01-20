import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  render() {
    return (
      <div className="bg-con">
        <h1 className="head">Digital Timer</h1>
        <div className="response-design">
          <div className="timer-img">
            <div className="time">
              <p className="para-e">Time</p>
              <p className="para">67676778</p>
            </div>
          </div>
          <div className="main-con">
            <div className="start-reset-con">
              <div className="play-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play icon"
                  className="play-icon"
                />
                <p className="start-para">Start</p>
              </div>
              <div className="play-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                  alt="play icon"
                  className="play-icon"
                />
                <p className="start-para">Reset</p>
              </div>
            </div>
            <p>Set Time Limit</p>
            <div className="start-reset">
              <img
                src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                alt="play icon"
                className="play-icon-start"
              />
              <p className="time-para">25</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="pause icon"
                className="play-icon-start"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
