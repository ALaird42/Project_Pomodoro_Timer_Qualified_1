import React, {useState} from "react"
import {minutesToDuration} from "../utils/duration/index"

function WorkButtons(props){
    const {focusTime, isTimerRunning, focusPlus, focusMinus} = props
    return(
            <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration.
            Build logic to increase and decrease time value in Pomodoro.js and pass in as state. 
            Need two onClicks on buttons with handlers that are passed down from Pomodoro.js */}
                Focus Duration: {minutesToDuration(focusTime)}
            </span>
            <div className="input-group-append">
                {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="decrease-focus"
                    onClick={focusMinus}
                >
                    <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="increase-focus"
                    onClick={focusPlus}
                >
                    <span className="oi oi-plus" />
                </button>
            </div>
        </div>

    )
}

export default WorkButtons