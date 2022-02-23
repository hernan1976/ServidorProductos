const express = require('express');
//importamos cors
const cors = require('cors');


//crear servidor
const app = express();

//leer valores del body
app.use(express.json());


//habilitamos cors
const opcionesCors = {
    origin: 'http://localhost:3000' // solo permite peticiones desde locahost:3000
}
app.use(cors(opcionesCors));


//puerto
const port = process.env.PORT || 4000;


//rutas
app.use('/api/productos', require('./routes/productos'));
app.use('/api/producto', require('./routes/producto'));
app.use('/api/descripcionProducto', require('./routes/descripcionProducto'));


app.listen(port, '0.0.0.0',()=>{
    console.log(`Servidor arriba en puerto: ${port}`);
})
