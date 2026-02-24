const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const APIContextManager = require('../../pages/api.context');
const PetClient = require('../../pages/pet.client');

let apiContext;
let petClient;
let response;
let petId;

Given('I have pet id {int}', async function (id) {
  petId = id;
  apiContext = await APIContextManager.create();
  petClient = new PetClient(apiContext);
});

When(
  'I upload image {string} with metadata {string}',
  async function (filePath, metadata) {
    response = await petClient.uploadPetImage(petId, filePath, metadata);
  }
);

Then('the response status should be {int}', function (statusCode) {
  assert.strictEqual(response.status(), statusCode);
});

Then('response message should contain {string}', async function (expectedText) {
  const body = await response.json();
  assert(body.message.includes(expectedText));
});
