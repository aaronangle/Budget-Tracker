const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/insertTransaction", ({ body }, res) => {
    Transaction.create(body).then(data => {
        res.json(data)
    })
})

router.get("/transactions", (req, res) => {
    Transaction.find({})
        .sort({ date: -1 })
        .then(data => {
            res.json(data)
        })
})

module.exports = router;