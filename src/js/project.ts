import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import initFileUpload from "./func/initFIleUpload";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

export default function project() {
  const project = document.querySelector<HTMLElement>(".project");
  if (!project) return;

  let mm = gsap.matchMedia();

  function initProjectScripts(context: HTMLElement = document.documentElement) {
    const fileUpload = context.querySelector<HTMLElement>(".js-file-upload");
    if (fileUpload) {
      initFileUpload(fileUpload);
    }
  }

  initProjectScripts();

  function initAnimations(context: HTMLElement = document.documentElement) {
    const next = context.querySelector<HTMLElement>(".project__next");
    const nextBlock = context.querySelector<HTMLElement>(
      ".project__next-block"
    );
    if (next && nextBlock) {
      const innerBar = context.querySelector<HTMLElement>(
        ".project__next-progress-bar-inner"
      );
      //   const nextProjectURL = next.getAttribute("data-next-url");

      mm.add("(min-width: 641px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: next,
            start: "top top",
            //   end: () => `top+=${next?.offsetHeight - nextBlock?.offsetHeight} top`,
            endTrigger: ".page-footer",
            end: "bottom bottom",
            pin: nextBlock,
            pinSpacing: false,
            scrub: true,
          },
          onComplete: () => {},
        });

        tl.to(innerBar, {
          scaleX: 1,
          duration: 1,
        });
      });
    }

    const intro = context.querySelector<HTMLElement>(".project__intro");

    const introImageBlock = context.querySelector<HTMLElement>(
      ".project__intro-image-wrapper-animation-wrapper"
    );

    const introImageTarget = context.querySelector<HTMLElement>(
      ".project__intro-image-wrapper"
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
  }

  initAnimations();
}
