const express =  require('express');
const app = express();

// midellwares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// routes 
app.use(require('./routes/index'))
app.listen(3000);
console.log('ya funciona en el puerto 3000')