Feature: Student Registration Form

  Scenario Outline: Fill in the student registration form
    When I navigate to the student registration form page
    When user enters "<firstname>","<lastname>","<email>","<gender>","<mobile>", "<dob>","<Subject>","<hobbies>","<pictures>","<address>","<state>","<city>"
  When user submits the registration form
  When registration should be successful "<firstname>","<lastname>","<email>","<gender>","<mobile>", "<dob>","<Subject>","<hobbies>","<pictures>","<address>","<state>","<city>"

    Examples:
      | firstname | lastname | email               | gender | mobile     | dob        | Subject      | hobbies        | pictures       | address          | state   | city     |
      | John      | Doe      | john.doe@example.com | Male   | 1234567890 | 01 January,2000 | Maths  | Sports        | sample.jpg     | 123 Main St      | NCR         | Delhi   |

