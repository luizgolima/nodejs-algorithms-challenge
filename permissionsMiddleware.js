const checkPermissions = (permission) => {
  return (req, res, next) => {
    const { id } = req.query;

    const user = data.find((d) => d.id == id);

    if (!user) {
      return res.status(404).send('User not found');
    }

    if (!user.permissions || !user.permissions.includes(permission)) {
      return res.status(403).send('Permission denied');
    }

    next();
  };
};

module.exports = checkPermissions;
