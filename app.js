const express = require("express");
const path = require("path");
const UsuarioController = require("./controllers/usuarioController");

const app = express();
const puerto = 3002;

//Midellware
app.use(express.json());
app.use(express.static("views"));

//rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'usuario.html'));
});

app.get('/api/usuarios', UsuarioController.listarUsuario);
app.post('/api/usuarios', UsuarioController.crearUsuario);
app.put('/api/usuarios/:id', UsuarioController.actualizarUsuario);
app.delete('/api/usuarios/:id', UsuarioController.eliminarUsuario);

app.listen(puerto, () => {
    console.log('Servidor corriendo en http://localhost:' + puerto);
});

