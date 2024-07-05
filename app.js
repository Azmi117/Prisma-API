require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const routerUser = require('./src/routes/UserRoutes');


app.use(express.json());
app.use('/users', routerUser);


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
})