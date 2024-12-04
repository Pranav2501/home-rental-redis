const redisClient = require('../services/redisClient');

// List all maintenance requests
const listMaintenanceRequests = async (req, res) => {
    const keys = await redisClient.keys('maintenanceRequests:*');
    const maintenanceRequests = await Promise.all(keys.map(async key => {
        const requests = await redisClient.lRange(key, 0, -1);
        return {
            key,
            requests: requests.map(request => JSON.parse(request)),
        };
    }));
    res.render('maintenance', { maintenanceRequests });
};

// Render form to add a new maintenance request
const renderCreateMaintenanceForm = (req, res) => {
    res.render('createMaintenance');
};

// Add a new maintenance request
const createMaintenanceRequest = async (req, res) => {
    const { propertyID, tenantID, description, status } = req.body;
    const key = `maintenanceRequests:${propertyID}`;
    const request = JSON.stringify({ tenantID, description, status });
    await redisClient.rPush(key, request);
    res.redirect('/maintenance');
};

// Render form to update a maintenance request
const renderUpdateMaintenanceForm = async (req, res) => {
    const { propertyID, index } = req.params;
    const key = `maintenanceRequests:${propertyID}`;
    const request = await redisClient.lIndex(key, index);
    const parsedRequest = JSON.parse(request);
    res.render('updateMaintenance', { propertyID, index, request: parsedRequest });
};

// Update a maintenance request
const updateMaintenanceRequest = async (req, res) => {
    const { propertyID, index } = req.params;
    const { tenantID, description, status } = req.body;
    const key = `maintenanceRequests:${propertyID}`;
    const updatedRequest = JSON.stringify({ tenantID, description, status });
    await redisClient.lSet(key, index, updatedRequest);
    res.redirect('/maintenance');
};

// Delete a maintenance request
const deleteMaintenanceRequest = async (req, res) => {
    const { propertyID, index } = req.params;
    const key = `maintenanceRequests:${propertyID}`;
    await redisClient.lSet(key, index, '__deleted__'); // Mark as deleted
    await redisClient.lRem(key, 1, '__deleted__'); // Physically remove
    res.redirect('/maintenance');
};

module.exports = {
    listMaintenanceRequests,
    renderCreateMaintenanceForm,
    createMaintenanceRequest,
    renderUpdateMaintenanceForm,
    updateMaintenanceRequest,
    deleteMaintenanceRequest,
};
