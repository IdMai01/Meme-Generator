'use strict'
function renderGallery(saved = false) {
    if (saved) {
        var images = saved
    } else {
        var images = getImages()
    }
    var strHtml = ''
    for (var i = 0; i < images.length; i++) {
        strHtml +=
            `<img onclick="onImgSelect(this.id)" src="img/${i}.jpg" id="${i}">`
    }
    document.querySelector('.memes').innerHTML = strHtml
}

function onImgSelect(imgId) {
    setImg(imgId)
}