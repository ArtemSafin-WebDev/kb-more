import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

export default function loadMore() {
  const news = document.querySelector<HTMLElement>(".news");
  if (!news) return;
  const links = Array.from(
    document.querySelectorAll<HTMLLinkElement>(".news__nav-link")
  );

  const list = document.querySelector<HTMLUListElement>(".news__list");
  const controller = new AbortController();
  const loadMore = document.querySelector<HTMLLinkElement>(".news__show-more");

  let pageNumber: number = 1;

  async function loadData(url: string, replace: boolean = false) {
    try {
      const response = await axios.get(url, {
        signal: controller.signal,
        params: {
          page_number: pageNumber,
        },
      });

      console.log("Page number", pageNumber);

      const data = response.data;

      const parser = new DOMParser();
      const nextPageHtml = parser.parseFromString(data, "text/html");
      const nextResults = Array.from(
        nextPageHtml.querySelectorAll<HTMLLIElement>(".news__list-item")
      );
      const nextLoadBtn = nextPageHtml.querySelector<HTMLLinkElement>(
        ".news__show-more:not(.hidden)"
      );

      if (loadMore) {
        if (!nextLoadBtn) {
          loadMore.classList.add("hidden");
        } else {
          loadMore.classList.remove("hidden");
        }
      }

      if (!list) return;
      const currentListItems =
        list?.querySelectorAll<HTMLLIElement>(".news__list-item");

      window.history.replaceState({}, "", url);

      const tl = gsap.timeline();

      if (replace) {
        tl.to(Array.from(currentListItems), {
          autoAlpha: 0,
          duration: 0.2,
        });
      }

      tl.add(() => {
        if (replace) {
          list.innerHTML = "";
        }

        list.append(...nextResults);
      })
        .fromTo(
          nextResults,
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            y: 0,
            ease: "power1.out",
          }
        )
        .add(() => {
          ScrollTrigger.refresh();
        });
    } catch (err) {
      console.error(err);
      return;
    }
  }

  links.forEach((link) =>
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      const href = link.href;
      pageNumber = 1;
      loadData(href, true)
        .then(() => {
          links.forEach((link) => link.classList.remove("active"));
          link.classList.add("active");
        })
        .catch((err) => console.error(err));
    })
  );

  if (loadMore) {
    loadMore.addEventListener("click", (event) => {
      event.preventDefault();
      const pathname = window.location.pathname;
      pageNumber++;
      loadData(pathname, false);
    });
  }
}
