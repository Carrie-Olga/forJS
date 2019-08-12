//1. Доработать функцию замены картинки в галерее таким 
//образом, чтобы она проверяла наличие картинки по указанному 
//в src адресу.

const gallery = document.querySelector('#gallery');
const bigPicture = document.querySelector('#big-picture');
const images = document.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('click', changeBigPicture);
});

function changeBigPicture(event) {
    bigPicture.innerHTML = '';
    const image = event.target;
    var imageNameParts = image.id.split('_');
    var src = 'img/' + imageNameParts[0] + '_big.jpeg';
    var bigPicToInput = document.createElement('img');
    bigPicToInput.src = src;
    bigPicToInput.setAttribute('onerror', "this.style.display = 'none'");
    bigPicture.appendChild(bigPicToInput);

};