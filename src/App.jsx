import { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import logo from "../public/pngimg.com - nike_PNG18.png";
import bannerImage from "../public/mainBanner.png";
import anime from "animejs";

function App() {
  const main = useRef();
  const heading1 = useRef();
  const heading2 = useRef();
  const heading3 = useRef();
  const shoeImage = useRef();

  useEffect(() => {
    const animation = anime.timeline({ loop: false });
    animation
      .add({
        targets: ".ml6 .letter",
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 1900,
        delay: (el, i) => 50 * i,
      })
      .add({
        targets: heading1.current,
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "easeOutElastic",
        duration: 1000,
      })
      .add({
        targets: heading2.current,
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "easeOutElastic",
        duration: 1000,
      })
      .add({
        targets: heading3.current,
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "easeOutElastic",
        duration: 1000,
      })
      .add({
        targets: shoeImage.current,
        translateX: [window.innerWidth, 0],
        duration: 1000,
      });
  }, []);

  return (
    <>
      <div
        className="flex justify-center items-center w-full min-w-full h-screen"
        style={{ overflow: "hidden" }}
      >
        <div
          className="w-[8%] h-full flex justify-evenly items-center 
          flex-col bg1 border p-4"
        >
          <div className="w-24">
            <img src={logo} className="w-full h-full object-cover" alt="logo" />
          </div>
          <div className="text-4xl ml6 flex h-[700px] flex-col justify-around items-center font-semibold">
            <div
              ref={main}
              className="letter flex flex-col justify-center items-center"
            >
              <span className="-rotate-90">OVER</span>
            </div>
            <div
              ref={main}
              className="letter flex flex-col justify-center items-center"
            >
              <span className="-rotate-90">TAKES</span>
            </div>
            <div
              ref={main}
              className="letter flex flex-col justify-center items-center"
            >
              <span className="-rotate-90">STYLE</span>
            </div>
          </div>
        </div>
        <div className="w-[90%] h-full flex flex-col gap-24 items-center mx-auto p-4">
          <Navbar />

          <div className="flex justify-between items-center gap-28">
            <div className="text-white">
              <p
                ref={heading1}
                className="uppercase text-8xl height font-extrabold mulish italic"
              >
                Air Max
              </p>
              <p
                ref={heading2}
                className="uppercase text-5xl height font-thin mulish italic"
              >
                nike air max 90
              </p>
              <p
                ref={heading3}
                className="uppercase text-5xl height font-thin mulish"
              >
                $90
              </p>
            </div>
            <div className="w-[600px] h-[390px] -rotate-12">
              <img
                src={bannerImage}
                ref={shoeImage}
                className="w-full h-full object-cover"
                alt="bannerImage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
