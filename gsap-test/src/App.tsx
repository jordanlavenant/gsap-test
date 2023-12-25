import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.css'

function App() {
  
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel as Element,
      start: "top center",
      end: "bottom center",
      pin: true,
      pinSpacing: false
    });
  });

  return (
      <>
        <main>
          <section className="panel gray"><p>Hi</p></section>
          <section className="panel orange"><p>Hi</p></section>
          <section className="panel purple"><p>Hi</p></section>
          <section className="panel green"><p>Hi</p></section>
        </main>
      </>
    )
}

export default App
