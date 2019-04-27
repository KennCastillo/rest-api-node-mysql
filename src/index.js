const express = require('express');
const app = express();

//Configuraciones
//app.set('port', process.env.PORT || 3000);
app.set('port', process.env.PORT || 7801);

//Middleweares o Intermediarios
app.use(express.json());

//Rutas
app.use(require('./rutas/empleados.js'));

//Empezando el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});