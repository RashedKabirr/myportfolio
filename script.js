const togglebtn = document.querySelector(".toggle-button");
const ul = document.querySelector(".ul");

togglebtn.addEventListener('click',()=>{
    ul.classList.toggle("active");
})