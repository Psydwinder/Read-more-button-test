const readMoreBtn = document.querySelector(".read-more-btn");
const desc = document.querySelector(".desc");

readMoreBtn.addEventListener("click", (e) => {
  desc.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read more") {
    readMoreBtn.innerText = "Read less";
  } else {
    readMoreBtn.innerText = "Read more";
  }
});
