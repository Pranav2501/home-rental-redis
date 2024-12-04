const redisClient = require('../services/redisClient');

// List all active leases
const listLeases = async (req, res) => {
    const keys = await redisClient.keys('activeLease:*');
    const leases = await Promise.all(keys.map(async key => {
        const leasesForTenant = await redisClient.zRangeWithScores(key, 0, -1);
        return {
            key,
            leases: leasesForTenant.map(lease => ({
                propertyID: lease.value,
                leaseEndDate: new Date(lease.score * 1000).toLocaleDateString(),
            })),
        };
    }));
    res.render('leases', { leases });
};

// Render form to add a new lease
const renderCreateLeaseForm = (req, res) => {
    res.render('createLease');
};

// Add a new lease
const createLease = async (req, res) => {
    const { tenantID, propertyID, leaseEndDate } = req.body;
    const timestamp = Math.floor(new Date(leaseEndDate).getTime() / 1000); // Convert to Unix timestamp
    const key = `activeLease:${tenantID}`;
    await redisClient.zAdd(key, { score: timestamp, value: propertyID });
    res.redirect('/leases');
};

// Render form to update a lease
const renderUpdateLeaseForm = async (req, res) => {
    const { tenantID, propertyID } = req.params;
    const key = `activeLease:${tenantID}`;
    const score = await redisClient.zScore(key, propertyID);
    res.render('updateLease', {
        tenantID,
        propertyID,
        leaseEndDate: new Date(score * 1000).toISOString().split('T')[0], // Convert to yyyy-mm-dd
    });
};

// Update lease end date
const updateLease = async (req, res) => {
    const { tenantID, propertyID } = req.params;
    const { leaseEndDate } = req.body;
    const timestamp = Math.floor(new Date(leaseEndDate).getTime() / 1000);
    const key = `activeLease:${tenantID}`;
    await redisClient.zAdd(key, { score: timestamp, value: propertyID });
    res.redirect('/leases');
};

// Delete a lease
const deleteLease = async (req, res) => {
    const { tenantID, propertyID } = req.params;
    const key = `activeLease:${tenantID}`;
    await redisClient.zRem(key, propertyID);
    res.redirect('/leases');
};

module.exports = {
    listLeases,
    renderCreateLeaseForm,
    createLease,
    renderUpdateLeaseForm,
    updateLease,
    deleteLease,
};
