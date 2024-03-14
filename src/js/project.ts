import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import initFileUpload from "./func/initFIleUpload";

gsap.registerPlugin(ScrollTrigger);

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
  }

  initAnimations();
}
