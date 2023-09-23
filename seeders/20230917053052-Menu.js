'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert(
      'Menus',
      [
        {
          menuId: 1,
          menuName: '짜장면',
          menuPrice: 8000,
          menuImg: "food1.png",
        },
        {
          menuId: 2,
          menuName: '짬뽕',
          menuPrice: 8000,
          menuImg: "food2.png",
        },
        {
          menuId: 3,
          menuName: '탕수육',
          menuPrice: 14000,
          menuImg: "food3.png",
        },
        {
          menuId: 4,
          menuName: '김밥',
          menuPrice: 3500,
          menuImg: "food4.png",
        },
        {
          menuId: 5,
          menuName: '제육김밥',
          menuPrice: 5500,
          menuImg: "food5.png",
        },
        {
          menuId: 6,
          menuName: '컵라면',
          menuPrice: 2000,
          menuImg: "food6.png",
        },
        {
          menuId: 7,
          menuName: '새우초밥',
          menuPrice: 5500,
          menuImg: "food7.png",
        },
        {
          menuId: 8,
          menuName: '연어초밥',
          menuPrice: 8500,
          menuImg: "food8.png",
        },
        {
          menuId: 9,
          menuName: '참치초밥',
          menuPrice: 9000,
          menuImg: "food9.png",
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Menus', null, {});
  }
};
