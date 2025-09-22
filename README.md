Hackathon Idea: Identify New Bikes

Problem Statement
1. Homepage Accessibility Check
Launch a browser and navigate to zigwheels.com to verify:
The homepage loads correctly
The site is accessible for automation

2. Navigation Flow Validation
Interact with the UI by:
Clicking on “New Bikes”
Selecting “Upcoming”

3. Identify Upcoming Honda Bikes
Extract and display upcoming bike details in India with the following filters:
Manufacturer: Honda
Price: Less than ₹4,00,000

Details to extract:
Bike Name
Expected Price
Expected Launch Date

Suggested source: zigwheels.com

4. Input Validation for Seller Form
Verify that entering an invalid mobile number in the "View Seller Details" form:
Triggers the correct error message
Prevents the “Get OTP” button from being enabled

5. Popular Used Cars in Chennai
Navigate to the used cars section for Chennai and extract:
Names of popular used car models

Suggested source: zigwheels.com

6. Upcoming Cars Page Verification
Navigate to the “Upcoming Cars” tab and verify:
The correct page URL is loaded

7. Price Sorting Validation
Apply the "Low to High" price filter on the Upcoming Cars page and validate:
That displayed car prices are sorted in ascending order

Automation Scope:
Launching and navigating browser sessions
Handling windows and frames
Filling and validating form inputs
Capturing warning and error messages
Extracting menu items and dynamic content
Navigating through multi-level UI flows
Verifying sorting and filtering logic

Tech Stack:
Automation Framework: Cypress
Language: JavaScript