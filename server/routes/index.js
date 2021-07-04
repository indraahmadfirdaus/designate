const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('API connected, current time: ' + Date.now());
})


module.exports = router