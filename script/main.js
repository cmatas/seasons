(function() {
  var theimages = document.querySelectorAll('.image-holder'),
      theheading = document.querySelector('.heading'),
      thesubhead = document.querySelector('.main-copy h2'),
      theseasonText = document.querySelector('.main-copy p'),
      appliedClass;

// i want to canfe all the content on the page
function changeElements() {
  //debugger; // this is a special term that stops code execution
  let subImages = document.querySelector('.subImagesContainer');
  let objectIndex = dynamicContent[this.id];

  // remove duplicated images
  while (subImages.firstChild) {
    subImages.removeChild(subImages.firstChild);
  }

  // add the images to the bottom of the page
  objectIndex.images.forEach(function(image, index){
    //create an image element
    let newSubImg = document.createElement('img');
    // add a css class to it
    newSubImg.classList.add('thumb');
    // set the src
    newSubImg.src = "images/" + objectIndex.images[index];

    newSubImg.datasaet.index = index;

    // add an event handler to tigger a lightbox
    newSubImg.addEventListener('click', function() {popLightbox(index, objectIndex);}, false)

    // add it to the page
    subImages.appendChild(newSubImg);
  })

//"remove" resets the color back so change doesn't stay if goiing back
  thesubhead.classList.remove(this.id);
  theheading.classList.remove(this.id);

//change the text using the valies of the properties in the object
  thesubhead.firstChild.nodeValue = objectIndex.headline;
  theseasonText.firstChild.nodeValue = objectIndex.text;

//add the color that corresponds to the season we clicked on
  thesubhead.classList.add(this.id);
  theheading.classList.add(this.id);

  appliedClass = this.id;
}

theimages.forEach(function(image, index){
  //add an event handler to each image
  image.addEventListener('click', changeElements, false);
}) //instead of (i=0 ; i>something)

  // trigger the lightbox
 function popLightbox(currentIndex, currentObject) {
  //  debugger;
  //  trigger the lightbox overlay so that we can see it!
  let lightbox = document.querySelector('.lightbox');

  lightbox.style.display = 'block';
 }

 // document.querySelector('#spring').click()
 changeElements.call(document.querySelector('#spring'));
 })();
