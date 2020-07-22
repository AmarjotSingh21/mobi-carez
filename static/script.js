let faqElements = document.getElementsByClassName("faq-element");
for (let i = 0; i < faqElements.length; i++) {
  faqElements[i].addEventListener("click", (el) => {
    removeClassFromElements("opened", faqElements, el.target);
    let isOpened = el.target.parentNode.classList.toggle("opened");
    let icon = el.target.childNodes[1];
    if (isOpened) {
      icon.classList.remove("fa-plus-square");
      icon.classList.add("fa-minus-square");
    } else {
      icon.classList.add("fa-plus-square");
      icon.classList.remove("fa-minus-square");
    }
  });
}

function removeClassFromElements(className, elements, exclude) {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] != exclude) {
      elements[i].parentNode.classList.remove(className);
      let icon = elements[i].childNodes[1];
      icon.classList.add("fa-plus-square");
      icon.classList.remove("fa-minus-square");
    }
  }
}
