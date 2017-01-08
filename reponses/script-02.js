//  chemin relatif : reponses/script-02.js


function animateIt(duration) {

    $('.box').first().delay().hide(duration);
    $('.box').each(function (i,e) {
        $(e).next().delay(duration*(i+1)).hide(duration);
    });

    setTimeout(function () {
        $('.box').first().delay().show(duration);
        $('.box').each(function (i,e) {
            $(e).next().delay(duration*(i+1)).show(duration);
            console.log("salam");
        });

    },$('.box').length*duration);

}



$('#container').on('click','.box',function () {
    animateIt(2000,this);

});












