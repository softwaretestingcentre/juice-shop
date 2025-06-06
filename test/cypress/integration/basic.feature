Feature: Basic navigation

  Scenario: Open Juice Shop
    Given Haxxor goes to the Juice Shop
    When she selects "Apple Juice"
    Then she can see the details include "The all-time classic"