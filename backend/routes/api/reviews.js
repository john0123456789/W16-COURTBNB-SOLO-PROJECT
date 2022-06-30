const express = require('express');
const router = express.Router();
const db = require('../../db/models')
const asyncHandler = require('express-async-handler');
const { response } = require('express');

// getting reviews
router.get('/court/:id', asyncHandler(async (req, res) => {
    const reviews = await db.Review.findAll({
        where: {
            courtId: req.params.id
        }
    });
    return res.json(reviews);
}));


// creating a review
router.post('/create/:id', asyncHandler(async (req,res) => {
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
