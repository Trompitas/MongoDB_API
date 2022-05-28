const express = require("express");
const funkoschema = require("../models/funkoM");

const router = express.Router();

// create funko
router.post("/funkos", (req, res) => {
  const funko = funkoschema(req.body);

  funko
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all funkos
router.get("/funkos", (req, res) => {
  funkoschema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a funko
/*router.get("/funkos/:id", (req, res) => {
  const { id } = req.params;
  funkoschema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});*/

router.get("/funkos/:name", async(text,res) => {
  const search = new RegExp(text, "i");
  const task = await funkoschema
    .find({
      $or: [{ name: search }],
    }).lean()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));

  if(task.length === 0){
    res.json({message: "No such funko"})
  }

  tasks.map((data) => ({
    _id: task._id.toString(),
    name: task.name,
    price: task.price,
    material: task.material,
    stock: task.stock,
    coleccion: task.coleccion,
    funkoImage: task.funkoImage,
    des: task.des,
  }))
});

// delete a funko
router.delete("/funkos/:id", (req, res) => {
  const { id } = req.params;
  funkoschema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/funkos/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, material, stock, coleccion, funkoImage, des } = req.body;
  funkoschema
    .updateOne({ _id: id }, { $set: { name, price, material, stock, coleccion, funkoImage, des } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
