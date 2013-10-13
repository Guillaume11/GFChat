$(document).ready(function() {
    dpd.messages.on('creer', function(message) {
        
    });
    dpd.messages.get(function(messages) {
        if(messages) {
            messages.forEach(function(m) {
                
            });
        }
    });
    $('#env-btn').click(envMessage);
    function renduMessage(message) {
        var $el = $('<p>');
        $el.append('<span>' + message.temps + ' - </span>');
        $el.append('<strong>' + message.envoyeur + ': </strong>');
        $el.append(message.message);
        $el.appentTo('#chat');
        var $el1 = $('<b>');
        $el1.append(message.envoyeur);
        $el1.appentTo('#nomu');
    }
    function envMessage() {
        var envoyeur = $('#nom').val();
        var message = $('#message').val();
        dpd.messages.post({
            envoyeur: envoyeur,
            message: message
        }), function(message, err) {
            if(err) {
                if(err.message) {
                    alert(err.message);
                } else if(err.erreurs) {
                    var erreurs = "";
                    if(err.erreurs.envoyeur) {
                        erreurs += err.erreurs.envoyeur + "\n";
                    }
                    if(err.erreurs.message) {
                        erreurs += err.erreurs.message + "\n";
                    }
                    alert(erreurs);
                }
            } else {
                $('#message').val('');
            }
        };
        return false;
    }
});