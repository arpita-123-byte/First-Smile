const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Path to your WEB1 folder containing D1, D2, ..., D33
const baseFolder = path.join(__dirname, 'WEB1');

// Dynamically serve subdirectories in WEB1
const subdirectories = fs.readdirSync(baseFolder).filter((dir) =>
    fs.statSync(path.join(baseFolder, dir)).isDirectory()
);

subdirectories.forEach((subdir) => {
    const subdirPath = path.join(baseFolder, subdir);
    app.use(`/${subdir}`, express.static(subdirPath));
    console.log(`Serving directory: ${subdir} at /${subdir}`);
});

// Default route to show available directories
app.get('/', (req, res) => {
    const links = subdirectories
        .map((subdir) => `<li><a href="/${subdir}">${subdir}</a></li>`)
        .join('');
    res.send(`<h1>Available Projects:</h1><ul>${links}</ul>`);
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});