app.get('/example', (req, res, next) => {
  console.log('첫번째 콜백 함수');
  next();
}, (req, res) => {
  res.send('두번째 콜백 함수');
});
