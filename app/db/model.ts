import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import { sequelize } from './db';

class UrlModel extends Model<
  InferAttributes<UrlModel>,
  InferCreationAttributes<UrlModel>
> {
  declare longUrl: string;
  declare shortUrl: string;
}

export const Url = sequelize.define<UrlModel>('Url', {
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
