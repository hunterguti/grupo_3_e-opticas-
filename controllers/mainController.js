const fs = require('fs');
const path = require('path');


const controller = {
    index: (req, res) => {
        res.render('index', {title: 'Optica DH'})
    },
}

module.exports = controller