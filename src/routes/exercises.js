// Import express utilities
const { Router, reponse } = require("express");
const router = Router();

router.post("/average", (req, res) => {
  let { a, b } = req.body;
  a = Number(a);
  b = Number(b);
  try {
    class Challenge {
      average(a = 0, b = 0) {
        try {
          const response = (a + b) / 2;
          return response;
        } catch (e) {
          throw new TypeError("Ha ocurrido un error");
        }
      }
    }
    const challenge = new Challenge();
    res.json(challenge.average(a, b));
  } catch (e) {
    throw new TypeError("Ha ocurrido un error: ", e);
  }
});

router.post("/string", (req, res) => {
  const { string } = req.body;
  try {
    const manipulation = (str = "") => {
      if (str === "") return false;
      const splitString = str.trim().split("");
      if (splitString[splitString.length - 1] === "!") {
        splitString.pop();
        return splitString.join("");
      }
      return str;
    };
    res.json(manipulation(string));
  } catch (e) {
    throw new TypeError("Ha ocurrido un error: ", e);
  }
});

router.post("/sumArray", (req, res) => {
  const { array } = req.body;
  try {
    const sum = (arr = []) => {
      let sumPositives = 0;
      let sumTotal = 0;
      let sumPairs = 0;
      let sumOdds = 0;
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
          return "La matriz solo puede contener números";
        }
        if (Math.sign(arr[i]) === 1 && Number.isInteger(arr[i])) {
          sumPositives += arr[i];
        }
        sumTotal += arr[i];
        if (arr[i] % 2 === 0) {
          sumPairs += arr[i];
        } else {
          sumOdds += arr[i];
        }
      }
      return (arr = []
        ? 0
        : (obj = {
            "Suma de total": sumTotal,
            "Suma de los positivos y enteros": sumPositives,
            "Suma de los pares": sumPairs,
            "Suma de los impares": sumOdds,
          }));
    };
    res.json(sum(array));
  } catch (e) {
    throw new TypeError("Ha ocurrido un error: ", e);
  }
});

router.post("/transformArray", (req, res) => {
  const { array, order } = req.body;
  try {
    const transform = (arr = [[,]], order = "") => {
      let returnArray = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (typeof arr[i][j] === "number" && Number.isInteger(arr[i][j])) {
            returnArray.push(arr[i][j]);
          }
        }
      }
      return order === "ASC"
        ? returnArray.sort((a, b) => b - a)
        : order === "DESC"
        ? returnArray.sort((a, b) => a - b)
        : "No ingresaste un orden";
    };
    res.json(transform(array, order));
  } catch (e) {
    throw new TypeError("Ha ocurrido un error: ", e);
  }
});

router.post("/myCows", (req, res) => {
  try {
  } catch (e) {}
});

module.exports = router;
