const express = require("express");
const charactersModels = require("../helpers/charactersModel");

const router = express.Router();

//------------------------------------------------------//
// CREATE - .POST
router.post("/", (req, res) =>{
  const charactersInfo = req.body
  charactersModels.insert(charactersInfo)
    .then(() => {
      res.status(201).json({message: "Your character was created"})
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({errorMessage: "Character was not created"})
    })
})

//------------------------------------------------------//
// READ - .GET
router.get("/", (req, res) => {
  charactersModels.get(req.id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({errorMessage: "Could not get characters"})
    });
});

//------------------------------------------------------//
// UPDATE - .PUT
router.put("/:id", (req, res) => {
  const charactersInfo = req.body
  const {id} = req.params

  charactersModels.update(id, charactersInfo)
    .then(data => {
      if (data) {
        res.status(200).json({message: "Your charactes are updated"})
      } else {
        res.status(404).json({message: "Your characters cant be updated, it was not found"})
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({erroMessage: "Something went wrong"})
    });
});

//------------------------------------------------------//
// DELETE - .DELETE
router.delete("/:id", (req, res) => {
  charactersModels.remove(req.params.id)
    .then(data => {
      if (data > 0) {
        res.status(200).json({Message: "The character was deleted"})
      } else {
        res.status(404).json({ Message: "The character was not deleted =, it cant be found "})
      }
    })
    .catch(error => {
      res.status(500).json({ Message: "Something went wrong "})
    })
})


module.exports = router;