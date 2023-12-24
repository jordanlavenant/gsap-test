import gsap from "gsap";
import { useEffect, useRef } from "react";
import './App.css'

function App() {

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.target, { rotation: '50', yoyo: true, repeat: 1 })
  }

  const onEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.target, { scale: 1.2 });
  };

  const onLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.target, { scale: 1 });
  };

  return (
      <>
        <div className="container">
          <div 
            className="box" 
            onClick={handleClick}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            Click me
          </div>
        </div>
      </>
    )
}

export default App
