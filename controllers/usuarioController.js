//Controllador maneja las peticiones del cliente y las coordina con el modelo

const Usuario = require("../models/usuario");

class UsuarioController {
    static async listarUsuario(req, res) {
        try {
            const usuarios = await Usuario.obtenerTodos();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async crearUsuario(req, res) {
        try {
            const nuevousuario = await Usuario.crear(req.body);
            res.status(200).json(nuevousuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async actualizarUsuario(req, res) {
        try {
            const { id } = req.params; // Obtén el ID del usuario desde los parámetros
            const datosActualizados = req.body; // Datos enviados para actualizar
            const usuarioActualizado = await Usuario.actualizar(id, datosActualizados);

            if (usuarioActualizado) {
                res.status(200).json(usuarioActualizado);
            } else {
                res.status(200).json({ mensaje: "Usuario no encontrado" }); // Estado 200 con mensaje
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async eliminarUsuario(req, res) {
        try {
            const { id } = req.params; // Obtén el ID del usuario desde los parámetros
            const resultado = await Usuario.eliminar(id);

            if (resultado) {
                res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
            } else {
                res.status(200).json({ mensaje: "Usuario no encontrado" }); // Estado 200 con mensaje
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}
module.exports = UsuarioController; 