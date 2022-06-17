'use strict'

function renderTags() {
    var tags = ['toy story', 'introduction', 'trump', 'funny', 'dogs', 'baby', 'dog', 'cat', 'explaining', 'shocked'
        , 'gay', 'listening', 'laugh', 'movies', 'confused', 'putin']
    var strHtml = ''
    for (var i = 0; i < tags.length; i++) {
        strHtml += `<option value='${tags[i]}'></option>`
    }
    var elDataList = document.querySelector('.filter-by-tags')
    elDataList.innerHTML = strHtml
}

function FilterByTag(tag){
    
}