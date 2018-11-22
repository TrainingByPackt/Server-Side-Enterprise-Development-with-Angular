'use strict';

const disabledMethods = [
  'create',
  'createChangeStream',
  'deleteById',
  'exists',
  'findOne',
  'paginate',
  'patchOrCreate',

  'prototype.patchAttributes',
  'prototype.exists',

  'replaceById',
  'replaceOrCreate',
  'update',
  'upsert',
  'upsertWithWhere',
]

const baseFilter = {
  order: 'date desc',
  include: 'profile',
}

module.exports = function (Post) {

  disabledMethods.forEach(method => Post.disableRemoteMethodByName(method))

  // This is a static method that lives on the Post model
  Post.timeline = (filter = {}) => {
    const effectiveFilter = Object.assign(filter, baseFilter)
    const start = process.hrtime()

    return Post.paginate(effectiveFilter)
      .then(res => {
        const time = process.hrtime(start)
        return Object.assign(res, { time: `${time[0]}.${time[1]}` })
      })
  }

  // We defined the remote method on the module to make it available over REST
  Post.remoteMethod('timeline', {
    accepts: {arg: 'filter', type: 'object'},
    returns: {arg: 'result', type: 'object', root: true},
    http: { verb: 'get' },
  })

  // This is a static method that lives on the Post model
  Post.search = (q = '', filter = {}) => {
    const minLength = 1
    if (q.length < minLength) {
      const err = new Error()
      err.statusCode = 400
      err.message = `Search query must be longer than ${minLength} character`
      return Promise.reject(err)
    }

    const terms = q.split(' ')

    const and = terms.map(term => {
      return { text: { ilike: `%${term.toLowerCase()}%` } }
    })

    const where = { and }

    const effectiveFilter = Object.assign(filter, { where })

    return Post.timeline(effectiveFilter)
      .then(res => Object.assign(res, { query: q }))
  }

  // We defined the remote method on the module to make it available over REST
  Post.remoteMethod('search', {
    accepts: [
      { arg: 'q', type: 'string' },
      { arg: 'filter', type: 'object' },
    ],
    returns: { arg: 'result', type: 'object', root: true },
    http: { verb: 'get' },
  })

};
