let index = 0;
showImage(index);

function showImage(i) {
  index += i;
  let images = document.getElementsByClassName("image");
  let dots = document.getElementsByClassName("dot");

  // Hide all images
  for (let j = 0; j < images.length; j++) {
    images[j].style.display = "none";
  }

  // Remove "active" class from all dots
  for (let j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", "");
  }

  // Correct index if it goes out of bounds
  if (index >= images.length) {
    index = 0;
  }
  if (index < 0) {
    index = images.length - 1;
  }

  // Show the current image and mark the corresponding dot as active
  images[index].style.display = "block";
  dots[index].className += " active";
}