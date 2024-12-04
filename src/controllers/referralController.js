const redisClient = require('../services/redisClient');

// List all referrals
const listReferrals = async (req, res) => {
    const keys = await redisClient.keys('tenantReferral:*');
    const referrals = await Promise.all(keys.map(async key => ({
        key,
        details: await redisClient.hGetAll(key)
    })));
    res.render('index', { referrals });
};

// Render create form
const renderCreateForm = (req, res) => {
    res.render('create');
};

// Create referral
const createReferral = async (req, res) => {
    const { referrerTenantID, referredTenantID, reward, status } = req.body;
    const key = `tenantReferral:${referrerTenantID}`;
    await redisClient.hSet(key, {
        referredTenantID,
        reward,
        status
    });
    res.redirect('/');
};

// Render update form
const renderUpdateForm = async (req, res) => {
    const key = req.params.id;
    const details = await redisClient.hGetAll(key);
    res.render('update', { key, details });
};

// Update referral
const updateReferral = async (req, res) => {
    const key = req.params.id;
    const { referredTenantID, reward, status } = req.body;
    await redisClient.hSet(key, {
        referredTenantID,
        reward,
        status
    });
    res.redirect('/');
};

// Delete referral
const deleteReferral = async (req, res) => {
    const key = req.params.id;
    await redisClient.del(key);
    res.redirect('/');
};

module.exports = {
    listReferrals,
    renderCreateForm,
    createReferral,
    renderUpdateForm,
    updateReferral,
    deleteReferral
};
