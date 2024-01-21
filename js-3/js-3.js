const questions = document.querySelectorAll(".question");

questions.forEach((element) => {
  element.addEventListener("click", () => {
    const nextBox = element.nextElementSibling;
    const icons = element.querySelector(".icon");

    icons.style.transition = "0.5s linear";

    if (nextBox.classList.contains("active")) {
      nextBox.classList.remove("active");
      icons.style.transform = "rotate(0deg)";
    } else {
      document
        .querySelectorAll(".answer.active")
        .forEach((nextBox) => nextBox.classList.remove("active"));
      document
        .querySelectorAll(".icon")
        .forEach((normal) => (normal.style.transform = "rotate(0deg)"));

      icons.style.transform = "rotate(180deg)";
      nextBox.classList.add("active");
    }
  });
});
