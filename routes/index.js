const express = require('express');
const app = express();

// Routes de usuario
app.use( '/api/user',require('./usuario') );
app.use( '/api/login', require('./login') );

// Routes de Tramites
app.use( '/api/tramite', require('./tramite') );
app.use( '/api/tramitemenu', require('./tramitemenu'));
app.use( '/api/cabeceramenu', require('./cabeceramenu'));
app.use( '/api/contenido', require('./contenido'));
app.use( '/api/tramitecore', require('./tramitecore') );
app.use( '/api/tramiteprogreso', require('./tramiteprogreso') );

// Routes Perfil
app.use( '/api/perfilmenu', require('./perfilmenu'));

// Ruta front-end
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "angular", "index.html"));
})


module.exports = app;