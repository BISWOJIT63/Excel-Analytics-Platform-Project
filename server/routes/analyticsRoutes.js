const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/analytics', analyticsController.getAnalyticsData);
router.post('/analytics', analyticsController.createAnalyticsData);
router.put('/analytics/:id', analyticsController.updateAnalyticsData);
router.delete('/analytics/:id', analyticsController.deleteAnalyticsData);

module.exports = router;