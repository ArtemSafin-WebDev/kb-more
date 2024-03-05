import { Panzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/panzoom/panzoom.css";
import { OptionsType } from "@fancyapps/ui/types/Panzoom/options";
import gsap from "gsap";

export default function intro() {
  const container = document.getElementById("myPanzoom");
  const rows = document.querySelector<HTMLElement>(".home__rows");
  if (!rows) return;

  const DURATION = 180;
  const options: Partial<OptionsType> = {
    click: "toggleZoom",
    minScale: 1,
    maxScale: 4,
    wheel: false,

    width: () => {
      return rows.offsetWidth;
    },
    height: () => {
      return rows.offsetHeight;
    },
  };

  const columns = Array.from(
    document.querySelectorAll<HTMLElement>(".home__col")
  );

  columns.forEach((col) => {
    const innerTrack = col.querySelector<HTMLElement>(".home__col-inner-track");
    const mainTrack = col.querySelector<HTMLElement>(".home__col-track");
    if (!innerTrack || !mainTrack) return;
    // const items = Array.from(innerTrack.children) as HTMLElement[];
    mainTrack.appendChild(innerTrack.cloneNode(true));
    mainTrack.appendChild(innerTrack.cloneNode(true));
  });

  const oddTracks = Array.from(
    document.querySelectorAll(
      ".home__col:nth-child(odd) .home__col-inner-track"
    )
  );
  const evenTracks = Array.from(
    document.querySelectorAll(
      ".home__col:nth-child(even) .home__col-inner-track"
    )
  );

  oddTracks.forEach((item) => {
    gsap.to(item, {
      ease: "none",
      yPercent: -100,
      duration: DURATION,
      repeat: -1,
    });
  });
  evenTracks.forEach((item) => {
    gsap.to(item, {
      ease: "none",
      yPercent: 100,
      duration: DURATION,
      repeat: -1,
    });
  });

  const instance = new Panzoom(container, options);

  console.log("Can zoom in", instance.canZoomIn());
  console.log("Can zoom out", instance.canZoomOut());

  const horizontalCenter = ((rows.offsetWidth - window.innerWidth) / 2) * -1;

  instance.panTo({
    x: horizontalCenter,
    friction: 0,
  });

  setTimeout(() => {
    // instance.zoomIn(2);
  }, 2000);

  let timer: any = null;

  instance.on("touchStart", () => {
    timer = setTimeout(() => {
      document.body.classList.add("panning");
    }, 200);
  });
  instance.on("touchEnd", () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    document.body.classList.remove("panning");
  });
}
