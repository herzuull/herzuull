module.exports = function(req, res, next) {
  return res.render(`../front/pages/${res.page}`, res.locals);
};
