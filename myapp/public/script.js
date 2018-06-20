$.ajax({
    type: "GET",
    url: "http://localhost:3291/database",
    // dataType: "json",
    success: function (datas) {
        // to do : ajout d'une boucle pour le cas d'ajout de donné dans la base de donné
 
console.log(datas)

 for (var  i = 0 ; i < datas.length; i++){

    $("#donnee").append( "<p class='lead'> Prénom : "+datas[i].name+" </p>" )
    $("#donnee").append( "<p class='lead'> Genre: "+datas[i].genre+"</p>" )

 }  

   
    }
})

$(function () {
$('#submit').click(function(){

    var name = $('#prenom').val();
    var genre = $('#genre').val();

    var url='http://localhost:3291/addition';

     $.post(url, { name: name, genre: genre }, function(data){

  $("#rajout").append("<p class='display-3'> Addition :" + prenom + "</p>");
   console.log(prenom)
     });

    });
});