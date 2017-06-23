module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/postsMde');
  });
  app.use('/posts', require('./posts'));
  app.use('/postsMde', require('./postsMde'));

  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.status(404).render('404');
    }
  });
};
