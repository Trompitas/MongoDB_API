const mongoose = require("mongoose");

const funkoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    versionKey: false,
    timestamps: true,
  },
  price: {
    type: Number,
    requiered: true,
    versionKey: false,
    timestamps: true,
  },
  material:{
    type: String,
    required: true,
    versionKey: false,
    timestamps: true,
  },
  stock: {
    type: Number,
    required: true,
    versionKey: false,
    timestamps: true,
  },
  coleccion: {
    type: String,
    required: true,
    versionKey: false,
    timestamps: true,
  },
  funkoImage:{
    type: String,
    required: true,
    versionKey: false,
    timestamps: true,
  }
});

module.exports = mongoose.model('Funko', funkoSchema);
