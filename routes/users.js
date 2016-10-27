export default (app) => {
  const Users = app.db.models.Users;
  app.route('/users')
  .get((req, res) => {
    Users.findAll()
    .then(response => res.json(response));
  })
  .post((req, res) => {
    Users.create(req.body)
    .then((response) => {
      res.json(response);
      res.status(200);
    })
    .catch(() => res.status(412))
  });

  app.route('/users/:id')
  .get((req, res) => {
    Users.findOne({ where: req.params })
    .then(response => res.json(response))
  })
};
