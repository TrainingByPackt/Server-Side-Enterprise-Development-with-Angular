'use strict';

const disabledMethods = [
  'create',
  'createChangeStream',
  'deleteById',
  'exists',
  'findOne',
  'patchOrCreate',

  'prototype.__create__posts',
  'prototype.__delete__posts',
  'prototype.__destroyById__posts',
  'prototype.__updateById__posts',

  'prototype.patchAttributes',
  'prototype.exists',

  'replaceById',
  'replaceOrCreate',
  'update',
  'upsert',
  'upsertWithWhere',
]

module.exports = (Profile) => {

  disabledMethods.forEach(method => Profile.disableRemoteMethodByName(method))

  Profile.observe('loaded', (ctx, next) => {
    if (ctx.data && ctx.data.firstName && ctx.data.lastName) {
      ctx.data.fullName = `${ctx.data.firstName} ${ctx.data.lastName}`
    }
    return next()
  });

};
