function showDetails() {
  var x = document.getElementById("details");
  if (x.className === "details") {
      x.className = "visibleDetails";
  } else {
    x.className = "details";
  }
}

function showDetails1() {
  var x = document.getElementById("details1");
  if (x.className === "details1") {
      x.className = "visibleDetails1";
  } else {
    x.className = "details1";
  }
}

function showDetails2() {
  var x = document.getElementById("signin");
  if (x.className === "signin") {
      x.className = "visibleSignin";
  } else {
    x.className = "signin";
  }
}

function showDetails3() {
  var x = document.getElementById("signin1");
  if (x.className === "signin1") {
      x.className = "visibleSignin1";
  } else {
    x.className = "signin1";
  }
}


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}