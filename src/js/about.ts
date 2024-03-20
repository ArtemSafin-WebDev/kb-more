import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

export default function about() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".about"));
  let mm = gsap.matchMedia();
  elements.forEach((element) => {
    const intro = element.querySelector<HTMLElement>(".about__intro");
    const introImageBlock = element.querySelector<HTMLElement>(
      ".about__intro-image-wrapper-animation-wrapper"
    );

    const introImageTarget = element.querySelector<HTMLElement>(
      ".about__intro-image-wrapper"
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
