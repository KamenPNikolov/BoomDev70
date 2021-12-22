import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
  const divImage = document.querySelector(".image");
  let imgEl = divImage.childNodes;
  imgEl.addEventListener("click", ()=> {
      divImage.classList.add("active");
      let width = imgEl.width;
      let height = imgEl.height;
      imgEl.width = width*2;
      imgEl.height = height*2;


  })
});
