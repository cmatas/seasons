(function() {
  var theImages = document.querySelectorAll('.image-holder'),
      theHeading = document.querySelector('.heading'),
      theSubHead = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
      appliedClass;

      // i want to change all the content on the page
      function changeElements() {
        //debugger; // this is a special term that stops code execution
        let subImages = document.querySelector('.subImagesContainer');
        let objectIndex = dynamicContent[this.id];

        // remove duplicate images
        while (subImages.firstChild) {
          subImages.removeChild(subImages.firstChild);
        }

        // add the images to the bottom of the page
        objectIndex.images.forEach(function(image, index) {
          // create an image element
          let newSubImg = document.createElement('img');
          // add a css class to it
          newSubImg.classList.add('thumb');
          // set the src
          newSubImg.src = "images/" + objectIndex.images[index];
          // add it to the page
          newSubImg.dataset.index =index;
          newSubImg.addEventListener('click',function() {popLightBox(index, objectIndex);}, false);

          subImages.appendChild(newSubImg);
        });

        // remove the colours we applied on the last click
        theSubHead.classList.remove(appliedClass);
        theHeading.classList.remove(appliedClass);

        // change the text using the values of the properties in the object
        theSubHead.firstChild.nodeValue = objectIndex.headline;
        theSeasonText.firstChild.nodeValue = objectIndex.text;

        // add the color that corresponds to the season we clicked on
        theSubHead.classList.add(this.id);
        theHeading.classList.add(this.id);

        appliedClass = this.id;
      }

      theImages.forEach(function(image, index){
        //add an event handler to each image
        image.addEventListener('click', changeElements, false);
      });
 // document.querySelector('#spring').click();

function popLightBox(currentIndex, currentObject){
  // debugger;
  let lightbox = document.querySelector('.lightbox');
  lightbox.style.display = 'block';
}
changeElements.call(document.querySelector('#spring'));

})();
