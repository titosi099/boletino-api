describe('Routes Users', () => {
  describe('Route GET /users', () => {
    it('Should return a list of users', () => {
      request
      .get('/users')
      .end((err, res) => {
        expect(res.body[0].id).to.be.eql(1);
      });
    });
  });
});
