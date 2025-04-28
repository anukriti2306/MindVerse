const router = require('express').Router();
const { matchUsersByProject } = require('../controllers/aiMatchController');

// Route to match users
router.post('/match-by-project', matchUsersByProject);

module.exports = router;
