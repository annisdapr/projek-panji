const express = require('express');
const app = express(); 
const port = 3002; 
app.use(express.json());
// Buat Fungsi Untuk Login (Oauth dan JWT)
app.get('/api/resource', (req, res) => { 
    res.json({ message: 'Response from Service 2' }); 
});

app.listen(port, () => { 
    console.log(`Service 2 is running on port ${port}`); 
});