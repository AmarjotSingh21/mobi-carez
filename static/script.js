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

let readElements = document.getElementsByClassName("read-toggle");
console.log(readElements);
for (let i = 0; i < readElements.length; i++) {
  readElements[i].addEventListener("click", (el) => {
    let element = el.target;
    let parent = element.parentNode;
    console.log(parent);
    if (parent.classList.contains("read-less")) {
      parent.classList.remove("read-less");
      parent.classList.add("read-more");
      element.innerHTML =
        'READ LESS <i class="fa fa-caret-left ml-1" aria-hidden="true"></i>';
    } else if (parent.classList.contains("read-more")) {
      parent.classList.remove("read-more");
      parent.classList.add("read-less");
      element.innerHTML =
        'READ MORE <i class="fa fa-caret-right ml-1" aria-hidden="true"></i>';
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
