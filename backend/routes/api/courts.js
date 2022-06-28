const express = require('express');
const router = express.Router();
const db = require('../../db/models')
const asyncHandler = require('express-async-handler');
const { response } = require('express');
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
router.post('/create', asyncHandler(async(req,res) => {
    const {userId, description, address, city, state, country, name, price} = req.body
    const addCourt = await db.Court.create({
        userId,
        description,
        address,
        city,
        state,
        country,
        name,
        price,
    });
    return res.json(addCourt)
}));

// editing a court
router.put('/:id(\\d+)', asyncHandler(async function (req, res) {
    const court = await db.Court.findByPk(req.body.id);
    const {userId, description, address, city, state, country, name, price} = req.body
    const editedCourt = await court.update(req.body)
    return res.json(editedCourt)
})
);

// deleting a court
router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
    const court = await db.Court.findByPk(req.params.id);
    await court.destroy();
    return res.json({ id: court.id })
}));




module.exports = router;
