const {response, request} = require('express');
const { leerDB } = require('../helpers/leerArchivo')

let contactsDB = leerDB();

const contactsGet = (req = request,res = response) => {
    let estatusHTTP = 200;
    const { phrase } = req.query;
    let contacts = contactsDB.sort(OrdenarArray);

        if( phrase && phrase.length > 0 ) {
            const contactsFilter = contacts.filter((item) => {
                if( item.name.toLowerCase().match(phrase.toLowerCase()) ){
                    return item;
                }
            });
    
            contacts = contactsFilter.sort(OrdenarArray);
        } 
        if( phrase && phrase.length === 0 ) {
            estatusHTTP = 400;
            contacts = {};
        }    

    res.status(estatusHTTP).json({
        contacts
    });
}

const contactGetByID = (req = request,res = response) => {
    const id = req.params.id;
    const contact = contactsDB.filter((item) => item.id === id);
    let statusHTTP = 200;
    if(contact.length === 0) {
        statusHTTP = 404;
    }
    res.status(statusHTTP).json({
        contacts: contact
    });
}


const contactsDelete = (req = request,res = response) => {
    const id = req.params.id;
    let statushttp = 204;
    let msg = '';
    const indice = contactsDB.findIndex((elemento, indice) => {
        if(elemento.id === id){
            return true;
        } else {
            return false
        }
    });
    
    if( indice < 0) {
        statushttp = 404;
        msg = `El registro con el ID ${ id } no existe.`;
    } else {
        contactsDB.splice(indice,1);
    }

    res.status(statushttp).json({
        id,
        msg
    });
}

const OrdenarArray = (nameA, nameB) => {
    return nameA.name.localeCompare(nameB.name, 'es', {ignorePunctuation: true});
}

module.exports = {
    contactsGet,
    contactsDelete,
    contactGetByID
}