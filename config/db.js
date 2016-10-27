import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

let db = null;
const loadModels = (sequelize) => {
  const dir = path.join(__dirname, '../models');
  const models = [];
  fs.readdirSync(dir).forEach((file) => {
    const modelDir = path.join(dir, file);
    const model = sequelize.import(modelDir);
    models[model.name] = model;
  });
  return models;
};

export default (app) => {
  if (!db) {
    const config = app.config;
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );

    db = {
      sequelize,
      Sequelize,
      models: {},
    };

    db.models = loadModels(sequelize);
    sequelize.sync().done(() => db);
  }
  return db;
};
