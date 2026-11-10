// Import the express library.
import express from 'express'
const app = express();
const port = 3000;

// Inside this file, set up a basic Express server that listens on a port (e.g., 3000) and logs a message to the console on startup.
app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`)
})

