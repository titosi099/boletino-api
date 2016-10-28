describe('Routes Users', () => {
  const Users = app.db.models.Users;
  const defaultUser = {
    id: 1,
    name: 'Roberio',
    email: 'roberio@mail.com',
    password: 'rea123',
  };

  beforeEach((done) => {
    Users.destroy({ where: {} })
    .then(() => Users.create(defaultUser))
    .then(() => done());
  });

  describe('Route GET /users', () => {
    it('Should return a list of users', (done) => {
      request
      .get('/users')
      .end((err, res) => {
        expect(res.body[0].id).to.be.eql(defaultUser.id);
        expect(res.body[0].name).to.be.eql(defaultUser.name);
        expect(res.body[0].email).to.be.eql(defaultUser.email);
        done();
      });
    });
  });
  describe('Route GET /users/{id}', () => {
    it('Should return a user', (done) => {
      request
      .get('/users/1')
      .end((err, res) => {
        expect(res.body.id).to.be.eql(defaultUser.id);
        expect(res.body.name).to.be.eql(defaultUser.name);
        expect(res.body.email).to.be.eql(defaultUser.email);
        done();
      });
    });
  });
});
