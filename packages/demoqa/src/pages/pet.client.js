const fs = require('fs');

class PetClient {
  constructor(apiContext) {
    this.apiContext = apiContext;
  }

  async uploadPetImage(petId, filePath, metadata) {
    return await this.apiContext.post(`/pet/${petId}/uploadImage`, {
      multipart: {
        additionalMetadata: metadata,
        file: {
          name: filePath,
          mimeType: 'image/png',
          buffer: fs.readFileSync(filePath)
        }
      }
    });
  }
}

module.exports = PetClient;
