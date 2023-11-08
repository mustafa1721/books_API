const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, connectionString } = require('./config');
const version = require('./package.json').version;
const { book } = require('./routers');

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!')).catch(err => {
    console.log(`Error occurred while connecting DB : ${err}`);
  });

app.use(express.json());
app.use('/book', book);

app.get('/', (req, res, next) => {
  console.log(`Application is up with version ${version}`);
})

app.listen(port || 8090, () => {
  console.log(`started listening at ${port || 8090}`);
})