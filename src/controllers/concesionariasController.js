const dbConcesionarias = require('../database');
const db = require('../database');

module.exports = {
    index: (req, res) =>{
        let nombresDeConcesionarias = db.map(concesionaria => concesionaria.sucursal)
        return res.send(nombresDeConcesionarias)
    },

    sucursales:(req, res) =>{
        let concesionarias = db.map(({sucursal, telefono, direccion}) => {
            return {
                sucursal, 
                telefono,
                direccion, 
            } 
        })
        res.send(concesionarias)
    },
    
    sucursal:(req, res) =>{
        const nombreDesucursal = req.params.sucursal.toLowerCase().trim();

        const sucursal = db.find(
            concesionaria => concesionaria.sucursal.toLowerCase().trim() === nombreDesucursal
        );
        
        if(typeof sucursal === 'undefined'){
            return res.send('Scucursal no existe')
        }


        return res.send(sucursal)
    },
}