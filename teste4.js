const data = require('./fakeData');
const checkPermissions = require('./permissionsMiddleware');

module.exports = function (req, res) {
  const hasDeletePermission = checkPermissions('delete');

  hasDeletePermission(req, res, () => {
    const id = req.query.id;
    const index = data.findIndex((user) => user.id == id);

    if (index !== -1) {
      data.splice(index, 1);
      res.send('success');
    } else {
      res.status(404).send('User not found');
    }
  });
};
