# Cryptocurrency Price Scraper

This Node.js project scrapes the top 10 cryptocurrency prices from the CoinMarketCap website and serves the data in JSON format using an Express server.

## Features
Scrapes live cryptocurrency data from CoinMarketCap.
Extracts key data like rank, name, price, 24h change, 7d change, market cap, volume, and circulating supply for the top 10 cryptocurrencies.
Serves the data in JSON format via an Express server.

##Installation
Clone the repository:
cd crypto-scraper
Install dependencies:

npm install
Usage
Start the server:
node index.js
Access the data:
Once the server is running, go to http://localhost:3000/ to view the JSON data for the top 10 cryptocurrencies.

## Technologies Used
Node.js: Server-side JavaScript runtime.
Express: Web framework for creating the server.
Axios: HTTP client for making requests to the CoinMarketCap website.
Cheerio: Library for parsing and scraping HTML.
Project Structure
index.js: Main file containing the server and scraping logic.
Dependencies: Axios for making requests, Cheerio for parsing HTML, and Express for serving the data.

### Future Enhancements
Build a frontend to display the scraped data.
Add more data points, such as historical trends.
Implement caching to reduce the load on the CoinMarketCap website.
License
This project is licensed under the MIT License.
