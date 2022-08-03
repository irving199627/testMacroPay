
const { Router } = require('express');
const { contactsGet, contactsDelete, contactGetByID } = require('../controllers/contacts');

const router = Router();

router.get('/', contactsGet);
router.get('/:id', contactGetByID);

router.delete('/:id', contactsDelete);

module.exports = router;