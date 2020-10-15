const express = require('express');
const {check} = require('express-validator');

const User = require('../controllers/user');
const validate = require('../middlewares/validate');

const router = express.Router();


//INDEX
router.get('/', User.index);

module.exports = router;