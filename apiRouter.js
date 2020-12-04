//import
let express = require('express');
let utilisateursControler = require('./Routes/utilisateurControler');

//router
exports.router= (function(){

let apiRouter= express.Router();

//route utilisateurs
apiRouter.route('/utilisateurs/inscription/').post(utilisateursControler.inscription);
apiRouter.route('/utilisateurs/connexion/').post(utilisateursControler.connexion);
 
return apiRouter
}) ();