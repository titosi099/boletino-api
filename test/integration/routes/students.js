describe('Routes Students', () => {
  const Students = app.db.models.Students;
  const defaultStudent = {
    id: 1,
    name: 'Suricate Seboso',
  };

  beforeEach((done) => {
    Students.destroy({ where: {} })
    .then(() => Students.create(defaultStudent))
    .then(() => done());
  });

  describe('Route GET /students', () => {
    it('Should return a list of students', (done) => {
      request
      .get('/students')
      .end((err, res) => {
        expect(res.body[0].id).to.be.eql(defaultStudent.id);
        expect(res.body[0].name).to.be.eql(defaultStudent.name);
        done();
      });
    });
  });
  describe('Route GET /students/{id}', () => {
    it('Should return a student', (done) => {
      request
      .get('/students/1')
      .end((err, res) => {
        expect(res.body.id).to.be.eql(defaultStudent.id);
        expect(res.body.name).to.be.eql(defaultStudent.name);
        done();
      });
    });
  });
});
