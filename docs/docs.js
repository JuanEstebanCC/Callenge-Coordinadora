const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./JuanEstebanCC-Challenge_Coordinadora-1.0.0-resolved");

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerDocument));

module.exports = router;
