const express = require("express");
const userCtrl = require("../controllers/userCtrl");

const router = express.Router();

router.get("/", userCtrl.listUser);
router.post("/", userCtrl.createUser);
router.get("/:id", userCtrl.showUser);
router.put("/:id", userCtrl.updateUser);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;
