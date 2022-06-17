'use strict'

function renderTags() {
    var tags = ['movies', 'introduction', 'trump', 'funny', 'dogs', 'baby', 'dog', 'cat', 'explaining', 'shocked'
        , 'gay', 'listening', 'laugh', 'toy story', 'confused', 'putin']
    var strHtml = ''
    for (var i = 0; i < tags.length; i++) {
        strHtml += `<option value='${tags[i]}'></option>`
    }
    var elDataList = document.querySelector('.filter-by-tags')
    elDataList.innerHTML = strHtml
}

function FilterByTag(tag) {
    init()
    var images = getImages()
    var filteredImages = []
    for (var i = 0; i < images.length; i++) {
        var currImage = images[i]
        for (var j = 0; j < currImage.keywords.length; j++) {
            if (currImage.keywords[j] === tag) {
                filteredImages.unshift(currImage)
            }
        }
    }
    renderGallery(filteredImages)
}
