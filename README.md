# JavaCrypt

## What is JavaCrypt?

JavaCrypt, as our objective, is an interactive and real-time cryptocurrency ticker that is used to display and plot cryptocurrency indexes.  By using [CoinGecko's API](https://www.coingecko.com/api/documentations/v3), we have been able to effectively GET prices, market caps, changes, and even gather median blockchain data.  With this data, we are able to display the fluctuation in a clean dashboard, alongside clickable functionality to plot certain data trends from various points of time.

## Interesting, but what is Cryptocurrency?

Cryptocurrency is a form of payment that can be exchanged online for goods and services. Many companies have issued their own currencies, often called tokens, and these can be traded specifically for the good or service that the company provides. Think of them as you would arcade tokens or casino chips. You’ll need to exchange real currency for the cryptocurrency to access the good or service.  Cryptocurrencies work using a technology called blockchain. Blockchain is a decentralized technology spread across many computers that manages and records transactions. Part of the appeal of this technology is its security.  Detailed description credited to: [Nerdwallet](https://www.nerdwallet.com/article/investing/cryptocurrency-7-things-to-know).

## Requirements

- The App shall call the API and retrieve last price.
- Retrieve a API Key from 3rd party
- The App shall be able to compare last price with previous price.
- Store previous price before calling last price.
- The App shall display the last price to the user.
- If Positive change, then green
- If negative change, then red
- The App front end shall display: Name, Logo, last price
- The App shall display market trends: on 1 day, 1 week, 1 month, 1 year

## Featured Coins
- Bitcoin (BTC)
- Ethereum (ETH)
- Binance Coin (BNB)
- Cardano (ADA)
- Tether (USDT)
- XRP (XRP)
- Dogecoin (DOGE)
- USD Coin (USDC)
- Polkadot (DOT)
- Solana (SOL)

## Sprints 

Sprints 1 - (8/07/21 - 8/14/2021)

- [x] Set up API Key // Learn to Chart.js // Start Routing - > Code Review

Sprints 2- (8/14/21 - 8/21/2021)

- [x] Add additional Crypto Currencies // Finish Backend - > Code Review

Sprints 3 - (8/21/21 - 8/28/2021)

- [ ] Finish Front end // Add Additional Calls -> Code Review


## Dependencies
- Node.js
- NPM
- React.js
- React-router/DOM
- Express.js
- Nodemon
- Chart.js
- CoinGecko API
- bcrypt
- Axios
- CORS

## External Platforms
- CoinGecko
- Heroku
- Github

## Routes

// Login and Authentication Routes //
- router.post("/")
- router.post("/signup")
- router.post("/logout")
- router.post("/password")

// Cryptocurrency Data Routes //
- router.get("/")
- router.post("/")
- router.get("/:id)
- router.put("/:id)
- router.delete("/:id)

## Deployment

[Found here at Heroku](https://still-shore-17113.herokuapp.com/)

## Overview of Project

Due to the nature of the project, it is rightful to assume that we may have bit off more than we can chew with the structure of the final project.  One of the largest tasks we faced was that the nature of retrieving data from a third-party API such as CoinGecko can be done and handled better through front-end fetch calls within React, making the documentation and instructions very difficult to access for Node.js routes.  Further more, using the GET method to call those respective Cryptocurrencies faced difficulty and clutter when trying to write such information at a fast speed to a MongoDB cluster.  It was a tough lesson that we had to overcome finding out how to make Node become responsive with the CoinGecko's API.  Another challenge we faced is integration with everyone's contribution to the project, as well as trying to connect the back and frontend with conflicting localhost ports.  However, using dependencies such as Chart.js and Axios created fantastic bootstrapped formatting to display a clean, yet, user friendly dashboard.  Having been able to do it differently (while focuing on the actual backend components per this course), we would have had more value being able to create a project that would enable users to collect and input their data via a POST routed system, similar to that of an input log styled app.  Not only would this solve the lack of routes to create, but it would have helped build a unique API rather than relying on the provided third party.  Current challenges include Heroku deployment reverting to only backend of the build and integration of rendering backend components to frontend.

