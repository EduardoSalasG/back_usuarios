import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { respuesta, respuestaId } from './respuesta';
import type { usuario, usuarioId } from './usuario';

export interface pregunta_seguridadAttributes {
  PSE_ID: number;
  PSE_ENUNCIADO: string;
}

export type pregunta_seguridadPk = "PSE_ID";
export type pregunta_seguridadId = pregunta_seguridad[pregunta_seguridadPk];
export type pregunta_seguridadOptionalAttributes = "PSE_ID";
export type pregunta_seguridadCreationAttributes = Optional<pregunta_seguridadAttributes, pregunta_seguridadOptionalAttributes>;

export class pregunta_seguridad extends Model<pregunta_seguridadAttributes, pregunta_seguridadCreationAttributes> implements pregunta_seguridadAttributes {
  PSE_ID!: number;
  PSE_ENUNCIADO!: string;

  // pregunta_seguridad hasMany respuesta via PSE_ID
  respuesta!: respuesta[];
  getRespuesta!: Sequelize.HasManyGetAssociationsMixin<respuesta>;
  setRespuesta!: Sequelize.HasManySetAssociationsMixin<respuesta, respuestaId>;
  addRespuestum!: Sequelize.HasManyAddAssociationMixin<respuesta, respuestaId>;
  addRespuesta!: Sequelize.HasManyAddAssociationsMixin<respuesta, respuestaId>;
  createRespuestum!: Sequelize.HasManyCreateAssociationMixin<respuesta>;
  removeRespuestum!: Sequelize.HasManyRemoveAssociationMixin<respuesta, respuestaId>;
  removeRespuesta!: Sequelize.HasManyRemoveAssociationsMixin<respuesta, respuestaId>;
  hasRespuestum!: Sequelize.HasManyHasAssociationMixin<respuesta, respuestaId>;
  hasRespuesta!: Sequelize.HasManyHasAssociationsMixin<respuesta, respuestaId>;
  countRespuesta!: Sequelize.HasManyCountAssociationsMixin;
  // pregunta_seguridad belongsToMany usuario via PSE_ID and USU_ID
  USU_ID_usuarios!: usuario[];
  getUSU_ID_usuarios!: Sequelize.BelongsToManyGetAssociationsMixin<usuario>;
  setUSU_ID_usuarios!: Sequelize.BelongsToManySetAssociationsMixin<usuario, usuarioId>;
  addUSU_ID_usuario!: Sequelize.BelongsToManyAddAssociationMixin<usuario, usuarioId>;
  addUSU_ID_usuarios!: Sequelize.BelongsToManyAddAssociationsMixin<usuario, usuarioId>;
  createUSU_ID_usuario!: Sequelize.BelongsToManyCreateAssociationMixin<usuario>;
  removeUSU_ID_usuario!: Sequelize.BelongsToManyRemoveAssociationMixin<usuario, usuarioId>;
  removeUSU_ID_usuarios!: Sequelize.BelongsToManyRemoveAssociationsMixin<usuario, usuarioId>;
  hasUSU_ID_usuario!: Sequelize.BelongsToManyHasAssociationMixin<usuario, usuarioId>;
  hasUSU_ID_usuarios!: Sequelize.BelongsToManyHasAssociationsMixin<usuario, usuarioId>;
  countUSU_ID_usuarios!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof pregunta_seguridad {
    return pregunta_seguridad.init({
    PSE_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PSE_ENUNCIADO: {
      type: DataTypes.STRING(155),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pregunta_seguridad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PSE_ID" },
        ]
      },
      {
        name: "PSE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PSE_ID" },
        ]
      },
    ]
  });
  }
}
