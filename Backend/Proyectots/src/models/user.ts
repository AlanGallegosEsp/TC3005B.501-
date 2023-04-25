'use strict';

import { Model } from "sequelize";

interface UserAttributes {
  awsCognitoId: string;
  name: string,
  role: string,
  email: string
}

export enum UserRole {
  ADMIN = 'ADMIN',
  SUPERVISOR = 'SUPERVISOR',
  AGENT = 'AGENT',
  CUSTOMER = 'CUSTOMER'
}

export default (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes{
    awsCognitoId!: string;
    name!: string;
    role!: string;
    email!: string;
    static associate(models:any) {
      // define association here
    }
  }
  User.init({
    awsCognitoId:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: DataTypes.STRING,
    role: {
      type: DataTypes.string,
      allowNull: false,
      defaultValue: UserRole.CUSTOMER
    },
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};