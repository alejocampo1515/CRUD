const mongoose = require("mongoose");
const bdUrl =
  "mongodb+srv://alejocampo:15Alicia15@cluster0-oywau.mongodb.net/CRUD?retryWrites=true&w=majority";
const sim = require("./sim");

mongoose.connect(
  bdUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    err
      ? console.log(err)
      : console.log("Conexión exitosa - conexion exitosa de prueba");
  }
);

module.exports = {
  sim,
};
