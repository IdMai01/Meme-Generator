'use strict'
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
        txt: 'first line',
        align: 'left',
        fill: 'white',
        stroke: 'black',
        font: 60,
        x: 0,
        y: 100
    }, {
        txt: 'sec line',
        align: 'left',
        fill: 'white',
        stroke: 'black',
        font: 60,
        x: 0,
        y: 500
    }, {
        txt: 'third line',
        align: 'left',
        fill: 'white',
        stroke: 'black',
        font: 60,
        x: 0,
        y: 300
    }
    ]
}

function getMeme() {
    return gMeme
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
    renderMeme()
}
function setImg(imgId) {
    gMeme.selectedImgId = imgId
    document.querySelector('.memes').style.display = 'none'
    document.querySelector('.canvas-container').style.display = 'grid'
    renderMeme()
}
function setColor(color, type) {
    var currLine = gMeme.lines[gMeme.selectedLineIdx]
    if (type === 'fill') {
        currLine.fill = color
    } else {
        currLine.stroke = color
    }
    drawTexts()

}
function getTxtParams() {
    return gMeme.lines[gMeme.selectedLineIdx]
}
function changeFontSize(num) {
    var currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.font += num
    drawTexts()
}
function switchLine() {
    if (gMeme.selectedLineIdx < gMeme.lines.length - 1) {
        gMeme.selectedLineIdx++
    } else {
        gMeme.selectedLineIdx = 0
    }
}