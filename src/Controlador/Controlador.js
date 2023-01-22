const {
  seleccionTodaListaServicio,
  seleccionUnoListaServicio,
  actualizarUsuarioServicio,
  guadarUsuarioServicio,
  eliminarUsuarioServicio,
} = require("../Servicio/Servicio");

const seleccionTodaListaControlador = async (req, res) => {
  const usuarios = await seleccionTodaListaServicio();
  res.json({ usuarios: usuarios });
};
const seleccionUnoListaControlador = async (req, res) => {
  const { id } = req.params;
  const usuario = await seleccionUnoListaServicio(id);
  res.json({ usuarios: usuario });
};
const guardarUsuarioControlador = async (req, res) => {
  const { contraseña, nombre } = req.body;
  const response = await guadarUsuarioServicio(contraseña, nombre);
  res.json({ response: response });
};
const actualizarUsuariocontrol = async (req, res) => {
  const { contraseña, nombre } = req.body;
  const {id} = req.params;
  const response = await actualizarUsuarioServicio(id, contraseña, nombre);
  res.json({ response: response });
};
const eliminarUsuarioControl = async (req, res) => {
  try {
    const {id} = req.params;
    const response = await eliminarUsuarioServicio(id);
    
      res.status(201).json({ response: "usuario eliminado exitosamente" });
  } catch (error) {
    return false;
  }
};

module.exports = {
  seleccionTodaListaControlador,
  seleccionUnoListaControlador,
  guardarUsuarioControlador,
  actualizarUsuariocontrol,
  eliminarUsuarioControl,
};
