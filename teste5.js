const data = require('./fakeData');

module.exports = function (req, res) {
  const name = req.query.name;

  const userCount = data.reduce((count, user) => {
    if (user.name === name) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);

  res.send(`Usuário ${name} foi lido ${userCount} vezes.`);
};
