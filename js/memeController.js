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
    drawText(currMeme.lines[0].txt, 0, 200)
}
function drawText(text = gLastText.txt, x = gLastText.x, y = gLastText.y) {
    console.log('text,x,y: ', text, x, y)
    gCtx.lineWidth = 2;
    txtParams = getTxtParams()
    if(text !== ' '){
        saveLastTxt(text, x, y)
    }
    gCtx.strokeStyle = txtParams.stroke
    gCtx.fillStyle = txtParams.fill
    gCtx.font = `${txtParams.font}px Arial`
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}
function getImages() {
    return gImgs
}
function saveLastTxt(txt, x, y) {
    gLastText.x = x
    gLastText.y = y
    gLastText.txt = txt
}



