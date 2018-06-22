$.ajax({
    type: "GET",
    url: "http://localhost:5993/database",
    // dataType: "json",
    success: function (datas) {
        console.log(datas)

        for (var i = 0; i < datas.length; i++) {
            $("#donnee").append("<p class='lead'> id: " + datas[i]._id + "</p><p class='lead'> Prénom : " + datas[i].name + " </p><p class='lead'> Genre: " + datas[i].genre + "</p> <hr>")

            $("#editiondonnee").append("<p class='lead'> id: " + datas[i]._id + "</p><p class='lead'> Prénom : " + datas[i].name + " </p><p class='lead'> Genre: " + datas[i].genre + "</p> </div>  <hr>")

            $(".prenom2").append("<option value='"+ datas[i].name + "'>"+ datas[i].name +"  genre : "+ datas[i].genre +"</option>")


        }


    }
})

$(function () {
    $('#submit').click(function () {

        var name = $('#prenom').val();
        var genre = $('#genre').val();
        var url = 'http://localhost:5993/addition';

        $.post(url, { name: name, genre: genre }, function (data) {



        });
    })
});
// a revoir pour supprimer les entrées 
$(function () {
    $('#delete').click(function () {

      var name = $('.prenom').val();
        var genre = $('#genre').val();
        var url = 'http://localhost:5993/delete';

        $.post(url, { name: name, genre: genre }, function (data) {



        });
    })
});

$(function () {
    $('#submitmodif').click(function () {
        var name = $('.prenom2').val();

        var modifname = $('#prenommodif').val();

        var url = 'http://localhost:5993/personne/1';

        $.post(url, { name: name, modifname: modifname }, function (data) {

            //   $("#rajout").append("<p class='display-3'> Addition :" + prenom + "</p>");
            //    console.log(prenom)
        });

    });
});