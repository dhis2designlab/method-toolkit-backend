"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require("slugify");
const Boom = require("Boom");

const generateSlug = (data) => {
  if (data.title) {
    data.slug = slugify(data.title.toLowerCase());
  }
};

const isMinimumLarger = (min, max) => {
  return min > max;
};

const validateMinimumTime = (data) => {
  if (data.minimum_time && data.maximum_time) {
    const minimum = data.minimum_time;
    const maximum = data.maximum_time;

    if (isMinimumLarger(minimum, maximum)) {
      throw Boom.badRequest(
        "The maximum value cant't be lower than the minimum value."
      );
    }
  }
};

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      generateSlug(data);
      validateMinimumTime(data);
    },
    beforeUpdate: async (params, data) => {
      generateSlug(data);
      validateMinimumTime(data);
    },
  },
};
