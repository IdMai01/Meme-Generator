'use strict'
var gStickers = [
    { id: 1, url: 'img/stickers/1.png' },
    { id: 2, url: 'img/stickers/2.png' },
    { id: 3, url: 'img/stickers/3.png' },
    { id: 4, url: 'img/stickers/4.png' },
]
var gStickerLocation = { x: 450, y: 150, size: 300, }
var currSticker
function setSticker(id, element = false) {
    for (var i = 0; i < 4; i++) {
        if (i + 1 === +id && element) {
            element.classList.toggle("selected-sticker")
            if (currSticker !== id) {
                currSticker = id
            }
            else {
                currSticker = false
            }
            continue
        }
        document.querySelector(`.sticker${i + 1}`).classList.remove('selected-sticker')
    }
    var meme = getMeme()
    meme.currSticker = currSticker
    renderMeme()
}
function getStickerLocation() {
    return gStickerLocation
}
function getStickers() {
    return gStickers
}
function getCurrSticker() {
    return currSticker
}
function setCurrSticker(value = false) {
    if (currSticker) {
        setSticker(currSticker)
    }
    currSticker = value
}
function setStickerDrag(isDrag) {
    gStickerLocation.isDrag = isDrag
}