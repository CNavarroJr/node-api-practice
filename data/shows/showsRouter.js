const express = require("express");
const showsModel = require("../helpers/showsModel")   // This might have to be ../helpers/showsModel?

const router = express.Router();

//------------------------------------------------------//
// CREATE - .PUT
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
// UPDATE - .PATCH


//------------------------------------------------------//
// DELETE - .DELETE


//------------------------------------------------------//
// getShowsCharacters - .PUT


module.exports = router;      // this export is grabed from the from the express.Router() variable that we created




