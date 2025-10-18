'use strict';

/**
 * scheduled-job router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::scheduled-job.scheduled-job');
