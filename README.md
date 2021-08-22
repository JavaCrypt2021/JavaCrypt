# JavaCrypt

## What is JavaCrypt?

JavaCrypt is an interactive and real-time cryptocurrency ticker that is used to display and plot cryptocurrency indexes.  By using [CoinGecko's API](https://www.coingecko.com/api/documentations/v3), we have been able to effectively GET prices, market caps, changes, and even gather median blockchain data.  With this data, we are able to display the fluctuation in a concise dashboard, alongside clickable functionality to plot certain data trends for various points of time.

## Intersting, but what is a Cryptocurrency?

Cryptocurrency is a form of payment that can be exchanged online for goods and services. Many companies have issued their own currencies, often called tokens, and these can be traded specifically for the good or service that the company provides. Think of them as you would arcade tokens or casino chips. You’ll need to exchange real currency for the cryptocurrency to access the good or service.  Cryptocurrencies work using a technology called blockchain. Blockchain is a decentralized technology spread across many computers that manages and records transactions. Part of the appeal of this technology is its security.  Detailed description credited to: [Nerdwallet](https://www.nerdwallet.com/article/investing/cryptocurrency-7-things-to-know).

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

[x] Set up API Key // Learn to Chart.js // Start Routing - > Code Review

Sprints 2- (8/14/21 - 8/21/2021)

[] Add additional Crypto Currencies // Finish Backend - > Code Review

Sprints 3 - (8/21/21 - 8/28/2021)

[] Finish Front end // Add Additional Calls -> Code Review
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

