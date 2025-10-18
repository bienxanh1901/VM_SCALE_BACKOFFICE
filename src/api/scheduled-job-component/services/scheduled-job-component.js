'use strict';

/**
 * scheduled-job-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scheduled-job-component.scheduled-job-component');
