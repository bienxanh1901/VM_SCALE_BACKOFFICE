'use strict';

/**
 * scheduled-job service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scheduled-job.scheduled-job');
