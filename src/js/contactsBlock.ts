import initFileUpload from "./func/initFIleUpload";

export default function contactsBlock() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".contacts-block")
  );

  elements.forEach((element) => {
    const fileUpload = element.querySelector<HTMLElement>(".js-file-upload");
    if (fileUpload) {
      initFileUpload(fileUpload);
    }
  });
}
