const router = require('express').Router();
const UserController = require('../controllers/user')

router.get('/', (req, res) => {
    res.send('API connected, current time: ' + Date.now());
})

// user routes
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/users', UserController.getUsers)

// article routes


module.exports = router