//  Chemin relatif : reponses/script-05.js

/*
var tr=$("table > tbody >tr");
$(tr).each(function (i,e) {
    console.log(e..not(':first').children('td').eq(1).text())
})
*/
var tr=$("table>tbody>tr");
total=0
for(var i=1;i<tr.length-1;i++){
    var prix=$(tr[i]).children('td').eq(1).text()
    var quantite=$(tr[i]).children('td').eq(2).text()
    console.log(prix*quantite)
    var st = parseFloat(prix )* parseFloat(quantite)
    total+=st
    $(tr[i]).children('td').eq(3).text(st.toFixed(2))
}

$(tr).last().children('td').eq(1).text(format(total))

function format(nb) {
    var nbre=(nb.toFixed(0)).toString()
    var rst=''
    var j=0
    for(i=nbre.length-1;i>=0;i--){
         j=j+1
       if(j%3==0) {
           rst+=nbre.charAt(i)
           rst = rst + ' '
       }else{
           rst+=nbre.charAt(i)
       }
    }
    rst=rst.split("").reverse().join("");

    return rst
}







