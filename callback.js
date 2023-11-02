const ex0 = (req, res, next) => {
  console.log('첫번째 콜백 함수');
  next();
};

const ex1 = (req, res, next) => {
  console.log('두번쨰 콜백 함수');
  next();
};

const ex2 = (req, res, next) => {
  res.send('세번째 콜백 함수');
};

app.get('/example', [ex0, ex1, ex2]);