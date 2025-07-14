const exopress = require('express');
const router = exopress.Router();
const { register, login } = require('../controller/authController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;