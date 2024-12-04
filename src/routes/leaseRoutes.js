const express = require('express');
const router = express.Router();
const leaseController = require('../controllers/leaseController');

// Routes for leases
router.get('/leases', leaseController.listLeases);
router.get('/leases/create', leaseController.renderCreateLeaseForm);
router.post('/leases/create', leaseController.createLease);
router.get('/leases/update/:tenantID/:propertyID', leaseController.renderUpdateLeaseForm);
router.post('/leases/update/:tenantID/:propertyID', leaseController.updateLease);
router.post('/leases/delete/:tenantID/:propertyID', leaseController.deleteLease);

module.exports = router;
