const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./JuanEstebanCC-Geek_Cosmetics-1.0.0-resolved.json");

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerDocument));

module.exports = router;
