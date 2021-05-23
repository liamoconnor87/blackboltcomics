var slideIndex = 0;
showSlides();

function showSlides() {
    var i;

    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) { 
        slideIndex = 1 
    }

    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }

    slides[slideIndex - 1].style.display = "block";

    // Change image every 4 seconds.
    setTimeout(showSlides, 4000); 
}