var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I bfsgddsbf',
        size: 20,
        align: 'left',
        color: 'red'
    }
    ]
}
var gTxtParams = {
    fill: 'white',
    stroke: 'black',
    font: 60
}

function getMeme() {
    return gMeme
}

function setLineTxt(text) {
    gMeme.lines[0].txt = text
    renderMeme()
}
function setImg(imgId) {
    gMeme.selectedImgId = imgId
    document.querySelector('.memes').style.display = 'none'
    document.querySelector('.canvas-container').style.display = 'block'
    renderMeme()
}
function setColor(color, type) {
    if (type === 'fill') {
        gTxtParams.fill = color
    } else {
        gTxtParams.stroke = color
    }
    drawText()

}
function getTxtParams() {
    return gTxtParams
}
function changeFontSize(num) {
    gTxtParams.font += num
    drawText(' ')
    drawText()
}