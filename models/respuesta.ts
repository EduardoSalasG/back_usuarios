import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { pregunta_seguridad, pregunta_seguridadId } from './pregunta_seguridad';
import type { usuario, usuarioId } from './usuario';

export interface respuestaAttributes {
  PSE_ID: number;
  USU_ID: number;
  RES_RESPUESTA: string;
  RES_FECHA: Date;
}

export type respuestaPk = "PSE_ID" | "USU_ID";
export type respuestaId = respuesta[respuestaPk];
export type respuestaCreationAttributes = respuestaAttributes;

export class respuesta extends Model<respuestaAttributes, respuestaCreationAttributes> implements respuestaAttributes {
  PSE_ID!: number;
  USU_ID!: number;
  RES_RESPUESTA!: string;
  RES_FECHA!: Date;

  // respuesta belongsTo pregunta_seguridad via PSE_ID
  PSE!: pregunta_seguridad;
  getPSE!: Sequelize.BelongsToGetAssociationMixin<pregunta_seguridad>;
  setPSE!: Sequelize.BelongsToSetAssociationMixin<pregunta_seguridad, pregunta_seguridadId>;
  createPSE!: Sequelize.BelongsToCreateAssociationMixin<pregunta_seguridad>;
  // respuesta belongsTo usuario via USU_ID
  USU!: usuario;
  getUSU!: Sequelize.BelongsToGetAssociationMixin<usuario>;
  setUSU!: Sequelize.BelongsToSetAssociationMixin<usuario, usuarioId>;
  createUSU!: Sequelize.BelongsToCreateAssociationMixin<usuario>;

  static initModel(sequelize: Sequelize.Sequelize): typeof respuesta {
    return respuesta.init({
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
    sequelize,
    tableName: 'respuesta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PSE_ID" },
          { name: "USU_ID" },
        ]
      },
      {
        name: "USU_ID",
        using: "BTREE",
        fields: [
          { name: "USU_ID" },
        ]
      },
    ]
  });
  }
}
