import React from "react"
import {minutesToDuration,secondsToDuration} from "../utils/duration/index"

function DisplayText(props){
    const {isTimerRunning, displayTime, countDownTime, isFocusTime} = props
    const timeToDisplay = minutesToDuration(displayTime)
    const breakDisplay = `On Break for ${timeToDisplay}`
    const focusDisplay = `Focusing for ${timeToDisplay}`
    let displayTimeText = focusDisplay

    const countDownPercentage = (100 - 100*(countDownTime/(displayTime*60)))

    if (isFocusTime===true){
        displayTimeText = focusDisplay
    } else {
        displayTimeText = breakDisplay
    }

    return(
        <div>
                {/* TODO: This area should show only when a focus or break session is running or pauses */}
                <div className="row mb-2">
                <div className="col">
                    {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
                    <h2 data-testid="session-title">{displayTimeText} minutes</h2>
                    {/* TODO: Update message below to include time remaining in the current session */}
                    <p className="lead" data-testid="session-sub-title">
                    {secondsToDuration(countDownTime)} remaining
                    </p>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col">
                    <div className="progress" style={{ height: "20px" }}>
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow={`${countDownPercentage}`} // TODO: Increase aria-valuenow as elapsed time increases
                        style={{ width: `${countDownPercentage}%` }} // TODO: Increase width % as elapsed time increases
                    />
                    </div>
                </div>
                </div>
        </div>
    )
}

export default DisplayText