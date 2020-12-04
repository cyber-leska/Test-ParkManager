//import
let express = require('express');
let bodyParser = require('body-parser');
let apiRouters = require('./apiRouter').router;
//instantiation du serveur
let server =express();

//body parser paramettre
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());


//parametre routes
server.get('/', function (req,res){
    res.setHeader('Content-Type','text/html')
    res.status(200).send('<h1>Bienvenue sur ParkManage corp</h1>')
});

server.use('/index/',apiRouters);

server.listen(8080, function(){ 
    console.log('Server en ecoute')
});