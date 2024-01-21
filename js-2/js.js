"use strict";

class AccessibleAccordion {
  constructor(domNode) {
    this.rootEl = domNode;
    this.buttonEl = this.rootEl.querySelector("button[aria-expanded]");
    const controlsId = this.buttonEl.getAttribute("aria-controls");
    this.contentEl = document.getElementById(controlsId);

    this.open = this.buttonEl.getAttribute("aria-expanded") === "true";

    this.buttonEl.addEventListener("click", this.onButtonClick.bind(this));

    this.contentEl.addEventListener("transitionend", (e) => {
      if (this.open) {
        this.contentEl.classList.remove("closed");
      } else {
        this.contentEl.classList.add("invisible");
      }
    });
  }

  onButtonClick() {
    this.toggle(!this.open);
  }

  toggle(open) {
    if (open === this.open) {
      return;
    }

    this.open = open;
    this.buttonEl.setAttribute("aria-expanded", `${open}`);

    if (this.open) {
      this.contentEl.classList.remove("invisible");
      this.contentEl.classList.remove("closed");
    } else {
      this.contentEl.classList.add("closed");
    }
  }

  open() {
    this.toggle(true);
  }

  close() {
    this.toggle(false);
  }
}

const accordions = document.querySelectorAll(".accordion h3");
accordions.forEach((accordionEl) => {
  new AccessibleAccordion(accordionEl);
});
document.getElementById("accordionGroup").addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log(e.target)
});
// document.querySelector(".oc-ind-cont").addEventListener("click", function () {
//   console.log("its open")
//   this.classList.toggle("flipped");
// });