function download(el) {
  console.log("el", el);
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    `./assets/books/${el}.pdf`
  );
  // element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}