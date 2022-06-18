'use strict'
var gStickers = [
    { id: 1, url: 'img/stickers/1.png' },
    { id: 2, url: 'img/stickers/2.png' },
    { id: 3, url: 'img/stickers/3.png' },
    { id: 4, url: 'img/stickers/4.png' },
]
var gCurrSticker
function setSticker(id, element = false) {
    for (var i = 0; i < 4; i++) {
        if (i + 1 === +id && element) {
            element.classList.toggle("selected-sticker")
            if (gCurrSticker !== id) {
                gCurrSticker = id
            }
            else {
                gCurrSticker = false
            }
            continue
        }
        document.querySelector(`.sticker${i + 1}`).classList.remove('selected-sticker')
    }
    renderMeme()
}
function getStickers() {
    return gStickers
}
function getCurrSticker() {
    return gCurrSticker
}
function setCurrSticker(value = false) {
    if (gCurrSticker) {
        setSticker(gCurrSticker)
    }
    gCurrSticker = value
}