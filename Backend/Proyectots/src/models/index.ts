'use strict';

// IMPORTS
import fs from 'fs';
import path from 'path';
import config from '../config/config';

// REQUIRES
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';


const db:any = {};

let sequelize:any;

if (env === 'development') {
  sequelize = new Sequelize(
    config.development.database, 
    config.development.username,
    config.development.password,{
      dialect:config.development.dialect,
      host:config.development.host,
      define:{
        timestamps:false, // Si es true agrega los campos createdAt y updatedAt 
        freezeTableName:true // Si es true no cambia el nombre de las tablas
      }
    });
} 
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => { // Las tablas se agregan al objeto de conexion
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Se cargan las relaciones entre tablas
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;