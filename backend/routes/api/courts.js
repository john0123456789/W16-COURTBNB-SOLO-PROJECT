const express = require('express');
const router = express.Router();
const db = require('../../db/models')
const asyncHandler = require('express-async-handler');
// const { requireAuth } = require('../auth.js')
// const { check, validationResult } = require('express-validator');

// const reviewValidators = [
//     check('review')
//         .exists({ checkFalsy: true })
//         .withMessage('Please fill out review.'),
//     check('rating')
//         .exists({ checkFalsy: true })
//         .withMessage('Please select a rating.'),
// ];

// getting all courts
router.get('/', asyncHandler(async (req, res, next) => {
    const courts = await db.Court.findAll();
    return res.json(courts);
}));

// creating a court
router.post('/create', asyncHandler(async (req, res, next) => {
    const { userId, description, address, city, state, country, name, price, } = req.body

    const createCourt = await db.Court.create(req.body);
    const court = await db.Court.findByPK(court.id, {
    })
    return res.json(court)
}))

module.exports = router;
