import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tipo_usuario_usuario, tipo_usuario_usuarioId } from './tipo_usuario_usuario';
import type { usuario, usuarioId } from './usuario';

export interface tipo_usuarioAttributes {
  TUS_ID: number;
  TUS_NOMBRE: string;
  TUS_DESCRIPCION: string;
}

export type tipo_usuarioPk = "TUS_ID";
export type tipo_usuarioId = tipo_usuario[tipo_usuarioPk];
export type tipo_usuarioOptionalAttributes = "TUS_ID";
export type tipo_usuarioCreationAttributes = Optional<tipo_usuarioAttributes, tipo_usuarioOptionalAttributes>;

export class tipo_usuario extends Model<tipo_usuarioAttributes, tipo_usuarioCreationAttributes> implements tipo_usuarioAttributes {
  TUS_ID!: number;
  TUS_NOMBRE!: string;
  TUS_DESCRIPCION!: string;

  // tipo_usuario hasMany tipo_usuario_usuario via TUS_ID
  tipo_usuario_usuarios!: tipo_usuario_usuario[];
  getTipo_usuario_usuarios!: Sequelize.HasManyGetAssociationsMixin<tipo_usuario_usuario>;
  setTipo_usuario_usuarios!: Sequelize.HasManySetAssociationsMixin<tipo_usuario_usuario, tipo_usuario_usuarioId>;
  addTipo_usuario_usuario!: Sequelize.HasManyAddAssociationMixin<tipo_usuario_usuario, tipo_usuario_usuarioId>;
  addTipo_usuario_usuarios!: Sequelize.HasManyAddAssociationsMixin<tipo_usuario_usuario, tipo_usuario_usuarioId>;
  createTipo_usuario_usuario!: Sequelize.HasManyCreateAssociationMixin<tipo_usuario_usuario>;
  removeTipo_usuario_usuario!: Sequelize.HasManyRemoveAssociationMixin<tipo_usuario_usuario, tipo_usuario_usuarioId>;
  removeTipo_usuario_usuarios!: Sequelize.HasManyRemoveAssociationsMixin<tipo_usuario_usuario, tipo_usuario_usuarioId>;
  hasTipo_usuario_usuario!: Sequelize.HasManyHasAssociationMixin<tipo_usuario_usuario, tipo_usuario_usuarioId>;
  hasTipo_usuario_usuarios!: Sequelize.HasManyHasAssociationsMixin<tipo_usuario_usuario, tipo_usuario_usuarioId>;
  countTipo_usuario_usuarios!: Sequelize.HasManyCountAssociationsMixin;
  // tipo_usuario belongsToMany usuario via TUS_ID and USU_ID
  USU_ID_usuario_tipo_usuario_usuarios!: usuario[];
  getUSU_ID_usuario_tipo_usuario_usuarios!: Sequelize.BelongsToManyGetAssociationsMixin<usuario>;
  setUSU_ID_usuario_tipo_usuario_usuarios!: Sequelize.BelongsToManySetAssociationsMixin<usuario, usuarioId>;
  addUSU_ID_usuario_tipo_usuario_usuario!: Sequelize.BelongsToManyAddAssociationMixin<usuario, usuarioId>;
  addUSU_ID_usuario_tipo_usuario_usuarios!: Sequelize.BelongsToManyAddAssociationsMixin<usuario, usuarioId>;
  createUSU_ID_usuario_tipo_usuario_usuario!: Sequelize.BelongsToManyCreateAssociationMixin<usuario>;
  removeUSU_ID_usuario_tipo_usuario_usuario!: Sequelize.BelongsToManyRemoveAssociationMixin<usuario, usuarioId>;
  removeUSU_ID_usuario_tipo_usuario_usuarios!: Sequelize.BelongsToManyRemoveAssociationsMixin<usuario, usuarioId>;
  hasUSU_ID_usuario_tipo_usuario_usuario!: Sequelize.BelongsToManyHasAssociationMixin<usuario, usuarioId>;
  hasUSU_ID_usuario_tipo_usuario_usuarios!: Sequelize.BelongsToManyHasAssociationsMixin<usuario, usuarioId>;
  countUSU_ID_usuario_tipo_usuario_usuarios!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tipo_usuario {
    return tipo_usuario.init({
    TUS_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TUS_NOMBRE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TUS_DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tipo_usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TUS_ID" },
        ]
      },
      {
        name: "TUS_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TUS_ID" },
        ]
      },
    ]
  });
  }
}
