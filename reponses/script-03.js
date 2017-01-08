//  Chemin relatif : reponses/script-03.js
//  Chemin relatif : files/user.json
$("<pre>").appendTo("#ce");
//$("pre").addClass("language-javascript");
$("<code>").appendTo("#ce pre");

//loadCSS('/6_exerciceJQ/exercices_jquery/interface/css/prism.css');

$.getJSON('files/users.json', function(donnees) {
    $(donnees).each(function(i, e){
        $('#ce pre').append("<p>Email : "+e.email+"     Token : "+e.token+"</p>")
    })
});









