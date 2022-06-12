const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let total = 0;
  
  const theatherIXX = await promiseTheaterIXX().then(value => {
    value.forEach(item => {
      if (item.hasil == emosi) {
        total++;
      }
    });
  }).catch ( error => {
    console.log("error: ", error);
  });

  const theatherVGC = await promiseTheaterVGC()
    .then((value) => {
      value.forEach((item) => {
        if (item.hasil == emosi) {
          total++;
        }
      });
    })
    .catch((error) => {
      console.log("error: ", error);
    });
  
  return total;
};

module.exports = {
  promiseOutput,
};
