const express = require('express');
const router = new express.Router();
const MenRanking = require('../model/athlete');

router.get("/", (req, res) => {
    res.send("this is farrukh feroz");
})

router.post("/ath", async (req, res) => {
    try {
        const addmen = new MenRanking(req.body);
        console.log(req.body);
        const add = await addmen.save();
        res.send(add);
    } catch (err) {
        res.send(err);
    }
})

router.get("/ath", async (req, res) => {
    try {
        const getath = await MenRanking.find({}).sort({ "ranking": 1 });
        console.log(getath);
        res.status(201).send(getath);
    } catch (err) {
        res.send(err);
    }
})

router.patch("/ath/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updath = await MenRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        console.log(updath);
        res.status(201).send(updath);
    } catch (err) {
        res.send(err);
    }
})

router.delete("/ath/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const dltath = await MenRanking.findByIdAndDelete(_id);
        console.log(dltath);
        res.status(201).send(dltath);
    } catch (err) {
        res.send(err);
    }
})


module.exports = router;