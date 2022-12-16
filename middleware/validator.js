
const {check, validationResult} = require('express-validator');

exports.registerValidation =() =>[
    check('name', 'this fiel is required !').notEmpty(),
    check('email', 'this fiel should be valid !').isEmail(),
    check('email', 'this fiel is required !').notEmpty(),
    check('password', 'this fiel should be at least 8 carac !').isLength({min : 8}),
]

exports.validator = (req, res, next) =>{
    const errors = validationResult(req);
    errors.isEmpty() ? next() : res.status(400).send(errors.array())
}