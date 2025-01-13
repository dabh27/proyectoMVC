//configuracion database

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mvc_proyecto'
});

connection.connect((err) => {
    if (err) {
        console.log('Error al conectar a la base de datos', err);
        return;
    }

    console.log('Conexion exitosa:)');

});

module.exports = connection;


