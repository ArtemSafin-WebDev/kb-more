export default function menu() {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (
      target.matches(".page-header__burger") ||
      target.closest(".page-header__burger")
    ) {
      document.body.classList.toggle("menu-open");
    }
  });
}
