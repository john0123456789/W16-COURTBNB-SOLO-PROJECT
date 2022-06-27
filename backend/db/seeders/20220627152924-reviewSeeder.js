'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [{
        userId: 1,
        courtId: 11,
        review: "Wasn't sure if these courts were regulation height, so I had to bust out my measuring tape...it was off by half an inch!",
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        courtId: 10,
        review: "If you can ignore the homeless people berating you and being loud while you play then by all means come here....",
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        courtId: 9,
        review: "WOW! La Caja Magica definitely lives up to its name.. I was playing the best tennis of my life here, it really is A MAGIC BOX!",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        courtId: 8,
        review: "all these snobby social ladder climbers in one place.... and what's up with everyone wearing white?!",
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        courtId: 7,
        review: "great price, great courts, great organization!",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 11,
        courtId: 6,
        review: "amazing staff, well maintained courts, great ball people!",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        courtId: 5,
        review: "billie jean king is a great woman with even greater tennis courts, no wonder the US open is held here every year!",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        courtId: 4,
        review: "so this is where rafa nadal won every single one of his slams...",
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        courtId: 3,
        review: "don't come here unless you're looking to get mugged",
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        courtId: 2,
        review: "wow what great tennis courts, and really affordable too!",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        courtId: 1,
        review: "this place is really organized and well kept, will come back again!",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
