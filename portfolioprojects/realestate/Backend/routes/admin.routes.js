const express = require("express");
const adminController = require("../controller/admin.controller");

const router = express.Router();

router.post("/houses", adminController.createNewHouse);

router.get("/houses", adminController.getNewHouse);

router.delete("/houses/:houseId", adminController.deleteNewHouse);

router.get("/houses/:houseId", adminController.getHouseByID);

router.put("/houses/:houseId", adminController.updateHouse);

module.exports = router;
