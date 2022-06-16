'use strict'
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [
    { id: 0, url: 'img/0.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'img/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'img/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'cat'] },
    { id: 17, url: 'img/17.jpg', keywords: ['funny', 'cat'] },
]
var gCanvas
var gCtx
var gLastText = {
    x: 100,
    y: 100,
    txt: ''
}

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    renderGallery()
    renderMeme()
}
function renderMeme() {
    var currMeme = getMeme()
    var elImg = new Image
    elImg.src = gImgs[currMeme.selectedImgId].url
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
    drawTexts()
}
function drawTexts() {
    var currMeme = getMeme()
    for (var i = 0; i < currMeme.lines.length; i++) {
        var currLine = currMeme.lines[i]
        gCtx.font = `${currLine.font}px Impact`
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = currLine.stroke
        gCtx.fillStyle = currLine.fill
        gCtx.fillText(currLine.txt, currLine.x, currLine.y)
        gCtx.strokeText(currLine.txt, currLine.x, currLine.y)
    }

}
function getImages() {
    return gImgs
}
function saveLastTxt(txt, x, y) {
    gLastText.x = x
    gLastText.y = y
    gLastText.txt = txt
}



