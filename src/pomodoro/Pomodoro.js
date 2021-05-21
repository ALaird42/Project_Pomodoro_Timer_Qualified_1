import React, { useState, useEffect } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import BreakButtons from "./BreakButtons";
import WorkButtons from "./WorkButtons"
import StartStop from "./StartStop"
import DisplayText from "./DisplayText"


function Pomodoro() {
  // Timer starts out paused
  /*const initalStates ={
    breakTime: 5, 
    focusTime: 25,
    displayTime: initalStates.focusTime,
    countDownTime: displayTime*60,
    focusTime: true
  }*/
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  //const [TimerData, setTimerData] = useState({initalStates})
  const [breakTime, setBreakTime] =useState(5);
  const [focusTime, setFocusTime] =useState(25);
  const [displayTime, setDisplayTime] =useState(focusTime);
  const [countDownTime, setCountDownTime] = useState(displayTime * 60)
  const [isFocusTime, setIsFocusTime] =useState(true)

  
  const breakTimeHandlerPlus = () => {
    if ( isTimerRunning === false && breakTime < 15 ){
      setBreakTime((prevBreak) =>prevBreak + 1)}
  }
  const breaktimeHanlderMinus = () => {
    if (isTimerRunning === false && breakTime > 1 ){
      setBreakTime((prevBreak)=>prevBreak - 1)
    }
  }
  const focusTimeHandlerPlus = () => {
    if (isTimerRunning === false && focusTime < 60){
      setFocusTime((prevFocus) =>prevFocus + 5);
      setDisplayTime((prevDisplay) =>focusTime + 5);
      setCountDownTime((prevCount) => focusTime*60 + 300)
    }
  }
  const focusTimeHandlerMinus = () => {
    if (isTimerRunning === false && focusTime > 5){
      setFocusTime((prevFocus) =>prevFocus - 5);
      setDisplayTime((prevDisplay) =>focusTime - 5);
      setCountDownTime((prevCount) => focusTime*60 - 300)
    }
  }
  function displayTimeHandler(){
    /*Use conditional statements to switch between Focus and Break times. Use a useEffect to dynamically adjust foucs or break times 
    being displayed in at the bottom of the page each time the focus or break time changes*/
      //setIsFocusTime((prevState) => !prevState);
      if (isFocusTime === true){
        setIsFocusTime(false)
      } else {
        setIsFocusTime(true)
      }
    };

    useEffect(
      () => {
        if (isFocusTime === true){
          const audio =new Audio("../public/alarm/submarine-dive-horn");
          audio.play();
          setDisplayTime((prevDisplay) =>focusTime)
          setCountDownTime((prevCount) =>focusTime*60)
        } else {
          const audio =new Audio("../public/alarm/submarine-dive-horn");
          audio.play();
          setDisplayTime((prevDisplay) =>breakTime)
          setCountDownTime((prevCount) =>breakTime*60)
        }
      }, [isFocusTime]
    )

    const stopHandler = () => {
      if(isTimerRunning === true){
        setIsTimerRunning(false);
        setBreakTime(5)
        setFocusTime(25)
        setDisplayTime(25)
        setCountDownTime(25*60)
        setIsFocusTime(true)
      }
    }

  useInterval(
    () => {
      /* ToDo: Implement what should happen when the timer is running. 
      Refrence the break or work time states and then feeds the DisplayText.js (text at bottom of page that counts down each second)*/
      if (countDownTime > 0){
        setCountDownTime(countDownTime - 1)
      };
      if (countDownTime === 0){
        //setIsTimerRunning(false)
        displayTimeHandler()
        //setIsTimerRunning(true)
      }
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
  }

  useEffect(
    () => {
      if (isTimerRunning === true) {
        console.log("Ruinnig")
      } else {console.log("Paused")}
    }, [isTimerRunning]);

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          {/*_________________________________________________________________________________________*/}
          <WorkButtons 
            focusTime={focusTime} 
            isTimerRunning={isTimerRunning}
            focusPlus={focusTimeHandlerPlus}
            focusMinus={focusTimeHandlerMinus}
          />
          {/*_________________________________________________________________________________________*/}
        </div>
        {/*_________________________________________________________________________________________*/}
       <BreakButtons 
          breakTime={breakTime} 
          isTimerRunning={isTimerRunning} 
          breakPlus={breakTimeHandlerPlus}
          breakMinus={breaktimeHanlderMinus}
       />
       {/*_________________________________________________________________________________________*/}
      </div>
      <div className="row">
        <div className="col">
         {/*_________________________________________________________________________________________*/}
         <StartStop  playPause={playPause} classNames={classNames} isTimerRunning={isTimerRunning} stopHandler={stopHandler} />
         {/*_________________________________________________________________________________________*/}
        </div>
      </div>
        <DisplayText isTimerRunning={isTimerRunning} displayTime={displayTime} countDownTime={countDownTime} isFocusTime={isFocusTime}/>
    </div>
  );
}

export default Pomodoro;
