'use strict'
var gStartPos
var draggedLineIdx = 0

function setDraggedLineIdx(lineIdx) {
    draggedLineIdx = lineIdx
}
function addListeners() {
    addMouseListeners()
    addTouchListeners()
}
function addMouseListeners() {
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mouseup', onUp)
}
function onMove(ev) {
    var sticker = getStickerLocation()
    var meme = getMeme()
    var currLine = meme.lines[draggedLineIdx]
    if (sticker.isDrag) {
        const pos = getEvPos(ev)
        sticker.x += (pos.x - gStartPos.x)
        sticker.y += (pos.y- gStartPos.y)
        gStartPos = pos
        renderMeme()
    }
    if (currLine.isDrag) {
        const pos = getEvPos(ev)
        changeTextLocation((pos.x) - 40, (pos.y * 1.6), draggedLineIdx)
        gStartPos = pos
        renderMeme()
    }
}
function onUp() {
    setStickerDrag(false)
    setLineIsDrag(false, draggedLineIdx)
    document.body.style.cursor = 'auto'
}
function onDown(ev) {
    const pos = getEvPos(ev)
    if (isStickerClicked(pos)) {
        setStickerDrag(true)
        gStartPos = pos
        document.body.style.cursor = 'grabbing'
    }
    if (isTextBoxClicked(pos)) {
        setLineIsDrag(true, draggedLineIdx)
        var meme = getMeme()
        gStartPos = meme.lines[draggedLineIdx]
        document.body.style.cursor = 'grabbing'
    }
    else {
        return
    }

}
function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}
function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}
function isStickerClicked(clickedPos) {
    if (!getStickerStatus()) {
        return
    }
    const pos = getStickerLocation()
    return (pos.x - pos.size / 2 <= clickedPos.x && pos.x + pos.size / 2 >= clickedPos.x) && (pos.y - pos.size / 2 <= clickedPos.y && pos.y + pos.size / 2 >= clickedPos.y)
}

