import { DataTypes } from "sequelize";
import { db } from "../db";

export const UserModel = db.define('user', {
    cpf:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    carteira_de_trabalho:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    setor:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone1:{
        type: DataTypes.INTEGER,
    },
    telefone2:{
        type: DataTypes.INTEGER,
    }
})
