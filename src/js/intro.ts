import { Panzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/panzoom/panzoom.css";

import { OptionsType } from "@fancyapps/ui/types/Panzoom/options";

export default function intro() {
  const container = document.getElementById("myPanzoom");
  const rows = document.querySelector<HTMLElement>(".home__rows");
  if (!rows) return;
  const col = document.querySelector<HTMLElement>(".home__col");
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
}
