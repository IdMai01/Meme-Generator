'use strict'
var gStickers = [
    { id: 1, url: 'img/stickers/1.png' },
    { id: 2, url: 'img/stickers/2.png' },
    { id: 3, url: 'img/stickers/3.png' },
    { id: 4, url: 'img/stickers/4.png' },
]
var gIsStickerOn = false
var gStickerLocation = { x: 450, y: 200, size: 300, }
var gCurrSticker
function setSticker(id, element = false) {
    for (var i = 0; i < 4; i++) {
        if (i + 1 === +id && element) {
            gIsStickerOn = gIsStickerOn ? false : true;
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
    var meme = getMeme()
    meme.currSticker = gCurrSticker
    renderMeme()
}
function getStickerLocation() {
    return gStickerLocation
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
function setStickerDrag(isDrag) {
    gStickerLocation.isDrag = isDrag
}
function resetSticker() {
    gStickerLocation = { x: 450, y: 200, size: 300, }
}
function getStickerStatus() {
    return gIsStickerOn
}