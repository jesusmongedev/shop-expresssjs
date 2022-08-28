const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('/views/shop.html', {root: '.'});
});

module.exports = router;
