README FOR CRYPTO API
Objective: Create a ticker that will help plot Crypto currency market trends.

Requirements:
The App shall call the API and retrieve last price.
--Retrieve a API Key from 3rd party

The App shall be able to compare last price with previous price.
--Store previous price before calling last price.

The App shall display the last price to the user.
-- If Positive change, then green
--if negative change, then red

The App front end shall display:
Name, Logo, last price

The App shall display market trends.
on 1 day, 1 week, 1 month, 1 year

We will be dividing the tasks into 3 sprints. 
********************************************
Sprints 1 - (8/07/21 - 8/14/2021)

Set up API Key // Learn to Chart.js // Start Routing - > Code Review

Sprints 2- (8/14/21 - 8/21/2021)

Add additional Crypto Currencies // Finish Backend - > Code Review

Sprints 3-(8/21/21 - 8/28/2021)

3 Finish Front end // Add Additional Calls -> Code Review
********************************************

Dependencies:
React
Express
Nodemon
Chart.js // third party framework for creating chart data
Bootstrap 4
CoinGecko // Cryptocurrency API callback

********************************************

Routes:
-root
\
-index.js
--DAOs
---tickerCall.js
---chartData.js
--models
---ticker.js // API data display
---chart.js // chart.js plot
--middleware
---tickerCall.js
--routes
---app.js // using React to display the front-end
---ticker.js
---chart.js
