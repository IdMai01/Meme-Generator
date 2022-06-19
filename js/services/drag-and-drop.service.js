var gStartPos

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}
function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}
function onMove(ev) {
    var sticker = getStickerLocation()
    if (sticker.isDrag) {
        const pos = getEvPos(ev)
        sticker.y += pos.y - gStartPos.y
        sticker.x += pos.x - gStartPos.x
        gStartPos = pos
        renderMeme()
    }
}
function onUp() {
    setStickerDrag(false)
    document.body.style.cursor = 'grab'
}
function onDown(ev) {
    const pos = getEvPos(ev)
    if (!isStickerClicked(pos)) return
    setStickerDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'

} function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
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
    const pos = getStickerLocation()
    return (pos.x - pos.size / 4 <= clickedPos.x && pos.x + pos.size / 4 >= clickedPos.x) && (pos.y - pos.size / 2 <= clickedPos.y && pos.y + pos.size / 2 >= clickedPos.y)
}

