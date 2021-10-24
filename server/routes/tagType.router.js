const express = require('express');
const pool = require('../modules/pool.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM tag_types ORDER BY "type" ASC;`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {
    console.log(req.body);
    let queryText = `INSERT INTO "tag_types" ("type") VALUES ($1);`
    pool.query(queryText, [req.body.type])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
})

router.put('/', (req, res) => {
    let queryText = `UPDATE "tag_types" SET "type" = $1 WHERE "id" = $2;`
    pool.query(queryText, [req.body.type, req.body.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
})

router.delete('/:id', (req, res) => {
    let queryText = `DELETE FROM "tag_types" WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
})

module.exports = router;