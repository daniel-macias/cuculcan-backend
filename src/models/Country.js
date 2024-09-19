const mongoose = require('mongoose');
const { Schema } = mongoose;

const countrySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  isoCode: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    length: 2
  },
  language: {
    type: String,
    required: true
  },
  currency: {
    type: String
  },
  population: {
    type: Number
  },
  capital: {
    type: String
  },
  area: { // in square kilometers
    type: Number
  },
  provinces: [{
    type: Schema.Types.ObjectId,
    ref: 'Province'
  }],
  flagUrl: {
    type: String
  },
  timeZone: {
    type: String
  },
  callingCode: {
    type: String
  },
  region: {
    type: String
  },
  subregion: {
    type: String
  },
  borders: [{ // ISO codes of neighboring countries
    type: String
  }]
});

const Country = mongoose.model('Country', countrySchema);
