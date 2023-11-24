import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tipo_usuario, tipo_usuarioId } from './tipo_usuario';
import type { usuario, usuarioId } from './usuario';

export interface tipo_usuario_usuarioAttributes {
  USU_ID: number;
  TUS_ID: number;
  TUU_FECHA_ACTIVACION?: Date;
}

export type tipo_usuario_usuarioPk = "USU_ID" | "TUS_ID";
export type tipo_usuario_usuarioId = tipo_usuario_usuario[tipo_usuario_usuarioPk];
export type tipo_usuario_usuarioOptionalAttributes = "TUU_FECHA_ACTIVACION";
export type tipo_usuario_usuarioCreationAttributes = Optional<tipo_usuario_usuarioAttributes, tipo_usuario_usuarioOptionalAttributes>;

export class tipo_usuario_usuario extends Model<tipo_usuario_usuarioAttributes, tipo_usuario_usuarioCreationAttributes> implements tipo_usuario_usuarioAttributes {
  USU_ID!: number;
  TUS_ID!: number;
  TUU_FECHA_ACTIVACION?: Date;

  // tipo_usuario_usuario belongsTo tipo_usuario via TUS_ID
  TU!: tipo_usuario;
  getTU!: Sequelize.BelongsToGetAssociationMixin<tipo_usuario>;
  setTU!: Sequelize.BelongsToSetAssociationMixin<tipo_usuario, tipo_usuarioId>;
  createTU!: Sequelize.BelongsToCreateAssociationMixin<tipo_usuario>;
  // tipo_usuario_usuario belongsTo usuario via USU_ID
  USU!: usuario;
  getUSU!: Sequelize.BelongsToGetAssociationMixin<usuario>;
  setUSU!: Sequelize.BelongsToSetAssociationMixin<usuario, usuarioId>;
  createUSU!: Sequelize.BelongsToCreateAssociationMixin<usuario>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tipo_usuario_usuario {
    return tipo_usuario_usuario.init({
    USU_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'USU_ID'
      }
    },
    TUS_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tipo_usuario',
        key: 'TUS_ID'
      }
    },
    TUU_FECHA_ACTIVACION: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tipo_usuario_usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TUS_ID" },
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
