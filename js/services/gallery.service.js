'use strict'
function renderGallery(images = false) {
    if (!images) {
        images = getImages()
    }
    var strHtml = ''
    for (var i = 0; i < images.length; i++) {
        strHtml +=
            `<img onclick="onImgSelect(this.id)" src="img/${images[i].id}.jpg" id="${images[i].id}">`
    }
    document.querySelector('.memes').innerHTML = strHtml
}

function onImgSelect(imgId) {
    setImg(imgId)
}