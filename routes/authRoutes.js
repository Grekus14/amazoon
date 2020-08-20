const router = require('express').Router();
const passport = require('passport');

router.get('/test', (req, res) => {
	res.send(req.user);
});

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
	res.send('u good g');
});

module.exports = router;
