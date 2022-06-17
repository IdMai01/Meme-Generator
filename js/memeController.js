'use strict'
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [
    { id: 0, url: 'img/0.jpg', keywords: ['toy story', 'introduction'] },
    { id: 1, url: 'img/1.jpg', keywords: ['trump', 'funny'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'dogs'] },
    { id: 3, url: 'img/3.jpg', keywords: ['baby', 'dog'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'baby'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'explaining'] },
    { id: 7, url: 'img/7.jpg', keywords: ['shocked', 'baby'] },
    { id: 8, url: 'img/8.jpg', keywords: ['listening', 'movies'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'baby'] },
    { id: 10, url: 'img/10.jpg', keywords: ['laugh', 'obama'] },
    { id: 11, url: 'img/11.jpg', keywords: ['kiss', 'gay'] },
    { id: 12, url: 'img/12.jpg', keywords: ['pointing', 'haim hecht'] },
    { id: 13, url: 'img/13.jpg', keywords: ['movies', 'cheers'] },
    { id: 14, url: 'img/14.jpg', keywords: ['sunglasses', 'movies'] },
    { id: 15, url: 'img/15.jpg', keywords: ['explaining', 'talk'] },
    { id: 16, url: 'img/16.jpg', keywords: ['movies', 'startrak'] },
    { id: 17, url: 'img/17.jpg', keywords: ['funny', 'putin'] },
    { id: 18, url: 'img/18.jpg', keywords: ['funny', 'confused'] },

]
var gCanvas
var gCtx
var gLastText = {
    x: 100,
    y: 100,
    txt: ''
}

function init() {
    resetMeme()
    renderTags()
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    renderGallery()
    renderMeme()
}
function renderMeme() {
    var currMeme = getMeme()
    var elImg = new Image
    elImg.src = gImgs[currMeme.lines[0].id].url
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
    drawTexts()
}
function getImages() {
    return gImgs
}
function saveLastTxt(txt, x, y) {
    gLastText.x = x
    gLastText.y = y
    gLastText.txt = txt
}
function getMemesAmount() {
    return gImgs.length
}
function goToHomepage() {
    document.querySelector('.memes').style.display = 'grid'
    document.querySelector('.canvas-layout').style.display = 'none'
    document.querySelector('.search-bar').style.display = 'block'
    init()
}
function renderSavedMemes() {
    // var memes = loadFromStorage(getKey())
    // goToHomepage()
    alert('this feature is not supported yet')
}

function moveLine(num) {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].y += 20 * num
    renderMeme()
}