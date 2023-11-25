import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";
import { pregunta_seguridad } from "./pregunta_seguridad.model";
import { usuario } from "./usuario.model";


export class respuesta extends Model { }

respuesta.init({
  //Model attributes are defined here
  PSE_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'pregunta_seguridad',
      key: 'PSE_ID'
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
  RES_RESPUESTA: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  RES_FECHA: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  //Other model options go here
  sequelize, //We need to pass the connection instance
  modelName: 'respuesta'
});

respuesta.belongsTo(pregunta_seguridad,
  {
    as: "PSE",
    foreignKey: "PSE_ID"
  });

respuesta.belongsTo(usuario,
  {
    as: "USU",
    foreignKey: "USU_ID"
  });