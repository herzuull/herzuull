// 404 Controller
module.exports = function(req, res, next) {
  res.status(404)
  res.render('pages/404', Object.assign(results, { path: getPathUrl(req.path) }))
}

function getPathUrl(path) {
  let retrievePath = path.split('/')
  return retrievePath && retrievePath.length
    ? retrievePath[retrievePath.length - 1].replace(/-/g, ' ')
    : ''
}
