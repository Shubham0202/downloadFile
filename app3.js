const express = require('express');
const path = require('path');

const app = express();
const PORT = 3003;


app.get('/', (req, res) => {
    res.send(`
        <h1>File Download Example</h1>
        <a href="/download">Download File</a>
    `);
});

// Route to download the file
app.get('/download', (req, res) => {
    const file = path.join(__dirname, 'example.txt'); // Path to your file
    res.download(file, 'downloaded-file.txt', (err) => {
        if (err) {
            console.error("Error downloading the file:", err);
            res.status(500).send("Could not download the file.");
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

