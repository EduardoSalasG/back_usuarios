import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";
import { tipo_usuario } from "./tipo_usuario.model";
import { usuario } from "./usuario.model";


export class tipo_usuario_usuario extends Model { }

tipo_usuario_usuario.init({
  //Model attributes are defined here
  TUS_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'tipo_usuario',
      key: 'TUS_ID'
    }
  },
  USU_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'usuario',
      key: 'USU_ID'
    }
  },
  TUU_FECHA_ACTIVACION: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  //Other model options go here
  sequelize, //We need to pass the connection instance
  modelName: 'tipo_usuario_usuario'
});

tipo_usuario_usuario.belongsTo(tipo_usuario,
  {
    as: "TU",
    foreignKey: "TUS_ID"
  });

tipo_usuario_usuario.belongsTo(usuario,
  {
    as: "USU",
    foreignKey: "USU_ID"
  });