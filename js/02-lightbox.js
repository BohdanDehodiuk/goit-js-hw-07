import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

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
                    alt="${description}"
                />
            </a>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  overlay: true,
  captionType: "attr",
  captionDelay: 250,
  captionsData: "alt",
});

function makeClickImageGallery(e) {
  e.preventDefault();
}
