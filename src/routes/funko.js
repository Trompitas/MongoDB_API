const express = require("express");
const { route } = require("express/lib/router");
const { text } = require("figlet");
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

/*router.get("/funkos/:name", (req, res) => {
  const { name } = req.params;
  funkoschema
    .find({ name })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});*/

router.get("/funkos/"+findTask(text), (req, res) => {
  const findTask = async (text) => {
    const search = new RegExp(text, "i");
    const tasks = await funkoschema.find({
      $or: [{ name: search }],
    }).lean();
    //console.log(JSON.stringify(task, null, 2));
    //console.log(tasks[0]);
    //console.table(Object.entries(tasks[0]));
  
    if (tasks.length === 0) {
      console.log("No funkos Found");
      await connection.close();
      process.exit(0);
    }
  
    console.table(
      tasks.map((task) => ({
        _id: task._id.toString(),
        name: task.name,
        price: task.price,
        material: task.material,
        stock: task.stock,
        coleccion: task.coleccion,
        funkoImage: task.funkoImage,
      }))
    );
    console.log(`${tasks.length} matches`);
    await connection.close();
    process.exit(0);
  };
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
