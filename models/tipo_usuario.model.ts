import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";
import { usuario } from "./usuario.model";
import { tipo_usuario_usuario } from "./tipo_usuario_usuario.model";


export class tipo_usuario extends Model {}

tipo_usuario.init({
  //Model attributes are defined here
  TUS_NOMBRE: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  TUS_DESCRIPCION: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  //Other model options go here
  sequelize, //We need to pass the connection instance
  modelName: 'tipo_usuario'
});

tipo_usuario.belongsToMany(usuario, { as: 'USU_ID_usuario_tipo_usuario_usuarios', through: tipo_usuario_usuario, foreignKey: "TUS_ID", otherKey: "USU_ID" });
tipo_usuario.hasMany(tipo_usuario_usuario, { as: "tipo_usuario_usuarios", foreignKey: "TUS_ID"});
