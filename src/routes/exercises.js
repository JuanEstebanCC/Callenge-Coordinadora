// Import express utilities
const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");

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
  } catch (e) {
    throw new TypeError("Ha ocurrido un error: ", e);
  }
});

router.get("/tracking", (req, res) => {
  try {
    const codigo = req.query.codigo;
    let tipo,
      guias,
      tracking,
      response = {};

    const consume = (codigo = "") => {
      codigo.length === 11
        ? (tipo = "guia")
        : codigo.length === 15 && codigo.startsWith(7)
        ? (tipo = "etiqueta")
        : "El código no es una guía o una etiqueta";
      fetch("https://api.coordinadora.com/cm-model-testing/api/v1/talentos/")
        .then((response) => response.json())
        .then(async (data) => {
          guias = data;
          fetch(
            "https://api.coordinadora.com/cm-model-testing/api/v1/talentos/checkpoint"
          )
            .then((response) => response.json())
            .then(async (data) => {
              const matchGuia = guias.data.guias.map((item) => {
                if (item.codigo_remision === codigo) {
                  return item;
                }
              });

              tracking = data;
              if (tipo === "guia") {
                let etiqueta1d = [];
                let allCheckpoints = [];

                matchGuia[0].unidades.map((e) => {
                  etiqueta1d.push(e.etiqueta1d);
                });

                for (let i = 0; i < etiqueta1d.length; i++) {
                  for (let j = 0; j < tracking.data.length; j++) {
                    if (tracking.data[j].etiqueta1d === etiqueta1d[i]) {
                      allCheckpoints.push(tracking.data[j]);
                    }
                  }
                }

                response = {
                  isError: false,
                  status: "success",
                  data: {
                    codigo_remision: matchGuia[0].codigo_remision,
                    nombre_destinatario: matchGuia[0].nombre_destinatario,
                    dir_destinatario: matchGuia[0].dir_destinatario,
                    unidades: [{ allCheckpoints }],
                  },
                };
              }
              else if (tipo === "etiqueta") {
                let codigo_remision, nombre_destinatario, dir_destinatario;
                let cantidad_checkpoints = 0;
                let etiqueta1d = [];
                let allCheckpoints = [];

                guias.data.guias.map((item) => {
                  item.unidades.map((e) => {
                    if (codigo === e.etiqueta1d) {
                      codigo_remision = item.codigo_remision;
                      nombre_destinatario = item.nombre_destinatario;
                      dir_destinatario = item.dir_destinatario;
                      etiqueta1d.push(e.etiqueta1d);
                    }
                  });
                });
                for (let i = 0; i < etiqueta1d.length; i++) {
                  for (let j = 0; j < tracking.data.length; j++) {
                    if (tracking.data[j].etiqueta1d === etiqueta1d[i]) {
                      allCheckpoints.push(tracking.data[j]);
                      cantidad_checkpoints += 1;
                    }
                  }
                }

                response = {
                  isError: false,
                  status: "success",
                  data: {
                    etiqueta: codigo,
                    informacion_guia: {
                      codigo_remision,
                      nombre_destinatario,
                      dir_destinatario,
                    },
                    cantidad_checkpoints,
                    tracking: allCheckpoints,
                  },
                };
              }else{
                res.json("Código no válido")
              }
              return response;
            })
            .then((response) => {
              res.json(response);
            });
        });
    };
    consume(codigo);
  } catch (e) {
    throw new TypeError("Ha ocurrido un error: ", e);
  }
});

router.post("/arrayScore", (req, res) => {
  try {
    const arr = req.query.array;
    let puntos = 0;
    const arrC = Object.values(arr)
      .filter((e) => e !== "'" && e !== "[" && e !== "]" && e !== ",")
      .map(Number);
    if (typeof arr === "string") {
      const score = (arrC = []) => {
        for (let i = 0; i < arrC.length; i++) {
          if (arrC[i] % 2 === 0) {
            puntos += 1;
          } else if (arrC[i] % 2 !== 0 && arrC[i] !== 5) {
            puntos += 3;
          } else if (arrC[i] === 5) {
            puntos += 5;
          } else {
            puntos += 0;
          }
        }
        return puntos;
      };
      res.json(score(arrC));
    } else {
      const score = (arr = []) => {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 2 === 0) {
            puntos += 1;
          } else if (arr[i] % 2 !== 0 && arr[i] !== 5) {
            puntos += 3;
          } else if (arr[i] === 5) {
            puntos += 5;
          } else {
            puntos += 0;
          }
        }
        return puntos;
      };
      res.json(score(arr));
    }
  } catch (e) {
    console.log(e);
    throw new TypeError("Ha ocurrido un error: ", e);
  }
});
module.exports = router;
