# CashOverflow

<img src="./cashoverflowIcon.png" width="100" />

## About

CashOverflow is a web app aimed at providing a simple, minimalist way to track your budget and transactions.

The app allows users to create budgets for different spending categories, see how much they've spent in each category this month and across previous months, and view trends and spending history from their accounts and credit cards.

### Contributors

- [Brandon Leafman](https://github.com/bleafman)
- [Doris Hui](https://github.com/dorishui)
- [Evelyn Binkard](https://github.com/evelynbinkard)
- [Garrett Welson](https://github.com/garrettwelson)
- [Jordan Dillard](https://github.com/Jordielove)
- [Kevin Bench](https://github.com/kbench09)
- [Mitchell Dill](https://github.com/MitchellDill)
- [Ross F. Calimlim](https://github.com/rcalimlim)

### Tech Stack

CashOverflow was primarily built using ReactJS on the Front End and a NodeJS/Express backend. Deployment was accomplished using Docker and AWS. Other key technologies used are listed below:

<img src="https://lh5.googleusercontent.com/rdAoVdYKOCnmtev6t7DJrEY7mG4iYsRPqeTH0Z-OrlsVmiea3q5SMtOGNSa7HzJcyxcIcelTacG5gPNgyBoIviiNcLbohQAicvpldcfM32Klb_ewouDRd67OtYhUAU1CEZB4rBqB" width="100" />
<img src="https://lh6.googleusercontent.com/tKlT8lGB2bTDqSilr_a2y8vaO-QBUdcUIYASnslf-RAKTxUEiEBq-_gTVBP0irIP1ZWNuSvp1fouOJrQBXUr0joVmBZzNyOec4jBpOyVogPZMOYhPH6YQwYOiLdZnfuaDnFel9rn" width="100" />
<img src="https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png" width="100">
<img src="https://camo.githubusercontent.com/a3d5d65f55fd84b8401db7336ebe85506f069ca6/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f707150525779434d75333943553447414552483358493066726932754a7a4d7465495635742d34714147353636494a576458524142784c6a56316a7764567649442d4e76467733555367794d3846584335775f7941696d597a344659316756456d39365964324a515a682d70596c33336c4870624f49372d332d75546978716758315848526b6572" width="100">
<img src="https://miro.medium.com/max/642/1*ReJCeRt3UrdFp65T8mWs1A.png" width="100">
<img src="https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Moby-logo.png?itok=sYH_JEaJ" width="100">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/150px-Amazon_Web_Services_Logo.svg.png" width="100">
<img src="https://cloud.mongodb.com/static/images/mdb_logo.svg" width='100'/>

### Technical Challenges / Research

Some challenges we ran into while building the app:

- Balancing speed of development with best practices -- we made some good choices here to slow things down in the Git workflow and use Travis and work with an existing component library for styling but other choices ended up biting us. Implementing the logic for computing balances and budgets client side and greedily pulling all account data into state ended up actually slowing development and brought unanticipated bugs.

- Authentication was a much larger undertaking than initially expected. Most of the components need to be authentication aware and/or render differently depending on authentication state. Took coordination across the team, lead to a lot of hard to test bugs, and the MVP build was still not production grade secure.

## Client Deliverables

Our team worked to meet the expectations of our primary user by organizing deliverables into user stories listed below:

- As a user, when I navigate to the app, I see a home page with the option to login page if they’re not already logged in
- Upon logging in, I want to be presented with my net account balance (checking account balance - credit card debt) and a form to record expenses/income
- Throughout the app, I want to see a horizontal navigation bar along the top with various options
- On the accounts page, I want to be able to see all of my accounts with their individual balances
- By default, I should see transactions for the current month only, there should be an easy selector to move between past months
- I want to be able to select an account and only see transactions associated with a particular account
- I should be able to add accounts
- On the budget page, the most important information to me is seeing how much money is currently remaining for each category.
- I should be able to see all of the expense categories that I have previously defined.
- I should also be able to see my current caps for each category, and expenditure toward those caps.
- On the trends page, I want to see filterable visualizations of my current and past spending.
- I should be able to see what percentage of my spending each category is currently making up.
- I should be able to see my spending habits on any given category visualized in a way I can easily understand.
- I should be able to compare my profile spending between any two months I select.
- When I navigate to the settings page, I should be able to see and change my contact information and preferences.

### Minimum Viable Product (MVP)

The MVP was asked to be an app where a user could see how much money they have currently, add transactions, and set a simple monthly budget.

### Workflow

We used an Agile workflow with Github's new Project feature to keep track of tickets/issues, milestones, and sprint progression.

The project tracking features also integrated very well with our Git workflow.

Our team used feature branches and had two reviewers required on all merges the the master branch(in addition to TravisCI) in order to ensure that we always had working code in the master branch.

### Future Features

Given time, we'd like to:

- Refactor financial calculations to happen on the server/database.
- The App state holds only user information, each page requests it's own information as needed (i.e. start to move towards lazy loading over greedy loading of information).
- Implement end to end testing with Selinium or Cypress.
- Full responsiveness for all pages (requires refactor to new visualization library)
- Production grade API authentication.
- Plaid API integration.
