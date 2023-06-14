const data = require('./fakeData');
const checkPermissions = require('./permissionsMiddleware');

module.exports = function (req, res) {
  const hasCreatePermission = checkPermissions('create');

  hasCreatePermission(req, res, () => {
    const { name, job } = req.body;
    const newUser = { name, job };
    data.push(newUser);

    res.send('success');
  });
};
