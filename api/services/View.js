function View (options) {
  if (!options.res) throw new Error('ERROR : Res is missing !');
  if (!options.view) throw new Error('ERROR : view is missing !');
  if (!options.locals) throw new Error('ERROR : locals is missing !');
  options.res.render(options.view + '.html', options.locals);
}

module.exports = View;
