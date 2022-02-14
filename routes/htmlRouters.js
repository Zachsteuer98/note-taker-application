const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    console.log('222')
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

router.get('*', (req, res) => {
    console.log('111')
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = router