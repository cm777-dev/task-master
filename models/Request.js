const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'completed', 'cancelled'],
    default: 'pending'
  },
  description: {
    type: String,
    required: true
  },
  budget: {
    type: Number
  },
  preferredSchedule: {
    date: Date,
    timeSlot: String
  },
  location: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  attachments: [String],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
requestSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
