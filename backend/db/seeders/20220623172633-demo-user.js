'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'claycourtgod@user.io',
        username: 'RafaNadal',
        hashedPassword: bcrypt.hashSync('password4'),
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        email: 'goat4real@user.io',
        username: 'FedExpress',
        hashedPassword: bcrypt.hashSync('password5'),
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        email: 'NoVaxJoker@user.io',
        username: 'VeganPowers',
        hashedPassword: bcrypt.hashSync('password6'),
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        email: 'NickKyrgios420@user.io',
        username: 'xX420NoScopegodXx',
        hashedPassword: bcrypt.hashSync('password7'),
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        email: 'SirMurray@user.io',
        username: 'therealandymurray',
        hashedPassword: bcrypt.hashSync('password8'),
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        email: 'carlitosalcaraz@user.io',
        username: 'carlitosalcaraz',
        hashedPassword: bcrypt.hashSync('password9'),
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        email: 'MrRussianGQ@user.io',
        username: 'DaRealRublev',
        hashedPassword: bcrypt.hashSync('password10'),
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      email: 'DanilMedvedev@user.io',
      username: 'Medwed',
      hashedPassword: bcrypt.hashSync('password11'),
      createdAt: new Date(),
      updatedAt: new Date()
     },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
