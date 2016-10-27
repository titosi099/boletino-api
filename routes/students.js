export default (app) => {
  const Students = app.db.models.Students;

  app.route('/students')
  .get((req, res) => {
    Students.findAll()
    .then(response => res.json(response));
  })
  .post((req, res) => {
    Students.create(req.body)
    .then((response) => {
      res.status(200);
      res.json(response);
    });
  });

  app.route('/students/:id')
  .get((req, res) => {
    Students.findOne({ where: req.params })
    .then(response => res.json(response));
  })
  .put((req, res) => {
    Students.update(req.body, { where: req.params })
    .then(response => res.json(response));
  })
  .delete((req, res) => {
    Students.destroy({ where: req.params })
    .then(() => res.sendStatus(204));
  });
};
