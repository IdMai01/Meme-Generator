const memesSentences = [
    'I never eat falafel',
    'Stop Using i in for loops',
    'Armed in knowledge',
    'Js error "Unexpected String"',
    'One does not simply write js',
    'I`m a simple man i see vanilla JS, i click like!',
    'JS, HTML,CSS?? Even my momma can do that',
    'May the force be with you',
    'Doms Doms Every where',
    'I know JS',
    'JS Where everything is made up and the rules dont matter',
    'Not sure if im good at programming or good at googling',
    'But if we could',
    'JS what is this?',
    'Write hello world , add to cv 7 years experienced',
];
const STORAGE_KEY = 'memeDB'
function getRandomIntInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomTxt() {
    var randomTxtIdx = getRandomIntInt(0, memesSentences.length)
    return memesSentences[randomTxtIdx]
}
function getFontSize(txt) {
    var fontSize = (Math.round(750 / txt.length) + 1)
    return fontSize
}
function saveMeme(){
    saveToStorage(STORAGE_KEY, getMeme())
}