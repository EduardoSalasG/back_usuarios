import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { pregunta_seguridad, pregunta_seguridadId } from './pregunta_seguridad';
import type { respuesta, respuestaId } from './respuesta';
import type { tipo_usuario, tipo_usuarioId } from './tipo_usuario';
import type { tipo_usuario_usuario, tipo_usuario_usuarioId } from './tipo_usuario_usuario';

export interface usuarioAttributes {
  USU_ID: number;
  USU_NOMBRE: string;
  USU_APELLIDO_PAT: string;
  USU_APELLIDO_MAT: string;
  USU_RUT: string;
  USU_GENERO: number;
  USU_CORREO: string;
  USU_CONTRASENA: string;
  USU_FECHA_CREACION?: Date;
  USU_FECHA_ACTUALIZACION_ULTIMA_PASS?: Date;
  USU_ULTIMA_PASS?: string;
  USU_ESTADO?: number;
}

export type usuarioPk = "USU_ID";
export type usuarioId = usuario[usuarioPk];
export type usuarioOptionalAttributes = "USU_ID" | "USU_FECHA_CREACION" | "USU_FECHA_ACTUALIZACION_ULTIMA_PASS" | "USU_ULTIMA_PASS" | "USU_ESTADO";
export type usuarioCreationAttributes = Optional<usuarioAttributes, usuarioOptionalAttributes>;

export class usuario extends Model<usuarioAttributes, usuarioCreationAttributes> implements usuarioAttributes {
  USU_ID!: number;
  USU_NOMBRE!: string;
  USU_APELLIDO_PAT!: string;
  USU_APELLIDO_MAT!: string;
  USU_RUT!: string;
  USU_GENERO!: number;
  USU_CORREO!: string;
  USU_CONTRASENA!: string;
  USU_FECHA_CREACION?: Date;
  USU_FECHA_ACTUALIZACION_ULTIMA_PASS?: Date;
  USU_ULTIMA_PASS?: string;
  USU_ESTADO?: number;

  // usuario belongsToMany pregunta_seguridad via USU_ID and PSE_ID
  PSE_ID_pregunta_seguridads!: pregunta_seguridad[];
  getPSE_ID_pregunta_seguridads!: Sequelize.BelongsToManyGetAssociationsMixin<pregunta_seguridad>;
  setPSE_ID_pregunta_seguridads!: Sequelize.BelongsToManySetAssociationsMixin<pregunta_seguridad, pregunta_seguridadId>;
  addPSE_ID_pregunta_seguridad!: Sequelize.BelongsToManyAddAssociationMixin<pregunta_seguridad, pregunta_seguridadId>;
  addPSE_ID_pregunta_seguridads!: Sequelize.BelongsToManyAddAssociationsMixin<pregunta_seguridad, pregunta_seguridadId>;
  createPSE_ID_pregunta_seguridad!: Sequelize.BelongsToManyCreateAssociationMixin<pregunta_seguridad>;
  removePSE_ID_pregunta_seguridad!: Sequelize.BelongsToManyRemoveAssociationMixin<pregunta_seguridad, pregunta_seguridadId>;
  removePSE_ID_pregunta_seguridads!: Sequelize.BelongsToManyRemoveAssociationsMixin<pregunta_seguridad, pregunta_seguridadId>;
  hasPSE_ID_pregunta_seguridad!: Sequelize.BelongsToManyHasAssociationMixin<pregunta_seguridad, pregunta_seguridadId>;
  hasPSE_ID_pregunta_seguridads!: Sequelize.BelongsToManyHasAssociationsMixin<pregunta_seguridad, pregunta_seguridadId>;
  countPSE_ID_pregunta_seguridads!: Sequelize.BelongsToManyCountAssociationsMixin;
  // usuario hasMany respuesta via USU_ID
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
  // usuario belongsToMany tipo_usuario via USU_ID and TUS_ID
  TUS_ID_tipo_usuarios!: tipo_usuario[];
  getTUS_ID_tipo_usuarios!: Sequelize.BelongsToManyGetAssociationsMixin<tipo_usuario>;
  setTUS_ID_tipo_usuarios!: Sequelize.BelongsToManySetAssociationsMixin<tipo_usuario, tipo_usuarioId>;
  addTUS_ID_tipo_usuario!: Sequelize.BelongsToManyAddAssociationMixin<tipo_usuario, tipo_usuarioId>;
  addTUS_ID_tipo_usuarios!: Sequelize.BelongsToManyAddAssociationsMixin<tipo_usuario, tipo_usuarioId>;
  createTUS_ID_tipo_usuario!: Sequelize.BelongsToManyCreateAssociationMixin<tipo_usuario>;
  removeTUS_ID_tipo_usuario!: Sequelize.BelongsToManyRemoveAssociationMixin<tipo_usuario, tipo_usuarioId>;
  removeTUS_ID_tipo_usuarios!: Sequelize.BelongsToManyRemoveAssociationsMixin<tipo_usuario, tipo_usuarioId>;
  hasTUS_ID_tipo_usuario!: Sequelize.BelongsToManyHasAssociationMixin<tipo_usuario, tipo_usuarioId>;
  hasTUS_ID_tipo_usuarios!: Sequelize.BelongsToManyHasAssociationsMixin<tipo_usuario, tipo_usuarioId>;
  countTUS_ID_tipo_usuarios!: Sequelize.BelongsToManyCountAssociationsMixin;
  // usuario hasMany tipo_usuario_usuario via USU_ID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof usuario {
    return usuario.init({
    USU_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    sequelize,
    tableName: 'usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USU_ID" },
        ]
      },
      {
        name: "USU_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USU_ID" },
        ]
      },
    ]
  });
  }
}
