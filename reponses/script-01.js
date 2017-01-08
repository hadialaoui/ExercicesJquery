//  chemin relatif : reponses/script-01.js
// 

//Q1-Modification de la couleur du texte de la première div (rouge)
//$("#ce div").first().css('color','red');

//Q2-Cloner la première et l'ajouter à la fin de la liste des div
//var clonediv1=$("#ce div").first().clone();
//clonediv1.appendTo('#ce');


//Q3-Déplacer la dernière div et la mettre au début de la liste
//$("#ce div").first().appendTo("#ce");

//Q4-Créer une nouvelle div ...
//var div=$('<div>',{style:'color:blue'});
//$("#ce").append(div);
//div.text($('#ce div').length);

//Q5-Parcourir toutes les div et y ajouter un numéro d'ordre 1, 2, ...
/*$
("#ce div").each(function (i,e) {
    var txt=$(e).text()+" numero : "+(i+1);
    $(e).text(txt);
})
*/