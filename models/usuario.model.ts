import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";
import { pregunta_seguridad } from "./pregunta_seguridad.model";
import { tipo_usuario } from "./tipo_usuario.model";
import { respuesta } from "./respuesta.model";
import { tipo_usuario_usuario } from "./tipo_usuario_usuario.model";


export class usuario extends Model { }

usuario.init({
  //Model attributes are defined here
  USU_NOMBRE: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  USU_APELLIDO_PAT: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  USU_APELLIDO_MAT: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  USU_RUT: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  USU_GENERO: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  USU_CORREO: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  USU_CONTRASENA: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  USU_FECHA_CREACION: {
    type: DataTypes.DATE,
    allowNull: true
  },
  USU_FECHA_ACTUALIZACION_ULTIMA_PASS: {
    type: DataTypes.DATE,
    allowNull: true
  },
  USU_ULTIMA_PASS: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  USU_ESTADO: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
}, {
  //Other model options go here
  sequelize, //We need to pass the connection instance
  modelName: 'usuario'
});

usuario.belongsToMany(pregunta_seguridad, { as: 'PSE_ID_pregunta_seguridads', through: respuesta, foreignKey: "USU_ID", otherKey: "PSE_ID" });
usuario.belongsToMany(tipo_usuario, { as: 'TUS_ID_tipo_usuarios', through: tipo_usuario_usuario, foreignKey: "USU_ID", otherKey: "TUS_ID" });
usuario.hasMany(respuesta, { as: "respuesta", foreignKey: "USU_ID"});
usuario.hasMany(tipo_usuario_usuario, { as: "tipo_usuario_usuarios", foreignKey: "USU_ID"});