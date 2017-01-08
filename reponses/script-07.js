//  Chemin relatif : reponses/script-08.js


$(document).on('keydown',function (event) {

    if(event.shiftKey)
    switch (event.which){
        case 37 :
            $(".box").css({left: '-=2'})
            break
        case 38 :
            $(".box").css({top: '-=2'})
            break
        case 39 :
            $(".box").css({left: '+=2'})
            break
        case 40 :
            $(".box").css({ top: '+=2'})
            break

    }

})










