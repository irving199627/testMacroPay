
const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.contactsPath = '/api/contacts'

        // Middlewares 
        this.middlewares();
        // rutas
        this.routes();
    }

    middlewares() {
        // directorio público
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.contactsPath, require('../routes/contacts'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }

}

module.exports = Server;