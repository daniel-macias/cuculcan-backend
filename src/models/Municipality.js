const mongoose = require('mongoose');
const { Schema } = mongoose;

const municipalitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  localName: { // Name in the local language or as locally referred
    type: String
  },
  isoCode: { // ISO code if applicable
    type: String,
    unique: true,
    uppercase: true
  },
  province: {
    type: Schema.Types.ObjectId,
    ref: 'Province',
    required: true
  },
  population: {
    type: Number
  },
  area: { // Area in square kilometers
    type: Number
  },
  mapUrl: { // URL to a map or relevant geographic image of the municipality
    type: String
  }
});

const Municipality = mongoose.model('Municipality', municipalitySchema);
