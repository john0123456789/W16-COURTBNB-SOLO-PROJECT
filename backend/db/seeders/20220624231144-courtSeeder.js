'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Courts', [{
        description: 'The Tennis Center includes a championship court with seating for 132 spectators and an additional 24 lighted tennis courts. The adjacent Tennis Center includes a conference room, concession area, restrooms and City athletics offices.',
        userId: 1,
        url: "https://matadormessenger.com/wp-content/uploads/2018/03/pasted-image-0-2-1-900x506.png",
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
        url: "https://www.ocregister.com/wp-content/uploads/2020/07/OCR-L-VETERANSPARK-0725-JG-04.jpg?w=620",
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
        url: "https://s3-media0.fl.yelpcdn.com/bphoto/2xXsAJs90In4rVxcnKPXqA/348s.jpg",
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
        url: "https://images.prismic.io/fft-rg-commun-news/00ed97b1-daad-491f-ae8b-967f14859e11_Stade3.jpg?auto=compress,format",
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
        url: "https://aecom.com/br/wp-content/uploads/2018/08/USTA-arthur-ashe-stadium-roof-aecom-header3.jpg",
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
        url: "https://upload.wikimedia.org/wikipedia/commons/4/43/KuS5FFM%25TSu0qoAzZNdk4A.jpg",
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
        url: "https://www.gannett-cdn.com/presto/2018/07/19/PCIN/e9efd373-f244-4bd2-92ba-f86460016725-071918_TENNIS_336B.JPG?crop=4991,2794,x0,y0&width=3200&height=1792&format=pjpg&auto=webp",
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
        url: "https://cdn.shopify.com/s/files/1/1749/5899/articles/Wimby_2048x.jpg?v=1527706458",
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
        url: "https://static01.nyt.com/images/2009/05/09/sports/09tennisA_xl.jpg?year=2009&h=360&w=600&s=2f91df83b187fca38faa9e561bb8730f36426fa89631575b5432980a64cfc200&k=ZQJBKqZ0VN",
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
        url: "https://www.huntingtonbeachca.gov/residents/parks_facilities/photos/7-107-1a.jpg",
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
        url: "https://www.tenniscanada.com/wp-content/uploads/2022/01/08082019_JM_Rogers_Cup-32535-e1642001230961.jpg",
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
