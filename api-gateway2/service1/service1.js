const express = require('express');
const app = express(); 
const port = 3001;
const mysql = require('mysql');

// Buat API CRUD yang tersambung ke MySQL (ada rate limtting dan throttling)
// GET

// POST
// PUT
// DELETE
app.get('/api/resource', (req, res) => { 
    res.json({ message: 'Response dari Service 1' }); 
}); 
 
app.listen(port, () => { 
    console.log(`Service 1 sedang berjalan ${port}`); 
});