//modelo representa estructura de datos y logica de negocios

const database = require("../config/database");

class Usuario {

    static obtenerTodos() {
        return new Promise((resolve, reject) => {
            database.query('Select * from usuarios', (error, resultados) => {
                if (error) {
                    reject(error)
                }
                resolve(resultados)
            });
        });
    }


    static crear(usuario) {
        return new Promise((resolve, reject) => {
            database.query('INSERT INTO USUARIOS(nombre,email) VALUES(?,?)'
                , [usuario.nombre, usuario.email]
                , (error, resultados) => {
                    if (error) {
                        reject(error)
                    }
                    resolve(resultados)

                });
        });
    }


    static actualizar(id, datosActualizados) {
        return new Promise((resolve, reject) => {
            database.query(
                'UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?',
                [datosActualizados.nombre, datosActualizados.email, id],
                (error, resultados) => {
                    if (error) {
                        reject(error);
                    }
                    // Verifica si se actualizó algún registro
                    if (resultados.affectedRows > 0) {
                        resolve({ id, ...datosActualizados });
                    } else {
                        resolve(null); // No se encontró el usuario
                    }
                }
            );
        });
    }

    
    static eliminar(id) {
        return new Promise((resolve, reject) => {
            database.query(
                'DELETE FROM usuarios WHERE id = ?',
                [id],
                (error, resultados) => {
                    if (error) {
                        reject(error);
                    }
                    // Verifica si se eliminó algún registro
                    if (resultados.affectedRows > 0) {
                        resolve(true); // Usuario eliminado
                    } else {
                        resolve(false); // Usuario no encontrado
                    }
                }
            );
        });
    }
}


module.exports = Usuario; 
