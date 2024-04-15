const elements = Array.from(document.querySelectorAll(".js-gallery-slider"));

function init(element) {
  const container = element.querySelector(".gallery__slider-main .swiper");
  if (!container) return;

  const thumbsContainer = element.querySelector(
    ".gallery__slider-thumbs .swiper"
  );

  const thumbsInstance = new Swiper(thumbsContainer, {
    slidesPerView: 12,
    speed: 600,
    longSwipesRatio: 0.2,
  });

  const mainInstance = new Swiper(container, {
    slidesPerView: "auto",
    spaceBetween: 0,
    speed: 600,
    longSwipesRatio: 0.2,
    thumbs: {
      swiper: thumbsInstance,
    },
    breakpoints: {
      641: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });
}

elements.forEach((element) => init(element));

function initializeACFSlider($block) {
  console.log("Native slider element", $block[0]);
  init($block[0]);
}

//@ts-ignore
if (window.acf) {
  //@ts-ignore
  window.acf.addAction(
    "render_block_preview/type=image-slider",
    initializeACFSlider
  );
}
