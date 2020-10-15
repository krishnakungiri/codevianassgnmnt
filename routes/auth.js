const express = require('express');
const {check} = require('express-validator');

const Auth = require('../controllers/auth');
const validate = require('../middlewares/validate');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: "You are in the Auth Endpoint. Register or Login to test Authentication."});
});

router.post('/register', [
    check('fullname').not().isEmpty().withMessage('Your full name is required'),
    check('email').isEmail().withMessage('Enter a valid email address'),
    check('password').not().isEmpty().isLength({min: 6}).withMessage('Must be at least 6 chars long'),
    check('phone').not().isEmpty().withMessage('Your phone number is required'),
    check('address').not().isEmpty().withMessage('Your address is required')
], validate, Auth.register);

router.post("/login", [
    check('email').isEmail().withMessage('Enter a valid email address'),
    check('password').not().isEmpty(),
], validate, Auth.login);


//EMAIL Verification
router.get('/verify/:token', Auth.verify);
router.post('/resend', Auth.resendToken);

module.exports = router;