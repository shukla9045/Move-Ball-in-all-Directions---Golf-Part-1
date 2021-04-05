import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [posi, setPosi] = useState({ left: 5, top: 5 });
  const [ballPosition, setBallPosition] = useState({ left: 0, top: 0 });
  const updateXY =(x,y)=>{
      setBallPosition(
          {
              left:x,
              top:y,
          }
      )

  }
  const handleListener=(event)=>{
    switch (event.key) {
        case "ArrowRight":
            updateXY(ballPosition.left + 5,ballPosition.top);
          break;
        case "ArrowDown":
            updateXY(ballPosition.left ,ballPosition.top+5);
          break;
        case "ArrowLeft":
            updateXY(ballPosition.left - 5,ballPosition.top);
          break;
        case "ArrowUp":
            updateXY(ballPosition.left ,ballPosition.top-5);
          break;
        default:
          break;
      }

  }

  // bind ArrowRight keydown event
  useEffect(() => {
    const keyListener= document.addEventListener("keydown", handleListener);
    return ()=> document.removeEventListener("keydown",handleListener);
  },[ballPosition]);

  const buttonClickHandler = () => {
    setRenderBall(true);
  };
  const renderBallOrButton = () => {
    if (renderBall) {
      return (
        <div
          className="ball"
          style={{
            left: ballPosition.left + "px",
            top: ballPosition.top + "px",
            position: "absolute",
          }}
        ></div>
      );
    } else {
      return <button onClick={buttonClickHandler}>Click For One Ball</button>;
    }
  };

  return <div className="playground">{renderBallOrButton()}</div>;
};

export default App;
