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

// getting all reviews
router.get('/', asyncHandler(async (req, res, next) => {
    const reviews = await db.Review.findAll();
    return res.json(reviews);
}));

// getting a review
// router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
//     const review = await db.Review.findByPk(req.params.id);
//     return res.json(review)
// }));

// creating a review
router.post('/create', asyncHandler(async (req,res) => {
    const {userId, courtId, review, rating} = req.body
    const addReview = await db.Review.create({
       userId,
       courtId,
       review,
       rating,
    });
    return res.json(addReview)
}));

// editing a review
// router.put('/:id(\\d+)', asyncHandler(async function (req, res) {
//     const editReview = await db.Review.findByPk(req.body.id);
//     const {courtId, review, rating} = req.body
//     const editedReview = await editReview.update(req.body)
//     return res.json(editedReview)
// })
// );

// deleting a review
router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
    const review = await db.Review.findByPk(req.params.id);
    await review.destroy();
    return res.json({ id: review.id })
}));




module.exports = router;
