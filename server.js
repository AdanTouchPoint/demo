const express = require("express");
const payload = require("payload");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors({ origin: "*" }));
const PORT = process.env.PORT || 8080
// Redirect root to Admin panel
app.get('/', (req, res) => {
  if(req.headers.host === 'payload-demo-tpm.herokuapp.com'){
    res.redirect('https://app.overton.services/admin');
  } else {
    res.redirect('/admin');
  }
});
// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

const dashboardContent = require('./routes/dashboardContent')
app.use('/dashboardContent', dashboardContent)

const dashboardServices = require('./routes/dashboardServices')
app.use('/dashboardServices', dashboardServices)

app.listen(PORT);