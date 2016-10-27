describe('Routes Students', () => {
  describe('Route /students', () => {
    it('Should return a list of students', () => {
      request
      .get('./students')
      .end((err, res) => {
        expect(res.body[0].id).to.be.eql(1);
      });
    });
  });
});
