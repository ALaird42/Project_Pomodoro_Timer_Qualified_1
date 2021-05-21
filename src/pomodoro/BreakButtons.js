import React from "react"
import {minutesToDuration} from "../utils/duration/index"



function BreakButtons(props){
  const {breakTime, breakMinus, breakPlus} = props
  return (
  <div className="col">
  <div className="float-right">
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-break">
        {/* TODO: Update this text to display the current break session duration.
        Build logic to increase and decrease time value in Pomodoro.js and pass in as state. 
        Need two onClicks on buttons with handlers that are passed down from Pomodoro.js */}
        Break Duration: {minutesToDuration(breakTime)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-break"
          onClick={breakMinus}
        >
          <span className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-break"
          onClick={breakPlus}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default BreakButtons