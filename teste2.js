const data = require('./fakeData');

const createUser = (req, res) => {
  const { name, job } = req.body;

  const newUser = {
    name,
    job,
  };

  data.push(newUser);

  res.status(201).send(newUser);
};

module.exports = createUser;
