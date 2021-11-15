import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryConteiner = document.querySelector(".gallery");

const galleryMarkup = createImagesGalleryMarkup(galleryItems);

galleryConteiner.addEventListener("click", makeClickImageGallery);

galleryConteiner.insertAdjacentHTML("beforeend", galleryMarkup);

function createImagesGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>`;
    })
    .join("");
}

function makeClickImageGallery(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  console.log(e.target.dataset.source);

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
`);

  console.log(instance.show());
}
