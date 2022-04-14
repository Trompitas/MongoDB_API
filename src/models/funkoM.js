const mongoose = require("mongoose");

const funkoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    requiered: true,
  },
  material: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  coleccion: {
    type: String,
    required: true,
  },
  funkoImage: {
    type: String,
    required: true,
  },
},
  {

    timestamps: true,
    versionKey: false,

  }

);

module.exports = mongoose.model('Funko', funkoSchema);const mongoose = require("mongoose");

const funkoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    requiered: true,
  },
  material: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  coleccion: {
    type: String,
    required: true,
  },
  funkoImage: {
    type: String,
    required: true,
  },
},
  {

    timestamps: true,
    versionKey: false,

  }

);

module.exports = mongoose.model('Funko', funkoSchema);
