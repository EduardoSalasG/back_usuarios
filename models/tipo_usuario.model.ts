import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";


export class tipo_usuario extends Model {
  static associate(models: any) {
    tipo_usuario.belongsToMany(models.usuario,
      {
        as: 'USU_ID_usuario_tipo_usuario_usuarios',
        through: models.tipo_usuario_usuario,
        foreignKey: "TUS_ID", otherKey: "USU_ID"
      });

    tipo_usuario.hasMany(models.tipo_usuario_usuario,
      {
        as: "tipo_usuario_usuarios",
        foreignKey: "TUS_ID"
      });
  }
}

tipo_usuario.init({
  //Model attributes are defined here
  TUS_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement:true,
    references: {
      model: 'tipo_usuario',
      key: 'TUS_ID'
    }
  },
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