$.ajax({
    type: "GET",
    url: "http://localhost:3291/database",
    // dataType: "json",
    success: function (datas) {
        
   //  var donnees = JSON.parse(datas);
    //  var donnee=JSON.stringify(datas)
console.log(datas)

 
        $("#donnee").append( "<p class='lead'> Prénom : "+datas[0].name+" </p>" )
        $("#donnee").append( "<p class='lead'> Genre: "+datas[0].genre+"</p>" )
    

   
    }
})