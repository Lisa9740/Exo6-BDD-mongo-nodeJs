$.ajax({
    type: "GET",
    url: "http://localhost:3291/database",
    // dataType: "json",
    success: function (datas) {
        
   //  var donnees = JSON.parse(datas);
    //  var donnee=JSON.stringify(datas)
console.log(datas)

 
        $("div").append( "<p> affiche ici :"+datas[0].name+"</p>" )
  
    

   
    }
})