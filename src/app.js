const express = require('express');
const app = express();
require('./db/conn');
const MenRanking = require('./model/athlete');
const MenRouting = require('./router/router');
const port = process.env.Port || 3000;
app.use(express.json());
app.use(MenRouting);

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
});