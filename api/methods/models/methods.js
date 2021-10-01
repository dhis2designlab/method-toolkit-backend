'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

 const slugify = require("slugify");
 
 const generateSlug = (data) => {
   if (data.title) {
     data.slug = slugify(data.title.toLowerCase());
   }
 };
 
 module.exports = {
   lifecycles: {
     beforeCreate: async (data) => {
       generateSlug(data);
     },
     beforeUpdate: async (params, data) => {
       generateSlug(data);
     },
   },
};