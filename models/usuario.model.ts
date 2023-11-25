import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config";


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