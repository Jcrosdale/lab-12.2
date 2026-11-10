// Import the express library.
import express from 'express'

const app = express();
const port = 3000;
const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

app.get('/', (req, res) => {
    res.send("Home path")
});

// create a new GET route at the path /api/fun-fact.
app.get('/api/fun-fact', async (req, res) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`External API responded with status ${response.status}`);
        }

        const funFact = await response.json();

        res.json({ fact: funFact.text });
    } catch (error) {
        res.status(500)
    }
    
});

// Inside this file, set up a basic Express server that listens on a port (e.g., 3000) and logs a message to the console on startup.
app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`)
});

