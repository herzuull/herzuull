let { markSafe } = require('nunjucks').runtime
const marked = require('marked')
let CircularJSON = require('circular-json')

module.exports = {
  init(env) {
    const truncate = env.getFilter('truncate')
    const replace = env.getFilter('replace')
    env.addFilter('i18n', function(txt) {
      return this.ctx.__(txt)
    })

    env.addFilter('html', function(val) {
      if (!val) return ''
      // TODO make this a specic markdown helper
      if (typeof val === 'string') return marked(val)
      return html(val)
    })

    env.addFilter('html', function(val) {
      if (!val) return ''
      // TODO make this a specic markdown helper
      if (typeof val === 'string') return marked(val)
      return html(val)
    })

    env.addFilter('json', (data, indentor, indents) =>
      markSafe(CircularJSON.stringify(data, indentor, indents))
    )

    env.addFilter('truncate', function(data, max, killwords, end) {
      if (!data) return ''
      return truncate(data, max, killwords, end)
    })

    env.addFilter('replace', function(str, old, new_, maxCount) {
      if (!str) return ''
      return replace(str, old, new_, maxCount)
    })
  },
}
