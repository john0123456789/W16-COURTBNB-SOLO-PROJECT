const express = require('express');
const router = express.Router();
const db = require('../../db/models')
const asyncHandler = require('express-async-handler');

// getting all courts
router.get('/', asyncHandler(async (req, res, next) => {
    const courts = await db.Court.findAll();
    return res.json(courts);
}));

// getting a court
// router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
//     const court = await db.Court.findByPk(req.params.id);
//     return res.json(court)
// }));

// creating a court
router.post('/create', asyncHandler(async (req,res) => {
    const {userId, url, description, address, city, state, country, name, price} = req.body
    const addCourt = await db.Court.create({
        userId,
        url,
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
    const {userId, url, description, address, city, state, country, name, price} = req.body
    const editedCourt = await court.update(req.body)
    return res.json(editedCourt)
})
);

// deleting a court
router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
    const court = await db.Court.findByPk(req.params.id);
    const allReviews = await db.Review.findAll({ where: { courtId: req.params.id } })
    for (let i = 0; i < allReviews.length; i++) {
        const reviews = allReviews[i]
        reviews.destroy()
    }
    await court.destroy();
    return res.json({ id: court.id })
}));




module.exports = router;
