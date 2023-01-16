import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const strMarkup = galleryItems.map((el) => {
  const newElem =
    "<li>" +
    '<a class="gallery__item"' +
    'href = "' +
    el.original +
    '">' +
    '<img class="gallery__image" src="' +
    el.preview +
    '" alt="' +
    el.description +
    '" />' +
    "</a>" +
    "</li>";
  return newElem;
});

const elemGallery = document.querySelector(".gallery");

elemGallery.insertAdjacentHTML("afterbegin", strMarkup.join(""));
