window.addEventListener("load", () => {
  setTimeout(() => {

    document
      .querySelectorAll(".card")
      .forEach(card=>{
        card.classList.remove("loading");
        card.classList.add("loaded");
      });

    document
      .querySelector(".category-title")
      .classList.add("loaded");

  }, 2200); // کند + هماهنگ
});
