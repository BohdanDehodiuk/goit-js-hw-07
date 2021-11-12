import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryConteiner = document.querySelector(".gallery");

const galleryMarkup = createImagesGalleryMarkup(galleryItems);

galleryConteiner.addEventListener("click", aoClickImageGallery);

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

function aoClickImageGallery(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  console.log(e.target.dataset.source);
}

document.querySelector("button.image").onclick = () => {
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`
    )
    .show();
};
