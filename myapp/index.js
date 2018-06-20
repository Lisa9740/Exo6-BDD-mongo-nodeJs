var express = require('express')
var app = express()
var MongoClient = require("mongodb").MongoClient;
var MongoObjectID = require("mongodb").ObjectID;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');

});

 app.get('/database', function (req, res) {
//récupération de la base de donnée 'alison' 
    MongoClient.connect("mongodb://127.0.0.1:27017/alison", function (error, db) {
        if (error) {
            throw error;

        } else {
            console.log("Connecté à la base de données 'alison'");
            var dbo = db.db("alison");

           dbo.collection("personnages").find().toArray(function (err, result) {
               if (err) throw err;           
             // envoie le résultat de ce qu'il y a dans la collection "personnages" 
                res.send(result);
            
                db.close();
                }
         
             
   

 )}
});
})

// rajouter une entrée dans la base de donnée
app.post('/addition', function(req, res) {
    var name = req.body.name; 
    var genre = req.body.genre;
    console.log(name) 

    
    MongoClient.connect("mongodb://127.0.0.1:27017/alison", function (error, db) {
        if (error) {
            throw error;

        } else {
            console.log("Connecté à la base de données 'alison'");
            var dbo = db.db("alison");

           dbo.collection("personnages").insertOne({name, genre}),function (err, result) {
               if (err) throw err;           
         
           
             res.send(result);
            
                db.close();
           
            }
    
    }
});
  
})
  

 
app.listen(3291, function () {
    console.log(__dirname)
    console.log('Example app listening on port 3291!')
})
   
