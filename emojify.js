window.emojify = {};
emojify.list = [
    {
        symbol:/:\)/g,
        imgPath:'./smiling_face.png'
    },
    {
        symbol:/&lt;3/g,
        imgPath:'./pink_heart.png'

    }
];
emojify.add = function (symbolRegex,imgPath){
    var emojiObj = {symbol:symbolRegex,imgPath:imgPath};
    emojify.list.push(emojiObj);
};
emojify.process = function (value){
    var parVal = value;
    var imgEle = '';


    emojify.list.forEach(function(item){
        imgEle = '<img src="' + item.imgPath + '" class="inline-emoji"/>'
         parVal = parVal.replace(item.symbol,imgEle);
    })

    return parVal;
};
