const express = require("express");
const payload = require("payload");
const cors = require("cors");
const sendEmail = require("./controllers/emailController");
require("dotenv").config();
const app = express();

app.use(cors({ origin: "*" }));
const PORT = process.env.PORT;
// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
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
app.post("/leads", async (req, res) => {
  try {
    const query = req.query;
    const {
      firstName,
      postalcode,
      emailData,
      representative,
      emailMessage,
      city,
      party,
      clientId,
    } = query;
    const post = await payload.create({
      collection: "conversiones", // required
      data: {
        // required
        names: firstName,
        postalcode: postalcode,
        contact: emailData,
        representative: representative,
        emailMessage: emailMessage,
        city: city,
        party: party,
        clientId: clientId,
      },
      overrideAccess: true,
    });
    res.json({
      success: true,
      message: "leads created",
      data: post,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/leads", async (req, res) => {
  try {
    const query = req.query;
    const tweets = await payload.find({
      collection: "conversiones",
      sort: "-updatedAt",
      where: {
        clientId: {
          equals: query.clientId,
        },
      },
    });
    res.json({
      success: true,
      message: "leads found",
      data: tweets,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});

app.post("/send-email", async (req, res) => {
  try {
    const query = req.query;
    const email = await sendEmail.contact_email(query);
    res.json({
      success: true,
      message: "Email Sent",
      data: email,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.post("/tweets", async (req, res) => {
  try {
    const query = req.query;
    const tweets = await payload.find({
      collection: "tweets",
      sort: "-updatedAt",
      limit: 1,
      where: {
        clientId: {
          equals: query.clientId,
        },
      },
    });
    res.json({
      success: true,
      message: "tweets found",
      data: tweets,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});

app.post("/main-content", async (req, res) => {
  try {
    const query = req.query;
    const content = await payload.find({
      collection: "paginas-principales",
      sort: "-updatedAt",
      limit: 1,
      where: {
        clientId: {
          equals: query.clientId,
        },
      },
    });
    res.json({
      success: true,
      message: "pagecontent found",
      data: content,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.post("/emails-content", async (req, res) => {
  try {
    const query = req.query;
    const content = await payload.find({
      collection: "emails",
      sort: "-updatedAt",
      limit: 1,
      where: {
        clientId: {
          equals: query.clientId,
        },
      },
    });
    res.json({
      success: true,
      message: "emails content found",
      data: content,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});

app.post("/typ-content", async (req, res) => {
  try {
    const query = req.query;
    const content = await payload.find({
      collection: "mensaje-de-agradecimientos",
      sort: "-updatedAt",
      limit: 1,
      where: {
        clientId: {
          equals: query.clientId,
        },
      },
    });
    res.json({
      success: true,
      message: "typ content found",
      data: content,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});

app.post("/representatives", async (req, res) => {
  try {
    const query = req.query;
    const content = await payload.find({
      collection: "diputados-y-senadores",
      sort: "-updatedAt",
      where: {
        clientId: {
          equals: query.clientId,
        },
        and: [
          {
            postalcode: {
              equals: query.postalcode,
            },
          },
        ],
      },
    });
    let data = content.docs;
    res.json({
      success: true,
      message: "representatives found",
      data: data,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.get("/representatives-state", async (req, res) => {
  try {
    const query = req.query;
    const content = await payload.find({
      collection: "diputados-y-senadores",
      sort: "-updatedAt",
      where: {
        clientId: {
          equals: query.clientId,
        },
        and: [
          {
            postalcode: {
              equals: query.state,
            },
          },
        ],
      },
    });
    let data = content.docs;
    res.json({
      success: true,
      message: "representatives found",
      data: data,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/allRepresentatives", async (req, res) => {
  try {
    const query = req.query;
    const content = await payload.find({
      collection: "diputados-y-senadores",
      sort: "-updatedAt",
      where: {
        clientId: {
          equals: query.clientId,
        },        
      },
    });
    let data = content.docs;
    res.json({
      success: true,
      message: "all representatives found",
      data: data,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(PORT);
