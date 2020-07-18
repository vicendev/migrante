require('./config/config');

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Habilitar CORS
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

// Rutas estaticas
app.use("/images", express.static(path.join(__dirname, "images")))
app.use("/", express.static(path.join(__dirname, "angular")));

// Configuracion global de rutas
app.use( require('./routes/index') );

mongoose.connect("mongodb://migrante_admin:eG&iZz2rjH3ehD(8ajEZ@mongodb.guebs.net:27017/ch12048_migrante", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err, res) => {

    if ( err ) throw err;

    console.log('Base de datos Online')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto', process.env.PORT);
})
