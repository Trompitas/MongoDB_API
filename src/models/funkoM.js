const {Schema, model} = require("mongoose");

const funkoSchema = Schema({
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
    default: "https://imgur.com/t/thiscouldbeus/lm64owN",
  },
},
  {

    timestamps: true,
    versionKey: false,

  }

);

module.exports = model('Funko', funkoSchema);
