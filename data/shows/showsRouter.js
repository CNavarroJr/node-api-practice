const express = require("express");
const showsModel = require("../helpers/showsModel")   // This might have to be ../helpers/showsModel?

const router = express.Router();

//------------------------------------------------------//
// CREATE - .POST
router.post("/", (req, res) => {
  const showInfo = req.body               // this is to add the required body in this case is showInfo
  showsModel.insert(showInfo)             // This come from the folder showsModel that we have where we pull the .insert 
  .then(() => {
    res.status(201).json({message: "Your show was created"})
  })
  .catch((error) => {
    console.log(error)
    res.status(500).json({errorMessage: "Show was not created"})
  })
})

//------------------------------------------------------//
// READ - .GET
router.get("/", (req, res) => {
  showsModel.get(req.id)
  .then(data => {           // You can call this parameter what ever you want just make sure to reference it when you call the respomce 200 
    res.status(200).json(data)
  })
  .catch((error) => {
    console.log(error)
    res.status(500).json({message: "Error retrieving show"})
  });
});

//------------------------------------------------------//
// UPDATE - .PUT
router.put("/:id", (req, res) => {
  const showInfo = req.boy;
  const { id } = req.params;

  showsModel.update(id, showInfo)       // Remember to pass in the parameters 
  .then(data => {
    if (data) {
      res.status(200).json({message: "The show was updated"})
    } else {
      res.status(404).json({message: "The show could not be updated, it was not found"})
    }
  })
  .catch((error) => {
    console.log(error)
    res.status(500).json({errorMessage: "Something went wrong"})
  })
 })

//------------------------------------------------------//
// DELETE - .DELETE
router.delete("/:id", (req, res) => {
  showsModel.remove(req.params.id)      // This is to require the id so it can be deleted you can also use de stucturing see .put for reference
  .then(data => {
    if (data > 0) {
      res.status(200).json({message: "The show has been deleted"})
    } else {
      res.status(404).json({message: "The show couldnt be deleted "})
    }
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({errorMessage: "Something went wrong"})
  })
})

//------------------------------------------------------//
// getShowsCharacters - .PUT
router.get("/:id/characters", (req, res) => {
  showsModel.getShowsCharacters(req.params.id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {
     console.log(error)
      res.status(500).json({errorMessage: "Error getting characters"})
    })
})

module.exports = router;      // this export is grabed from the from the express.Router() variable that we created




