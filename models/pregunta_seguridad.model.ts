import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";
import { usuario } from "./usuario.model";
import { respuesta } from "./respuesta.model";
import { tipo_usuario_usuario } from "./tipo_usuario_usuario.model";
import { tipo_usuario } from "./tipo_usuario.model";


export class pregunta_seguridad extends Model { }

pregunta_seguridad.init({
  //Model attributes are defined here
  PSE_ENUNCIADO: {
    type: DataTypes.STRING,
    allowNull: false,

  }
}, {
  //Other model options go here
  sequelize, //We need to pass the connection instance
  modelName: 'pregunta_seguridad'
});

pregunta_seguridad.belongsToMany(usuario,
  {
    as: 'USU_ID_usuarios',
    through: respuesta
  });
pregunta_seguridad.hasMany(respuesta,
  {
    as: "respuesta",
    foreignKey: "PSE_ID"
  });