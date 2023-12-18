

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners for table row hover
  const tableRows = document.querySelectorAll('.table-row');

  tableRows.forEach(row => {
      row.addEventListener('mouseenter', function () {
          // Add a class to highlight the row on hover
          this.classList.add('highlighted');
      });

      row.addEventListener('mouseleave', function () {
          // Remove the highlight class when the mouse leaves
          this.classList.remove('highlighted');
      });
  });
});


// indo.js

document.addEventListener('DOMContentLoaded', function () {
  const sliderImage = document.getElementById('sliderImage');
  const imageUrls = ['image/doctor.jpg', 'image/doc.jpg'];
  let currentImageIndex = 0;

  function changeImage() {
      sliderImage.src = imageUrls[currentImageIndex];
  }

  function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
      changeImage();
  }

  function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
      changeImage();
  }

  document.getElementById('nextButton').addEventListener('click', nextImage);
  document.getElementById('prevButton').addEventListener('click', prevImage);
});




function adjustElementBasedOnScreen() {
  const screenWidth = window.innerWidth;
  const epParagraph = document.getElementById('epParagraph');

  if (screenWidth <= 480) {
    epParagraph.style.fontSize = '14px';
  } else if (screenWidth <= 768) {
    epParagraph.style.fontSize = '16px';
  } else {
    epParagraph.style.fontSize = '18px';
  }
}


document.addEventListener('DOMContentLoaded', adjustElementBasedOnScreen);
window.addEventListener('resize', adjustElementBasedOnScreen);


