import router from './routes/index';

const express = require('express');

const app = express();

const port = process.env.PORT || 7000;

router(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
