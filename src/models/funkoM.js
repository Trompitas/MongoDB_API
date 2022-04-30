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
    required: false,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XzDPdHKQX6SG51V9ZZxJ8cu7ERoT8RPUQ&usqp=CAU',
  }
},
  {

    timestamps: true,
    versionKey: false,

  }

);

module.exports = model('Funko', funkoSchema);
