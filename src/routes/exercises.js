// Import express utilities
const { Router, reponse } = require("express");
const router = Router();

router.get("/average", (req, res) => {
  const { a, b } = req.body;
  class Challenge {
    average(a = 0, b = 0) {
      try {
        const response = a + b / 2;
        return response;
      } catch (e) {
        throw new TypeError("Ha ocurrido un error");
      }
    }
  }
  const challenge = new Challenge();
  res.json(challenge.average(a, b));
});

module.exports = router;
