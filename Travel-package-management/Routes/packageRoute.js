const express = require("express")

const packageController = require("../controllers/packageController")

const router = express.Router()

router.post('/createPkg' , packageController.createPkg)

router.get('/getAllPackage',packageController.getAllPackages)

router.get('/byId/:ID' , packageController.getById)

router.patch('/updatePkg/:ID' , packageController.updatePkg)

router.delete('/deletePkg/:ID', packageController.deletePkg)

router.get('/location/search', packageController.searchByLocation)



// http://localhost/package/getAllPackage

module.exports = router