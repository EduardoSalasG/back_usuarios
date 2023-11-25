import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

export class pregunta_seguridad extends Model {
  static associate(models: any) {
    pregunta_seguridad.belongsToMany(models.usuario, { as: 'usuario', through: models.respuesta });
    pregunta_seguridad.hasMany(models.respuesta, { as: "respuesta", foreignKey: "PSE_ID" });
  }
}

pregunta_seguridad.init({
  //Model attributes are defined here
  PSE_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  PSE_ENUNCIADO: {
    type: DataTypes.STRING,
    allowNull: false,

  }
}, {
  //Other model options go here
  sequelize, //We need to pass the connection instance
  modelName: 'pregunta_seguridad'
});