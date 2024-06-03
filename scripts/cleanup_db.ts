import { sequelize } from '@/app/db/db';

sequelize
  .sync({ force: true })
  .then((_) => {
    console.log('Database is cleaned up.');
  })
  .catch((err) => {
    console.log(err);
  });
