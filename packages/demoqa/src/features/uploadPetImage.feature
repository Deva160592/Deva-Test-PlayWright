Feature: Upload pet image API

  As an API user
  I want to upload images for different pets
  So that the image is stored successfully

  Scenario Outline: Upload pet image successfully
    Given I have pet id <petId>
    When I upload image "<filePath>" with metadata "<metadata>"
    Then the response status should be <statusCode>
    And response message should contain "<expectedMessage>"

    Examples:
      | petId  | filePath               | metadata        | statusCode | expectedMessage |
      | 123456 | test-data/sample.png   | test upload     | 200        | File uploaded   |
     # | 999999 | test-data/sample.png   | another upload  | 200        | File uploaded   |
