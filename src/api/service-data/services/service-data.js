'use strict';

/**
 * service-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-data.service-data');
