import { config } from '../config.js';
import { Sequelize } from 'sequelize';

const { host, port, user, database, password } = config.db;
export const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
