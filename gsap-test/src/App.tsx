import React, { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.css'

function App() {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.nine', {
      scrollTrigger: {
        trigger: ".nine",
        start: "top 80%",
        end: "bottom 60%",
        markers: true,
        scrub: true,
        toggleActions: "play none none none",
      },
      x: "-100vw",
      duration: 2,
    });
  }, []);

  return (
      <>
        <main>
          <div className="container one"></div>
          <div className="container two"></div>
          <div className="container three"></div>
          <div className="container four"></div>
          <div className="container five"></div>
          <div className="container six"></div>
          <div className="container seven"></div>
          <div className="container eight"></div>
          <div className="container nine"></div>
        </main>
      </>
    )
}

export default App
