const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// Test Route
// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
