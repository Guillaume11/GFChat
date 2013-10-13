if (!(this.envoyeur && this.envoyeur.length > 2 && this.envoyeur.length < 50)) {
    error('envoyeur', "Screen name must be between 2 and 50 characters");
}

if (!this.message || this.message.length < 1) {
    error('message', "Message is required");    
} else if (this.message.length > 100) {
    error('message', "Message cannot be more than 100 character");
}