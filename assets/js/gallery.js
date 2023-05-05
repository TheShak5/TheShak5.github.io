function grayscaleGallery() {
  const images = document.querySelectorAll('.gallery img');

  images.forEach(image => {
    image.addEventListener('mouseover', () => {
      images.forEach(img => {
        if (img !== image) {
          img.style.filter = 'grayscale(100%)';
        }
      });
    });

    image.addEventListener('mouseout', () => {
      images.forEach(img => {
        img.style.filter = 'none';
      });
    });
  });
}


// function grayscaleGallery() {
//         var images = document.querySelectorAll('.gallery img');

//         for (var i = 0; i < images.length; i++) {
//           images[i].addEventListener('mouseover', function() {
//             for (var j = 0; j < images.length; j++) {
//               if (images[j] !== this) {
//                 images[j].style.filter = 'grayscale(100%)';
//               }
//             }
//           });

//           images[i].addEventListener('mouseout', function() {
//             for (var j = 0; j < images.length; j++) {
//               images[j].style.filter = 'grayscale(0%)';
//             }
//           });
//         }
//       }