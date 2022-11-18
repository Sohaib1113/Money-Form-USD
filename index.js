const con = require('./connection');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
const { getRandomValues } = require('crypto');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true }));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/HTMLcode.html');
});

app.post('/',function(req, res){
    var name = req.body.Send;
    var name = req.body.Recieve;
    var name = req.body.Sender;
    var name = req.body.Reciever;

    con.connect(function(error){
        if(error) throw error;

        var sql = "INSERT INTO paisa(Send, Recieve, Sender, Reciever)VALUES('"+Send+"','"+Recieve+"','"+Sender+"','"+Reciever+"')";
        con.query(sql,function(error, result){
            if(error) throw error;
            res.send('Successfull'+result.insertId);
        });

    });
});

app.listen(5000);