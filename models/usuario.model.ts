import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";

export class usuario extends Model {
  static associate(models: any) {
    usuario.belongsToMany(models.pregunta_seguridad, { as: 'PSE_ID_pregunta_seguridad', through: models.respuesta, foreignKey: "USU_ID", otherKey: "PSE_ID" });
    usuario.belongsToMany(models.tipo_usuario, { as: 'TUS_ID_tipo_usuarios', through: models.tipo_usuario_usuario, foreignKey: "USU_ID", otherKey: "TUS_ID" });
    usuario.hasMany(models.respuesta, { as: "respuesta", foreignKey: "USU_ID" });
    usuario.hasMany(models.tipo_usuario_usuario, { as: "tipo_usuario_usuarios", foreignKey: "USU_ID" });
  }
}

usuario.init({
  //Model attributes are defined here
  USU_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
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
    type: DataTypes.STRING(100),
    allowNull: false
  },
  USU_FECHA_CREACION: {
    type: DataTypes.DATE,
    allowNull: false
  },
  USU_FECHA_ACTUALIZACION_ULTIMA_PASS: {
    type: DataTypes.DATE,
    allowNull: false
  },
  USU_ULTIMA_PASS: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  USU_ESTADO: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  //Other model options go here
  sequelize, //We need to pass the connection instance
  modelName: 'usuario'
});