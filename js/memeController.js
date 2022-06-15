var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [
    { id: 0, url: 'img/0.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
]
var gCanvas
var gCtx

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    renderMeme()
}
function renderMeme() {
    var currMeme = getMeme()
    var elImg = new Image
    elImg.src = gImgs[currMeme.selectedImgId].url
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
    drawText(currMeme.lines[0].txt, 0, 200)
}
function drawText(text, x, y) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '60px Arial'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}
function getImages(){
    return gImgs
}


