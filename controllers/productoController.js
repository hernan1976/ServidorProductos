const axios = require('axios');

exports.consultarProductos = async (req, res)=>{

    const url = `https://api.mercadolibre.com/sites/MLA/search?q=:${req.body.prod}&limit=4`;

    const productos = await axios.get(url);

    res.json({productos: productos.data.results});

};


exports.consultarProducto = async (req, res)=>{

    const url = `https://api.mercadolibre.com/items/${req.body.id}`;

    const producto = await axios.get(url);

    res.json({producto: producto.data}); 

};

exports.descripcionProducto = async (req, res)=>{

    console.log('ID PRODUCTO: ',req.body.id);

    const url = `https://api.mercadolibre.com/items/${req.body.id}/description`;
  
    const descripcion = await axios.get(url);

    res.json({descripcion: descripcion.data.plain_text}); 

};
