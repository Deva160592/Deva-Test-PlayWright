Feature: DemoQA Elements validation

  Scenario: Validate Text Box output
    Given user opens text box page
    When user submits text box form
    Then text box output should match entered values

  Scenario: Validate Radio Button selection
    Given user opens radio button page
    When user selects Yes option
    Then radio button result should be Yes

  Scenario: Validate Check Box selection
    Given user opens check box page
    When user selects Desktop checkbox
    Then selected checkbox result should be displayed

