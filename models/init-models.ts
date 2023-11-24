import type { Sequelize } from "sequelize";
import { pregunta_seguridad as _pregunta_seguridad } from "./pregunta_seguridad";
import type { pregunta_seguridadAttributes, pregunta_seguridadCreationAttributes } from "./pregunta_seguridad";
import { respuesta as _respuesta } from "./respuesta";
import type { respuestaAttributes, respuestaCreationAttributes } from "./respuesta";
import { tipo_usuario as _tipo_usuario } from "./tipo_usuario";
import type { tipo_usuarioAttributes, tipo_usuarioCreationAttributes } from "./tipo_usuario";
import { tipo_usuario_usuario as _tipo_usuario_usuario } from "./tipo_usuario_usuario";
import type { tipo_usuario_usuarioAttributes, tipo_usuario_usuarioCreationAttributes } from "./tipo_usuario_usuario";
import { usuario as _usuario } from "./usuario";
import type { usuarioAttributes, usuarioCreationAttributes } from "./usuario";

export {
  _pregunta_seguridad as pregunta_seguridad,
  _respuesta as respuesta,
  _tipo_usuario as tipo_usuario,
  _tipo_usuario_usuario as tipo_usuario_usuario,
  _usuario as usuario,
};

export type {
  pregunta_seguridadAttributes,
  pregunta_seguridadCreationAttributes,
  respuestaAttributes,
  respuestaCreationAttributes,
  tipo_usuarioAttributes,
  tipo_usuarioCreationAttributes,
  tipo_usuario_usuarioAttributes,
  tipo_usuario_usuarioCreationAttributes,
  usuarioAttributes,
  usuarioCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const pregunta_seguridad = _pregunta_seguridad.initModel(sequelize);
  const respuesta = _respuesta.initModel(sequelize);
  const tipo_usuario = _tipo_usuario.initModel(sequelize);
  const tipo_usuario_usuario = _tipo_usuario_usuario.initModel(sequelize);
  const usuario = _usuario.initModel(sequelize);

  pregunta_seguridad.belongsToMany(usuario, { as: 'USU_ID_usuarios', through: respuesta, foreignKey: "PSE_ID", otherKey: "USU_ID" });
  tipo_usuario.belongsToMany(usuario, { as: 'USU_ID_usuario_tipo_usuario_usuarios', through: tipo_usuario_usuario, foreignKey: "TUS_ID", otherKey: "USU_ID" });
  usuario.belongsToMany(pregunta_seguridad, { as: 'PSE_ID_pregunta_seguridads', through: respuesta, foreignKey: "USU_ID", otherKey: "PSE_ID" });
  usuario.belongsToMany(tipo_usuario, { as: 'TUS_ID_tipo_usuarios', through: tipo_usuario_usuario, foreignKey: "USU_ID", otherKey: "TUS_ID" });
  respuesta.belongsTo(pregunta_seguridad, { as: "PSE", foreignKey: "PSE_ID"});
  pregunta_seguridad.hasMany(respuesta, { as: "respuesta", foreignKey: "PSE_ID"});
  tipo_usuario_usuario.belongsTo(tipo_usuario, { as: "TU", foreignKey: "TUS_ID"});
  tipo_usuario.hasMany(tipo_usuario_usuario, { as: "tipo_usuario_usuarios", foreignKey: "TUS_ID"});
  respuesta.belongsTo(usuario, { as: "USU", foreignKey: "USU_ID"});
  usuario.hasMany(respuesta, { as: "respuesta", foreignKey: "USU_ID"});
  tipo_usuario_usuario.belongsTo(usuario, { as: "USU", foreignKey: "USU_ID"});
  usuario.hasMany(tipo_usuario_usuario, { as: "tipo_usuario_usuarios", foreignKey: "USU_ID"});

  return {
    pregunta_seguridad: pregunta_seguridad,
    respuesta: respuesta,
    tipo_usuario: tipo_usuario,
    tipo_usuario_usuario: tipo_usuario_usuario,
    usuario: usuario,
  };
}
