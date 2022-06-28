'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Courts', [{
        description: 'The Tennis Center includes a championship court with seating for 132 spectators and an additional 24 lighted tennis courts. The adjacent Tennis Center includes a conference room, concession area, restrooms and City athletics offices.',
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
        description: 'Veterans Sports Park has four tennis courts. Come play tennis in a beautiful location in the heart of Orange County!',
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
        description: 'Come enjoy our humble but well kept tennis courts. Very affordable and fun for everyone!',
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
        description: "If your name isn't Rafael Nadal don't bother thinking about coming here. Our ball boys can smell poverty and will only pick up balls for people with fat pockets only.",
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
        description: 'Come experience where the professionals come play for US Open, standing on our courts will make you feel like a PRO!',
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
        description: 'Experience the legendary Rod Laver Arena, great for all kinds of players, you will feel like a king playing on center court.',
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
        description: 'Our state of the art courts will leave you wanting more!',
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
        description: "If you haven't won a grand slam here or not married to a prince or princess, don't bother.",
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
        description: "Experience the magic! Caja Magica's clay courts are state of the art and maintained daily.",
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
        description: "Come play tennis in the heart of Orange County, feel the ocean breeze caressing your face while acing your friends!",
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
        description: "Come hit some balls at the best courts the Great North has to offer.",
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
