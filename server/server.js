const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const app = express()
app.use(cors())
const apiKey = process.env.API_KEY

port = 3000

app.get('/top-headlines', async (req, res) => {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        const response = await fetch(apiUrl)
        const data = await response.json()
        res.json(data)
    }
    catch (error) {
        console.error("Error")
        res.status(500).json({ error: "Error" })
    }
});



app.get('/news-day', async (req, res) => {
    try {
        const { query, language } = req.query;
        const fromDate = '2024-03-10'; 
        console.log("query:", query);
        console.log("language:", language);

        const fetch = await import('node-fetch');

        const apiUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=popularity&apiKey=${apiKey}`;

        const response = await fetch.default(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error" });
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})