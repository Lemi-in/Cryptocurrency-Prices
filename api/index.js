// Desc: This file contains the code to scrape the data from the coinmarketcap website and display the data in JSON format.

// Importing the required modules
// axios is used to make HTTP requests
const axios = require("axios")
// cheerio is used to parse the HTML content
const cheerio = require("cheerio")
// express is used to create the server
const express = require("express")

// create an empty array to store the data

const array = []
// create a function to get the prices of the top 10 cryptocurrencies
async function getPrices(){
    try {

        // URL of the website to scrape
        const Url = 'https://coinmarketcap.com/'

        // Make a GET request to the URL
        const {data} = await axios ({
            method: "GET",
            url : Url,
        })
        console.log(data)
        const $ = cheerio.load(data)
        // Selector for the table containing the data
        const elemSelector = '#__next > div.sc-2e66506f-1.buMEwe.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-7b3ac367-2.cFnHu > table > tbody > tr'
        // Array to store the keys of the data
        const keys = ['rank', 'name','price','24h','7d','marketCap','volume', 'circulatingSupply']

        // Loop through each element in the table and extract the data
        $(elemSelector).each((parentIdx, parentElem) => {  
            let index = 0
            const coin = {}
            // Loop through each child element in the table row
            if(parentIdx <= 9){
                $(parentElem).children().each((childIdx, childElem) => {
                    let val = $(childElem).text()
                // If the value is 1 or 6, extract the text from the first child element
                if(val === 1 || val === 6){
                    val = $('p:first-child',$(childElem).html()).text()
                }
                // else extract the text from the element if it is not empty
                if(val){
                    coin[keys[index]] = val
                    index++
                }
 
            })
            // insert the data to the array
            array.push(coin)
        }
    })
    // if there is an error, log the error || you can do something else here
    } catch (err) {
        console.log(err)
    }
    return array
}



// Create an express server
const app = express();
// Create a route to get the prices
app.get("/", async (req, res) => {
    try {
        // Call the getPrices function and store the result in the price variable
        const price = await getPrices()
        // Send the result in JSON format
        return res.status(200).json({
            result: price
        })
    // If there is an error, send the error message
    } catch (error) {
        return res.status(500).json({
            error: error.toString()
        })
    }
})

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
