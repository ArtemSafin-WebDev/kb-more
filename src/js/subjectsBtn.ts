export default function subjectsBtn() {
  const btn = document.querySelector<HTMLElement>(".home__subjects-btn");
  btn?.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".home__subjects")?.classList.toggle("active");
  });
}
