'use strict';

/**
 * recipe-version service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recipe-version.recipe-version');
