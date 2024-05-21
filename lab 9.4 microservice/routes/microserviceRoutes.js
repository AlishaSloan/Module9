const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/microserviceController');


router.get('/quotes', (req, res) => {
    Controllers.getQuotes(req, res);
})

router.put('/quotes/:id',  (req, res) =>{
    Controllers.updateQuotes(req, res);
})


module.exports = router;