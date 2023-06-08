const memberController = require('../controllers/memberController');

module.exports = app => {
  app
    .route('/members')
    .get(memberController.list_all_members)
    .post(memberController.create_a_member);

  app
    .route('/members/login')
    .post(memberController.login);

  app
    .route('/members/:memberId')
    .get(memberController.read_a_member)
    .put(memberController.update_a_member)
    .delete(memberController.delete_a_member);
};
