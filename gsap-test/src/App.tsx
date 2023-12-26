import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import React from 'react'
import './App.css'

function App() {
  
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".panel").forEach((child, i) => {
    ScrollTrigger.create({
      trigger: child as Element,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
  });


  return (
      <>
        <main>
          <div className="panel gray"><p>ONE</p></div>
          <div className="panel orange"><p>TWO</p></div>
          <div className="panel purple"><p>THREE</p></div>
          <div className="panel green"><p>FOUR</p></div>
        </main>
      </>
    )
}

export default App
