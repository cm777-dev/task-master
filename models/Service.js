const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Home Repair',
      'Cleaning',
      'Moving',
      'Beauty',
      'Tech Support',
      'Events',
      'Teaching',
      'Health',
      'Auto Services',
      'Other'
    ]
  },
  description: {
    type: String,
    required: true
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  pricing: {
    type: {
      type: String,
      enum: ['fixed', 'hourly', 'quote'],
      required: true
    },
    amount: {
      type: Number,
      required: function() {
        return this.pricing.type !== 'quote';
      }
    }
  },
  location: {
    city: String,
    state: String,
    serviceArea: Number // radius in kilometers
  },
  availability: [{
    day: {
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    startTime: String,
    endTime: String
  }],
  images: [String],
  rating: {
    type: Number,
    default: 0
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for search functionality
serviceSchema.index({ title: 'text', description: 'text' });

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
