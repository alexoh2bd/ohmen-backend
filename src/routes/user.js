import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';

const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: 'mansfield-db',
  user: 'admin',
  password: 'sjlOFDwLs3dDoEMZaIts',
  host: 'mansfield-db.cx0kaws604xi.us-west-1.rds.amazonaws.com',
  port: 3306,
});
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }