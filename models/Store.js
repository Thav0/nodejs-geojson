const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  storeId: {
    type: String,
    required: [true, 'Please add a store ID'],
    unique: true,
    trim: true,
    maxlength: [10, 'StoreID must be less than 10 chars']
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
    },
    coordinates: {
      type: [Array],
      index: '2dsphere',
    },
    formattedAddres: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

modules.exports = mongoose.model('Store', StoreSchema);