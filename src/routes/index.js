const { Router } = require("express");
const router = Router();

const {
 setTemas,
 getCategorias
  // getUserById,
  // insertUser,
  // deleteUser,updateUser
} = require("../controllers/indexController");

router.get("/get_temas", setTemas);
router.get('/get_categorias',getCategorias);
// router.post("/getuserbyid/:id", getUserById);
// router.post("/insertUser", insertUser);
// router.post("/update/:id", updateUser);
// router.post("/delete/:id", deleteUser);

module.exports = router;
