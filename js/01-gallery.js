import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const strMarkup = galleryItems.map((el) => {
  const newElem =
    '<div class="gallery__item">' +
    '<a class="gallery__link" href="' +
    el.original +
    '">' +
    "<img " +
    'class="gallery__image"' +
    ' src="' +
    el.preview +
    '"' +
    ' data-source="' +
    el.original +
    '"' +
    ' alt="' +
    el.description +
    '"' +
    "/>" +
    "</a>" +
    "</div> ";

  return newElem;
});

const elemGallery = document.querySelector(".gallery");
elemGallery.addEventListener("click", onGalleryDivClick);

elemGallery.insertAdjacentHTML("afterbegin", strMarkup.join(""));

function onGalleryDivClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  elemGallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
