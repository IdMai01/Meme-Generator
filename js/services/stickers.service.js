'use strict'
var gStickers = [
    { id: 1, url: 'img/stickers/1.png' },
    { id: 2, url: 'img/stickers/2.png' },
    { id: 3, url: 'img/stickers/3.png' },
    { id: 4, url: 'img/stickers/4.png' },
]
function setSticker(id, element) {
    for (var i = 0; i < 4; i++) {
        if (i + 1 === +id) {
            element.classList.toggle("selected-sticker")
            continue
        }
        document.querySelector(`.sticker${i+1}`).classList.remove('selected-sticker')
    }

}