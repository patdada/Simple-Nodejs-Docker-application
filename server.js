'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Kudos to you all the Nov Cohort Team from Oghenekaro Oboido, This is me wishing you guys the best on the next stage of your career, You guys rock !! ');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
