🎰 SpinBet QA Automation Suite
📌 Project Overview
This automation project tests essential user flows for SpinBet Stage, specifically:

✅ User Registration — both valid and invalid inputs

🎯 Game Search — verify search functionality is returning correct results

🕹 Game Launch — validate that games open and display correctly

Built using Playwright and structured with the Page Object Model (POM) for clean, maintainable test logic.

❗ Problem & Solution
🔧 Problem
Manually testing registration, game search, and launch is:
Time-consuming and repetitive
Prone to human error
Hard to maintain as the site grows

✅ Solution
This suite uses Playwright automation with POM to:
Simulate real-user interactions across key flows
Validate content and behavior using fast, repeatable tests
Speed up regression testing without relying on manual checks


 🧰 Tech Stack & Justification
| **Component** | **Choice**              | **Reasoning**                                                      |
| ------------- | ----------------------- | ------------------------------------------------------------------ |
| Test Runner   | Playwright              | Fast, reliable, supports modern apps and iframe handling           |
| Language      | JavaScript (ES6)        | Simple syntax and native Playwright support                        |
| Architecture  | Page Object Model (POM) | Separates locators/actions, improves reusability & maintainability |
| Assertions    | Playwright `expect`     | Built-in, expressive, and reliable                                 |

📦 spinbet-qa-automation
 ┣ 📂 pages                 # Page Object Models
 ┃ ┣ 📜 HomePage.js
 ┃ ┣ 📜 CountryAndCurrency.js
 ┃ ┗ 📜 AccountDetails.js
 ┣ 📂 tests                 # Test specs
 ┃ ┣ 📜 registration.spec.js
 ┃ ┣ 📜 searchGame.spec.js
 ┃ ┗ 📜 launchGame.spec.js
 ┣ 📂 data                  # Test data
 ┃ ┗ 📜 registrationData.json
 ┣ 📜 playwright.config.js  # Playwright config
 ┣ 📜 package.json
 ┗ 📜 README.md             # Project documentation

 
## 🚀 How to Run

```bash
# Install project dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npx playwright test

# Run a specific test
npx playwright test tests/registration.spec.js

# Open the HTML report
npx playwright show-report

🧪 Test Coverage
✅ Registration
Valid data input
Invalid/missing field checks
Error message validation

🔍 Game Search
Enter game title in search bar
Confirm correct results are displayed

🕹 Game Launch
Click game from results
Confirm URL
Check iframe/canvas loads successfully

🎯 Why Page Object Model?
Using POM ensures:

✅ Code Reusability — Actions/locators reused across tests

✅ Maintainability — Changes to UI only require updates in one place

✅ Scalability — Easily add new flows as needed

🙋 Author
Roy Mangalindan

