const express = require('express');
const customerRoute = require('./routes/customer');
const productRoute = require('./routes/product');
const app = express();

app.use(express.json({
  limit: '50mb'
}));

app.listen(3000, () => {
  console.log('Server started, port 3000');
})

//customer 라우트 추가 & 기본 경로 /customer 사용
app.use('/customer', customerRoute);
//customer 라우트 추가 & 기본 경로 /product 사용
app.use('/product', productRoute);