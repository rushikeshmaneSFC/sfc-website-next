import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";

gsap.registerPlugin(ScrollTrigger);

const VIGILEGallery = () => {
  useEffect(() => {
    const slidesContainerEl = document.getElementById("slides-container");

    imagesLoaded(slidesContainerEl, () => {
      initHorizontalSlider();
    });

    function initHorizontalSlider() {
      const slidesSectionId = "#screen-2";
      const slidesContainerId = "#slides-container";
      const speed = "+=100%";

      gsap.to(slidesContainerId, {
        scrollTrigger: {
          trigger: slidesSectionId,

          scrub: true,
          pin: true,
          start: "top top",
          end: speed,
          invalidateOnRefresh: true,
        },
        x: () => -(slidesContainerEl.offsetWidth - window.innerWidth),
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="text-[5em] font-sans font-normal m-0 p-0">
      <div
        id="screen-1"
        className="min-h-screen overflow-hidden relative flex items-center justify-center"
      >
        screen1
      </div>

      <div id="screen-2" className="min-h-screen overflow-hidden relative">
        <div
          id="slides-container"
          className="absolute top-0 left-0 h-full flex flex-nowrap"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="flex-shrink-0">
              <img
                src={`https://via.placeholder.com/${
                  num % 2 === 0 ? "300x600" : "728x400"
                }.jpg?text=${num}`}
                alt={`Slide ${num}`}
                className="h-screen w-auto min-w-screen outline outline-[10px] outline-blue-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        id="screen-3"
        className="min-h-screen overflow-hidden relative flex items-center justify-center"
      >
        screen3
      </div>
    </div>
  );
};

export default VIGILEGallery;
