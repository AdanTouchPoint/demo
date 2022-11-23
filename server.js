const express = require('express');
const payload = require('payload');
const cors = require('cors')
require('dotenv').config();
const app = express();


app.use(cors({origin: '*'}))
const PORT =  process.env.PORT
// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
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

const server = app.listen(PORT);

const io = require('socket.io')(server, {
  cors: {
      origin: '*',
  }
});

 io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("disconnect", () => {
      console.log("USER DISCONNECTED");
  });
}); 

module.exports = io 