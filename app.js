const menuBtn = document.querySelector(".menu");
const ul = document.querySelector("ul");

menuBtn.addEventListener("click", () => {
    ul.classList.toggle("active");
    
})