'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert(
      'Restaurants',
      [
        {
          restaurantId: 1,
          restaurantCategory: '중식',
          restaurantName: '인천반점',
          restaurantMenu: '1,2,3',
        },
        {
          restaurantId: 2,
          restaurantCategory: '한식',
          restaurantName: '인하김밥',
          restaurantMenu: '4,5,6',
        },
        {
          restaurantId: 3,
          restaurantCategory: '일식',
          restaurantName: '싱싱초밥',
          restaurantMenu: '7,8,9',
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Restaurants', null, {});
  }
};
