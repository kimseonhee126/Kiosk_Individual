
/* 
[일시]
23.09.23.토

[지금까지 한 내용 정리]
1. Table & DB
- DB 이름 : KIOSK_V2
- Table 이름 : Menus, Restaurants(테이블 총 2개)
- Table 관계 : 독립적인 관계 (KIOSK_V2 안에 Menus 테이블, Restaurants 테이블 존재합니다)

2. 구현한 내용
- 사용자가 'http://localhost:5000/restaurants'로 접속하면 모든 restaurants 목록과,
  restaurantMenu안에 문자열로 저장된 menuId값이 정수값으로 변환되어 2차원 배열로 response 전달
- 사용자가 'http://localhost:5000/menus'로 접속하면 모든 menus 목록들이 보여진다. (테스트용)

3. 궁금한 내용
- '/orders' 이 경로가 좀 헷갈립니다.
 */

const express = require('express');
const app = express();
const sequelize = require('sequelize');

const db = require('./models/index.js');

const { Menus, Restaurants } = db; // 변수명 수정

// 미들웨어 사용
app.use(express.json());

// 미들웨어 사용 -> Public 폴더를 정적 파일로 제공
app.use('/img', express.static('public/img'));

// 인트로 페이지
app.get('/', async (req, res) => {
    // 프론트에 물어봐야해
});

// '/restaurants' GET 요청
// 모든 restaurants 목록과 각 restaurants의 menu도 보이게 response 보낸다
app.get('/restaurants', async(req, res) => {
  try
  {
    // allMenus는 리스트로, eachMenus로 얻어진 각각의 배열을 저장해서 결과적으로 한 번에 response 보내기 위해 설정
    allMenus = [];
    // Restaurants를 response로 넘겨주기 위해 reqRestaurant 변수를 선언한다
    const reqRestaurant = await Restaurants.findAll();

    // Restaurants의 각 컬럼의 restaurantMenu 값을 특정하기 위해 eachMenus 변수를 선언한다
    // 그러면 eachMenus 변수에는 restaurantId, restaurantCategory, restaurantName, restaurantMenu 의 내용이 담긴 객체로 표현된다
    for (let i = 1; i < 4; i++)
    {
      let eachMenus = await Restaurants.findOne({
        where: { restaurantId: i },       // restaurantId가 무엇인지에 따라 결정
        attributes: ['restaurantMenu']    // restaurantMenu 이 정보만을 반환함
      });

      // eachMenusArray 배열에 저장
    const eachMenusArray = eachMenus.restaurantMenu.split(',').map(item => parseInt(item, 10)); // ',' 를 기준으로 나누고, 정수값으로 변환하여 eachMenusArray에 저장

    // 이렇게 되면 allMenus 변수에 2차원 배열로 저장된다
    allMenus.push(eachMenusArray);
    }
    // response 로 보낼 내용
    res.json({ reqRestaurant, allMenus });
  }
  // error 보여준다
  catch(err)
  {
      console.error("ERROR : ", err);
  }
});

app.get('/orders/:id', async(req, res) => {
  // 
});

// GET 요청으로 '/menus' 받을 때 -> 잘 작동되는지 확인해보려고 했습니다
app.get('/menus', async(req, res) => {
  try
  {
    const reqMenus = await Menus.findAll();
    res.json(reqMenus);
  }
  catch(err)
  {
    console.error("ERROR : ", err);
  }
});

// Running the Server: 포트번호는 5000
app.listen(5000, () => {
    console.log('Server is running on 5000');
});