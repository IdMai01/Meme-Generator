'use strict'
var gMeme

function resetMeme() {
    gMeme = {
        selectedImgId: 0,
        selectedLineIdx: 0,
        isRandom: false,
        lines: [{
            txt: 'Enter your text here',
            align: 'left',
            fill: '#ffffff',
            stroke: 'black',
            font: 78,
            x: 50,
            y: 150,
            fontFam: 'Impact'
        }, {
            txt: 'Enter your text here',
            align: 'left',
            fill: '#ffffff',
            stroke: 'black',
            font: 78,
            x: 50,
            y: 650,
            fontFam: 'Impact'
        }
        ]
    }
}

function getMeme() {
    return gMeme
}

function drawTexts() {
    var currMeme = getMeme()
    for (var i = 0; i < currMeme.lines.length; i++) {
        var currLine = currMeme.lines[i]
        gCtx.font = `${currLine.font}px ${currLine.fontFam}`
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = currLine.stroke
        gCtx.fillStyle = currLine.fill
        gCtx.fillText(currLine.txt, currLine.x, currLine.y)
        gCtx.strokeText(currLine.txt, currLine.x, currLine.y)
    }
}
function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
    renderMeme()
}
function setImg(imgId) {
    gMeme.selectedImgId = imgId
    document.querySelector('.memes').style.display = 'none'
    document.querySelector('.canvas-layout').style.display = 'grid'
    document.querySelector('.search-bar').style.display = 'none'
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
    var elTxt = document.querySelector('.txt-input')
    renderMeme()
    // drawTexts(elTxt.value)
}
function switchLine() {
    if (gMeme.selectedLineIdx < gMeme.lines.length - 1) {
        gMeme.selectedLineIdx++
    } else {
        gMeme.selectedLineIdx = 0
    }
    syncInputBoxes()
}
function setRandomMeme() {
    var randomMemeId = getRandomIntInt(0, getMemesAmount())
    setRandomTxts()
    setImg(randomMemeId)
}
function setRandomTxts() {
    var randomStroke = getRandomColor()
    var randomFill = getRandomColor()
    for (var i = 0; i < gMeme.lines.length; i++) {
        var currLine = gMeme.lines[i]
        currLine.txt = getRandomTxt()
        currLine.stroke = randomStroke
        currLine.fill = randomFill
        currLine.font = getFontSize(currLine.txt) * 1.9
    }
}
function setFont(font) {
    console.log('font: ', font)
    for (var i = 0; i < gMeme.lines.length; i++) {
        if (font === '') {
            font = 'Impact'
        }
        gMeme.lines[gMeme.selectedLineIdx].fontFam = font
    }
    renderMeme()
}
function removeLine() {
    if (gMeme.lines.length < 2) {
        gMeme.lines[0] = {
            txt: 'Enter your text here',
            align: 'left',
            fill: '#ffffff',
            stroke: 'black',
            font: 78,
            x: 50,
            y: 150,
            fontFam: 'Impact'
        }

    } else {
        gMeme.lines.splice(gMeme.selectedLineIdx, 1)
        gMeme.selectedLineIdx = 0
    }
    renderMeme()
    syncInputBoxes()
}
function addLine() {
    gMeme.lines.unshift({
        txt: 'Enter your text here',
        align: 'left',
        fill: '#ffffff',
        stroke: 'black',
        font: 78,
        x: 50,
        y: 400,
        fontFam: 'Impact'
    })
    gMeme.selectedLineIdx = ((gMeme.lines.length) - 1)
    renderMeme()
    switchLine()
    syncInputBoxes()
}