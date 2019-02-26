var controllerpelicula = require('./controllerpelicula.js');

module.exports = function(app){
    
    var clasepelicula = new controllerpelicula();
    
    app.post('/api/nuevapelicula',clasepelicula.Guardar);    
    app.post('/api/modificapelicula',clasepelicula.Modificar);
    app.post('/api/eliminarpelicula',clasepelicula.Eliminar);        
    app.post('/api/seleccionarpelicula',clasepelicula.Seleccionartodos);
    app.post('/api/seleccionarpeliculaporfecha',clasepelicula.Seleccionarporfecha);
    app.post('/api/seleccionarpeliculaporid',clasepelicula.Seleccionarporid);
    app.post('/api/seleccionarpeliculapornombre',clasepelicula.Seleccionarpornombre);
    
    app.get('*', function(req,res){ //localhost:8080
        res.sendfile('./login.html'); //Carga unica de la vista
    });
    
};