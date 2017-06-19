module.exports = function(app){
    app.dataSources.monguito.automigrate('Cuenta', (err)=> {
        if(err)
            throw err;

        app.models.Cuenta.create([{
            username : "cuenta1",
            password : "password"
        }], (err, cuentas) => {
            if(err)
                throw err;
            console.log("Creado ejemplo");
        });

    });
};