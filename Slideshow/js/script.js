document.addEventListener("DOMContentLoaded", function () {
  const prev = document.querySelector("#previous");
  const next = document.querySelector("#next");
  const slides = document.getElementsByClassName("mySlides");
  const links = document.getElementsByClassName("links");

  console.log("hi");

  index = 0;
  slides[0].classList.add("d-block");
  links[0].classList.add("active");

  function showSlide(currentIndex) {
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("d-block");
      slides[i].classList.add("d-none");
      links[i].classList.remove("active");
    }
    slides[currentIndex].classList.remove("d-none");
    slides[currentIndex].classList.add("d-block");

    links[currentIndex].classList.add("active");
  }

  prev.addEventListener("click", function () {
    if (index == 0) {
      index = slides.length - 1;
    } else {
      index--;
    }
    showSlide(index);
  });

  next.addEventListener("click", function () {
    if (index == slides.length - 1) {
      index = 0;
    } else {
      index++;
    }
    showSlide(index);
  });

  console.log(prev);

  links[0].addEventListener("click", function () {
    index = 1;
    showSlide(0);
  });
  links[1].addEventListener("click", function () {
    index = 1;
    showSlide(1);
  });
  links[2].addEventListener("click", function () {
    index = 2;
    showSlide(2);
  });

});
