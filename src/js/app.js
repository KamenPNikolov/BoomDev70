import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
  let divImage = document.querySelector(".image");
  
  divImage[0].addEventListener("click", ()=> {
      divImage[0].classList.add("active");
      divImage[0].style.transform = "scale(2,2)";


  })
});
