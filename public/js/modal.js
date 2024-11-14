const modal = document.getElementById("modal");
const modalImage = document.querySelector(".modal-image");
const modalName = document.querySelector(".modal-name");
const modalColor = document.querySelector(".modal-color");
const modalGenre = document.querySelector(".modal-genre");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
        const imageSrc = item.querySelector(".item--image").src;
        const name = item.querySelector(".item--name").innerText;
        const color = item.querySelector(".item--color").innerText;
        const genre = item.querySelector(".item--genre").innerText;

        modalImage.src = imageSrc;
        modalName.textContent = name;
        modalColor.textContent = color;
        modalGenre.textContent = genre;

        modal.style.display = "flex"; 
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
