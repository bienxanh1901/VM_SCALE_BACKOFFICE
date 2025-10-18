'use strict';

/**
 * scheduled-job controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::scheduled-job.scheduled-job');
