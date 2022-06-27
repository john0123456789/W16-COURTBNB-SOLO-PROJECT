'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Courts', [{
        userId: 1,
        address: '6950 Marine Way',
        city: 'Irvine',
        state: 'California',
        country: 'United States',
        name: 'Great Park',
        price: 10.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        address: '1645 Valencia Ave',
        city: 'Tustin',
        state: 'California',
        country: 'United States',
        name: 'Veteran Sports Park',
        price: 8.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        address: '12334 Bellflower Blvd',
        city: 'Downey',
        state: 'California',
        country: 'United States',
        name: 'Independence Park',
        price: 5.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        address: '2 Ave. Gordon Bennett',
        city: 'Paris',
        state: '',
        country: 'France',
        name: 'Court Philippe-Chatrier',
        price: 1000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        address: 'Flushing Meadow, Corona Park',
        city: 'Flushing',
        state: 'New York',
        country: 'United States',
        name: 'USTA Billie Jean King National Tennis Center',
        price: 50.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        address: 'Olympic Blvd',
        city: 'Melbourne',
        state: '',
        country: 'Australia',
        name: 'Rod Laver Arena',
        price: 75.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        address: '5460 Courseview Drive',
        city: 'Mason',
        state: 'Ohio',
        country: 'United States',
        name: 'Lindner Family Tennis Center',
        price: 35.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        address: 'Church Road',
        city: 'London',
        state: '',
        country: 'United Kingdom',
        name: 'All England Lawn Tennis and Croquet Club',
        price: 38.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        address: '23 28041 Camino de Perales',
        city: 'Madrid',
        state: '',
        country: 'Spain',
        name: 'Caja Magica',
        price: 50.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        address: '7000 Norma Drive',
        city: 'Huntington Beach',
        state: 'California',
        country: 'United States',
        name: 'Murdy Park',
        price: 6.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 11,
        address: '1 Shoreham Drive',
        city: 'Ontario',
        state: '',
        country: 'Canada',
        name: 'Sobeys Stadium',
        price: 65.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Courts', null, {});
  }
};
