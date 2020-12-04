//import
let express = require('express');
let utilisateursControler = require('./Routes');

//router
exports.router= (function(){

    let apiRouter= express.Router();
    
    //route utilisateurs
     apiRouter.post('/users/inscription', function(req, res){
        userControler.inscription
        
      });
      apiRouter.post('/users/connexion', function(req, res){
        userControler.connexion
      });  

      apiRouter.get('/users/me', function(req, res){
        userControler.getUtilisateurProfil
      });
      apiRouter.put('/users/me', function(req, res){
        userControler.UpdateUtilisateurProfil
      });  

      //route clients
      apiRouter.post('/client/creation', function(req, res){
        clientControler.createClient
        
      });
  
      apiRouter.get('/client/me', function(req, res){
        clientControler.getClientProfil
      });

      //route entreprise
      apiRouter.post('/entreprise/creation', function(req, res){
        entepriseControler.createEntreprise
        
      });
  
      apiRouter.get('/entreprise/me', function(req, res){
        entrepriseControler.getEntrepriseProfil
      });

      //route etage
      apiRouter.post('/etage/creation', function(req, res){
        etageControler.createEtage
        
      });
  
      apiRouter.get('/etage/me', function(req, res){
        etageControler.getEtage
      });


      //route occupation
      apiRouter.post('/occupation/creation', function(req, res){
        occupationControler.createOccupation
        
      });
  
      apiRouter.get('/occupation/liberation', function(req, res){
        occupationControler.createLiberation
      });

      
      ;
      

      //parking 
      apiRouter.post('/Parking/creation', function(req, res){
        parkingControler.createParking
        
      });
  
      apiRouter.get('/Parking/voir', function(req, res){
        parkingControler.getParking
      });


      //placedispo
      apiRouter.post('/place/creation', function(req, res){
        parkingControler.createPlace
        
      });
  
      apiRouter.get('/place/voir', function(req, res){
        parkingControler.getPlace
      });

      apiRouter.get('/place/placeLibre', function(req, res){
        parkingControler.getplaceLibre
      });
      

      //Voiture
      apiRouter.post('/voiture/creation', function(req, res){
        parkingControler.createVoiture
        
      });
  
      apiRouter.get('/voiture/voir', function(req, res){
        parkingControler.getvoiture
      });
      
      apiRouter.get('/occupation/maVoiture', function(req, res){
        occupationControler.retrouverVoiture
      })

      

       
    //apiRouter.route('/users/inscription/').post(utilisateursControler.inscription);
    //apiRouter.route('/users/connexion/').post(utilisateursControler.connexion);
     
    return apiRouter
}) ();
