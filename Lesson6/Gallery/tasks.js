//1. Доработать функцию замены картинки в галерее таким 
//образом, чтобы она проверяла наличие картинки по указанному 
//в src адресу.
//3) *Добавить в галерею функцию перехода к следующему изображению. 
//По сторонам от большой картинки должны быть стрелки «вперед» и 
//«назад», по нажатию на которые происходит замена изображения на 
//следующее или предыдущее.

const gallery = document.querySelector('#gallery');
const bigPicture = document.querySelector('#big-picture');
const images = document.querySelectorAll('img');
var currentBigPic = document.querySelector('img');

//c
images.forEach(image => {
    image.addEventListener('click', changeBigPicture);
});

function changeBigPicture(event) {

    bigPicture.innerHTML = ''; 
    bigPicture.style.display = 'grid';
    bigPicture.style.gridTemplateColumns = '1fr 10fr 1fr';
    const arrowLeft = document.createElement('div');
    arrowLeft.classList.add('arrowLeft', 'arrow');
    bigPicture.appendChild(arrowLeft);

    
    const image = event.target;
    var imageNameParts = image.id.split('_');
    //console.log(imageNameParts);
    var src = 'img/' + imageNameParts[0] + '_big.jpeg';
    var bigPicToInput = document.createElement('img');
    bigPicToInput.src = src;
    bigPicToInput.setAttribute('onerror', "this.style.display = 'none'");
    bigPicToInput.id = imageNameParts[0] + '_big.jpeg';
    bigPicture.appendChild(bigPicToInput);

    
    const arrowRight = document.createElement('div');
    arrowRight.classList.add('arrowRight', 'arrow');
    bigPicture.appendChild(arrowRight);

    const arrows = document.querySelectorAll('.arrow');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', changePic);
    });
    currentBigPic = bigPicToInput;
};
function changePic(event) {
    bigPicture.innerHTML = ''; 
    bigPicture.style.display = 'grid';
    bigPicture.style.gridTemplateColumns = '1fr 10fr 1fr';
    
    const arrowLeft = document.createElement('div');
    arrowLeft.classList.add('arrowLeft', 'arrow');
    bigPicture.appendChild(arrowLeft);
    
    var image = currentBigPic;
    //console.log(image);
    var imageNameParts2 = image.id.split('_');
    //console.log(imageNameParts2);
    var src = 'img/' + (parseInt(imageNameParts2[0]) + 1) + '_big.jpeg';
    //console.log(src);
    var bigPicToInput = document.createElement('img');
    bigPicToInput.src = src;
    bigPicToInput.setAttribute('onerror', "this.style.display = 'none'");
    bigPicture.appendChild(bigPicToInput);

    const arrowRight = document.createElement('div');
    arrowRight.classList.add('arrowRight', 'arrow');
    bigPicture.appendChild(arrowRight);
    currentBigPic = bigPicToInput;
    console.log(currentBigPic);
};





