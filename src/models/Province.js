const mongoose = require('mongoose');
const { Schema } = mongoose;

const provinceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  localName: {
    type: String
  },
  isoCode: { // ISO code if applicable
    type: String,
    unique: true,
    uppercase: true
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: 'Country',
    required: true
  },
  municipalities: [{
    type: Schema.Types.ObjectId,
    ref: 'Municipality'
  }],
  capital: { 
    type: String
  },
  population: {
    type: Number
  },
  area: { // Area in square kilometers
    type: Number
  },
  mapUrl: { // URL to a map or relevant geographic image of the province
    type: String
  }
});

const Province = mongoose.model('Province', provinceSchema);
