var express = require('express')
var app = express()
var MongoClient = require("mongodb").MongoClient;
var MongoObjectID = require("mongodb").ObjectID;


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
             
                res.send(result);
            
                db.close();
                }
         
             
   

 )}
});
})


app.listen(3291, function () {
    console.log(__dirname)
    console.log('Example app listening on port 3291!')
})
   
