import { DataTypes } from 'sequelize';
import { sequelize } from './db';

export const Url = sequelize.define('Url', {
  longUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shortUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// TODO: move this to db seed script
Url.sync();
