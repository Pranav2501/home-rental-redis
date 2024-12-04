const express = require('express');
const router = express.Router();
const referralController = require('../controllers/referralController');

// Routes
router.get('/', referralController.listReferrals);
router.get('/create', referralController.renderCreateForm);
router.post('/create', referralController.createReferral);
router.get('/update/:id', referralController.renderUpdateForm);
router.post('/update/:id', referralController.updateReferral);
router.post('/delete/:id', referralController.deleteReferral);

module.exports = router;
