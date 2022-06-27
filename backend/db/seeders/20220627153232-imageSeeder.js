'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [{
        courtId: 1,
        url: 'https://matadormessenger.com/wp-content/uploads/2018/03/pasted-image-0-2-1-900x506.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courtId: 2,
        url: 'https://www.ocregister.com/wp-content/uploads/2020/07/OCR-L-VETERANSPARK-0725-JG-04.jpg?w=620',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courtId: 3,
        url: 'https://s3-media0.fl.yelpcdn.com/bphoto/2xXsAJs90In4rVxcnKPXqA/348s.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courtId: 4,
        url: 'https://images.prismic.io/fft-rg-commun-news/00ed97b1-daad-491f-ae8b-967f14859e11_Stade3.jpg?auto=compress,format',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courtId: 5,
        url: 'https://aecom.com/br/wp-content/uploads/2018/08/USTA-arthur-ashe-stadium-roof-aecom-header3.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courtId: 6,
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/KuS5FFM%25TSu0qoAzZNdk4A.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courtId: 7,
        url: 'https://www.gannett-cdn.com/presto/2018/07/19/PCIN/e9efd373-f244-4bd2-92ba-f86460016725-071918_TENNIS_336B.JPG?crop=4991,2794,x0,y0&width=3200&height=1792&format=pjpg&auto=webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courtId: 8,
        url: 'https://cdn.shopify.com/s/files/1/1749/5899/articles/Wimby_2048x.jpg?v=1527706458',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courtId: 9,
        url: 'https://static01.nyt.com/images/2009/05/09/sports/09tennisA_xl.jpg?year=2009&h=360&w=600&s=2f91df83b187fca38faa9e561bb8730f36426fa89631575b5432980a64cfc200&k=ZQJBKqZ0VN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courtId: 10,
        url: 'https://www.huntingtonbeachca.gov/residents/parks_facilities/photos/7-107-1a.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courtId: 11,
        url: 'https://www.tenniscanada.com/wp-content/uploads/2022/01/08082019_JM_Rogers_Cup-32535-e1642001230961.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
