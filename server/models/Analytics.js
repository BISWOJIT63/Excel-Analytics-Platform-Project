import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
    metricName: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: [String],
        default: []
    }
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

export default Analytics;