import { Sequelize } from 'sequelize';
import * as pg from 'pg';

export const sequelize = new Sequelize({
  database: process.env.DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres',
  dialectModule: pg, // This fixes the error `Please install pg package manually`
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
