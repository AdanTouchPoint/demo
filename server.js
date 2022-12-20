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
  }
}); 

// Add your own express routes here

app.post('/send-email',async (req, res) => {
  try {
    console.log(req.query)
    const query = req.query
    // const data = await convertion.Convertion.create(submissionData)
    const email = await sendEmail.contact_email(query)
   //console.log(email)
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


}); 
app.post('/tweets',async (req, res) => {
  try {
    const query = req.query
    const tweets = await payload.find({
      collection: 'tweet-message', 
      sort: '-updatedAt',
      limit: 1,
      where: {
        clientId: {
          equals: query.clientId
        },
      },      
    });
    res.json({
        success: true,
        message: 'tweets found',
        data: tweets
    })
} catch (error) {
    res.status(400)
    res.json({
        success: false,
        message: error.message
    })
}
}); 

app.post('/main-content',async (req, res) => {
  try {
    const query = req.query
    const content = await payload.find({
      collection: 'main-page', 
      sort: '-updatedAt',
      limit: 1,
      where: {
        clientId: {
          equals: query.clientId
        },
      },      
    });
    res.json({
        success: true,
        message: 'pagecontent found',
        data: content
    })
} catch (error) {
    res.status(400)
    res.json({
        success: false,
        message: error.message
    })
}
}); 
app.post('/emails-content',async (req, res) => {
  try {
    const query = req.query
    const content = await payload.find({
      collection: 'emails', 
      sort: '-updatedAt',
      limit: 1,
      where: {
        clientId: {
          equals: query.clientId
        },
      },      
    });
    res.json({
        success: true,
        message: 'emails content found',
        data: content
    })
} catch (error) {
    res.status(400)
    res.json({
        success: false,
        message: error.message
    })
}
}); 

app.post('/typ-content',async (req, res) => {
  try {
    const query = req.query
    const content = await payload.find({
      collection: 'thank-you-message', 
      sort: '-updatedAt',
      limit: 1,
      where: {
        clientId: {
          equals: query.clientId
        },
      },      
    });
    res.json({
        success: true,
        message: 'typ content found',
        data: content
    })
} catch (error) {
    res.status(400)
    res.json({
        success: false,
        message: error.message
    })
}
}); 

app.post('/representatives',async (req, res) => {
  try {
    const query = req.query
    console.log(req.query)
    const content = await payload.find({
      collection: 'representatives', 
      sort: '-updatedAt',
      where: {
        clientId: {
          equals: query.clientId
        },
        and:[
          {
             postalcode: {
               equals: query.postalcode,
             },
          }
         ]
      },      
    });
    let data = content.docs
    console.log(data)

    res.json({
        success: true,
        message: 'typ content found',
        data: data
    })
} catch (error) {
    res.status(400)
    res.json({
        success: false,
        message: error.message
    })
}
}); 


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