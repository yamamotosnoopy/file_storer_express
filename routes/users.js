const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('User home page'));
router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    res.send('User ID: ' + userId);
});

module.exports = router;