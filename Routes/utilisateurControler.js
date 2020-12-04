//import
let models = require('../models');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');


module.export ={
    inscription: function(req,res){
    let mail = req.body.email;
    let tel = req.body.tel;
    let adresse = req.body.adresse;
    let cp = req.body.cp;
    let ville =req.body.ville;
    
    let mdp =req.body.mdp;

    if(mail == null || tel == null || adresse == null || cp == null || ville == null || mdp == null ) {
        return res.status(400).json({'error':'missing parameters'});
    }

    //verify mail regex password etc

    models.Utilisateur.findOne({
        attributes:['mail'],
        where:{mail:mail}
    })
    .then(function(UtilisateurFound){
        if(!utilisateurFound){
            bcrypt.hash(mdp,5 , function(err,bcryptMdp){
                var newUtilisateur = models.Utilisateur.create({
                    tel : tel,
                    adresse : adresse,
                    cp : cp,
                    ville : ville,
                    mail : mail,
                    mdp : bcryptMdp
                })
                .then(function(newUtilisateur){
                    return res.status(201).json({
                        'utilisateurId':newUtilisateur.idUtilisateur
                    })
                })
                .catch(function(err){
                    return res.status(500).json({'error': 'cannot add user'})
                })
            })
        } else{
            return res.status(500).json({'error': 'cannot add user'})
        }
    })
    .catch(function(err){
        return res.status(500).json({'error': 'unable to verify user'});
    });

},

connexion:function(req,res){
//a remplire

}

}