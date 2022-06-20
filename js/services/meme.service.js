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
            fontFam: 'Impact',
        }, {
            txt: 'Enter your text here',
            align: 'left',
            fill: '#ffffff',
            stroke: 'black',
            font: 78,
            x: 50,
            y: 600,
            fontFam: 'Impact',
        }
        ]
    }
}
function getMeme() {
    return gMeme
}
function drawTexts(isDownlad = false) {
    var currMeme = getMeme()
    for (var i = 0; i < currMeme.lines.length; i++) {
        var currLine = currMeme.lines[i]
        gCtx.font = `${currLine.font}px ${currLine.fontFam}`
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = currLine.stroke
        gCtx.fillStyle = currLine.fill
        gCtx.fillText(currLine.txt, currLine.x, currLine.y)
        gCtx.strokeText(currLine.txt, currLine.x, currLine.y)
        gCtx.stroke()
        if (i === currMeme.selectedLineIdx && !isDownlad) {
            gCtx.strokeStyle = 'white'
            var lineHeight = currLine.font * 1.2
            var textWidth = gCtx.measureText(currLine.txt).width
            gCtx.strokeRect(currLine.x, currLine.y, textWidth, lineHeight);
            gCtx.textAlign = 'left';
            gCtx.textBaseline = 'top';
        }
    }
}
function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
    renderMeme()
}
function setImg(imgId) {
    gMeme.selectedImgId = imgId
    document.querySelector('.gallery-layout').style.display = 'none'
    document.querySelector('.canvas-layout').style.display = 'grid'
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
    if (gMeme.currSticker) {
        var currSticker = getStickerLocation()
        currSticker.size += num * 5
    } else {
        var currLine = gMeme.lines[gMeme.selectedLineIdx]
        currLine.font += num
    }
    renderMeme()
}
function switchLine() {
    if (gMeme.selectedLineIdx < gMeme.lines.length - 1) {
        gMeme.selectedLineIdx++
    } else {
        gMeme.selectedLineIdx = 0
    }
    syncInputBoxes()
    renderMeme()
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
function resetLinesAndSticker() {
    setCurrSticker()
    gMeme.lines = [{
        txt: 'Enter your text here',
        align: 'left',
        fill: '#ffffff',
        stroke: 'black',
        font: 78,
        x: 50,
        y: 150,
        fontFam: 'Impact',
        isDrag: false
    }, {
        txt: 'Enter your text here',
        align: 'left',
        fill: '#ffffff',
        stroke: 'black',
        font: 78,
        x: 50,
        y: 600,
        fontFam: 'Impact',
        isDrag: false
    }
    ]
}
function isTextBoxClicked(clickedPos) {
    clickedPos.y = clickedPos.y * 1.66
    var pos = gMeme
    for (var i = 0; i < pos.lines.length; i++) {
        var currLine = pos.lines[i]
        var textWidth = 380
        var textHeight = currLine.font * 1.2
        console.log('currLine.x: ', currLine.x, currLine.y, clickedPos)
        if ((currLine.x <= clickedPos.x && currLine.x + textWidth >= clickedPos.x) && (currLine.y + textHeight >= clickedPos.y && currLine.y <= clickedPos.y)) {
            setDraggedLineIdx(i)
            gMeme.selectedLineIdx = i
            renderMeme()
            return true
        }
    }
    return false
}
function changeTextLocation(x, y, lineIdx) {
    var currLine = gMeme.lines[lineIdx]
    currLine.x = x
    currLine.y = y
}
function setLineIsDrag(isDrag = false, lineIdx) {
    gMeme.lines[lineIdx].isDrag = isDrag
}