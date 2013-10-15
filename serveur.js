// Serveur de production
var deployd = require('deployd');

var serveur = deployd({
    port: process.env.PORT || 1359,
    env: 'development',
    db: {
        host: 'widmore.mongohq.com',
        port: 10000,
        name: 'gfchat',
        credentials: {
            username: 'Guillaume',
            password: 'diable11'
        }
    }
});

serveur.listen();

serveur.on('listening', function() {
    console.log("Le serveur est en écoute sur le port : " + process.env.PORT);
});

serveur.on('error', function(err) {
    console.error(err);
    process.nextTick(function() { // Donne au serveur une chance de retourner une erreur
        process.exit();
    });
});