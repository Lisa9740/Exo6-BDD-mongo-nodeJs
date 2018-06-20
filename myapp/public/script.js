$.ajax({
    type: "GET",
    url: "http://localhost:3291/database",
    // dataType: "json",
    success: function (datas) {
        // to do : ajout d'une boucle pour le cas d'ajout de donné dans la base de donné
 
console.log(datas)

 
        $("#donnee").append( "<p class='lead'> Prénom : "+datas[0].name+" </p>" )
        $("#donnee").append( "<p class='lead'> Genre: "+datas[0].genre+"</p>" )
    

   
    }
})