const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');

// Maintenance Routes
router.get('/maintenance', maintenanceController.listMaintenanceRequests);
router.get('/maintenance/create', maintenanceController.renderCreateMaintenanceForm);
router.post('/maintenance/create', maintenanceController.createMaintenanceRequest);
router.get('/maintenance/update/:propertyID/:index', maintenanceController.renderUpdateMaintenanceForm);
router.post('/maintenance/update/:propertyID/:index', maintenanceController.updateMaintenanceRequest);
router.post('/maintenance/delete/:propertyID/:index', maintenanceController.deleteMaintenanceRequest);

module.exports = router;
