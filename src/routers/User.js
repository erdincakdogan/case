const router = require("express").Router();
const UserController = require("../controllers/UserControllers");

router.post("/register", UserController.create);
router.post("/login", UserController.login);


module.exports = router;