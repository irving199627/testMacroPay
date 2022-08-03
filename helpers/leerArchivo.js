const fs = require('fs');

const archivo = './db/fakedatabase.js';

const leerDB = () => {
    if( !fs.existsSync(archivo) ) {
        return null;
    }
    

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = info.length === 0 ? 
                    {}: 
                    JSON.parse( info );
    
    return data;
}

module.exports = {
    leerDB
}