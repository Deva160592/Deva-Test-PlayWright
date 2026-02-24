const { request } = require('@playwright/test');

class APIContextManager {
  static async create() {
    return await request.newContext({
      baseURL: process.env.BASE_URL || 'https://petstore.swagger.io/v2',
      extraHTTPHeaders: {
        Accept: 'application/json'
      }
    });
  }
}

module.exports = APIContextManager;
