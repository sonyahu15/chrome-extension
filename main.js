window.addEventListener("DOMContentLoaded", (e) => {
    let catImgURL = 'wideEyedCat.jpeg'
document.body.style.backgroundImage = `url(${catImgURL})`;


function getCatImg() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json())
      .then((json) => {
        catImgURL = json[0].url;
        document.body.style.backgroundImage = `url(${catImgURL})`;
      })
      .catch((error) => {
        console.error('Error fetching cat image:', error);
      });
  }
  
  const button = document.querySelector('button');
  button.addEventListener('click', getCatImg);
})

