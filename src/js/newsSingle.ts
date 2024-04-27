import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

export default function newsSingle() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".news-single")
  );
  let mm = gsap.matchMedia();
  elements.forEach((element) => {
    const intro = element.querySelector<HTMLElement>(".news-single__top-row");
    const introImageBlock = element.querySelector<HTMLElement>(
      ".news-single__preview-image-wrapper-animation-wrapper"
    );

    const introImageTarget = element.querySelector<HTMLElement>(
      ".news-single__preview-image-wrapper"
    );

    if (introImageBlock && introImageTarget) {
      const state = Flip.getState(introImageBlock);
      introImageTarget.appendChild(introImageBlock);
      mm.add("(min-width: 641px)", () => {
        Flip.to(state, {
          absolute: true,
          ease: "none",
          duration: 4,
          scrollTrigger: {
            trigger: intro,
            start: "top+=200 center",
            end: "top+=50% center",
            scrub: true,
            markers: false,
          },
        });
      });
    }
  });
}
