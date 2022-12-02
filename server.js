const express = require('express');
const payload = require('payload');
const cors = require('cors')
const sendEmail = require('./controllers/emailController')
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
/*  email: {
    transportOptions: {
      host: process.env.SMTP_HOST,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      port: 1025,
      secure: true, // use TLS
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
        }
      },
    fromName: 'hello',
    fromAddress: 'contact@touchpoint-intl.com'
  },*/
});

// Add your own express routes here

/*app.post('/send-email',async (req, res) => {
  try {
    console.log(req.query)
    const query = req.query
    // const data = await convertion.Convertion.create(submissionData)
    const email = await  sendEmail.contact_email(query)
   console.log(email)
    res.json({
        success: true,
        message: 'Email Sent',
        data: email
    })
} catch (error) {
    res.status(400)
    res.json({
        success: false,
        message: error.message
    })
}


}); */

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