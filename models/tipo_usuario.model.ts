import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";


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