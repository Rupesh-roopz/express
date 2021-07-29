const express = require('express');
const router = express.Router();

router
    .route('/login/:id="24"')
    .get((req, res) => {
        console.log(req.params.id)
    })
    .post((req, res) => {
        console.log("post //login")
    })

router
    .route('/signup')
    .get((req, res) => {
        console.log("get //signup")
    })
    .post((req, res) => {
        console.log("post //signup")
    })

module.exports = router;