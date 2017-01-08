//  Chemin relatif : reponses/script-06.js
// String.fromCharCode() permet de récupérer le caractère à partir du code

//Question 1 et 2
/*
var cp=''
$('#f1').on('keypress',function (event) {
    cp += event.key
    $('#f2').val(cp)
})
*/
//Question 3
/*
var cp=''
$('#f1').on('keypress',function (event) {
    if(!isNaN(event.key)){
        cp += event.key
        $('#f2').val(cp)
    }
})
*/
//Question 4
var cp=''
$('#f1').on('keypress',function (event) {
    if(!isNaN(event.key)){
        cp += event.key
        if(cp.length%3==0)
        $('#f2').val(cp)
    }
})









