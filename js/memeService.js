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
