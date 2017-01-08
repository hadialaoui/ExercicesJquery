//  Chemin relatif : reponses/script-04.js
//  Chemin relatif : files/user.json

$.getJSON("files/users.json").then((users) => {
        let table= $("<table border='1'>")
        var
            rows =users.map(u => {return $(`
          <tr>
          <td> ${u.email}</td>
          <td> ${u.token}</td>
          </tr>
        `)})
    console.log(rows)
    table.append(rows)
    $('#ce').append(table)

       })









