const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('eureca', 'root', '290489', {
    host: 'localhost',
    dialect: 'mysql',
  });

try {
await sequelize.authenticate();
console.log('Connection has been established successfully.');
} catch (error) {
console.error('Unable to connect to the database:', error);
}