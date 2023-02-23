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
      sended,
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
        sended: sended,
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
    console.log(query);
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
app.post("/email-builder", async (req, res) => {
  const query = req.query;
  try {
    //console.log(query.questions)
    let input =[]
      input.push({'user': JSON.parse(query.user),'questions': JSON.parse(query.questions)})
        console.log(input[0])
        let email = await sendEmail.emailBuilder(input[0])
        res.json({
            success: true,
            data: email
        })
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.post("/batch-email", async (req, res) => {
  try {
    const query = req.query;
    console.log(query);
    const email = await sendEmail.batch_email(query);
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
app.post("/state-email", async (req, res) => {
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
            state: {
              equals: query.state,
            },
          },
        ],
      },
    });
    let data = content.docs;
    let states = await data.map((el) => {
      return el.contact;
    });
    let contact = [...new Set(states)];
    let strings = contact.toString();
    query.to = strings;
    console.log(query);
    const email = await sendEmail.batch_email(query);
    //console.log(query)
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
            state: {
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

app.get("/all-representatives", async (req, res) => {
  try {
    console.log("here");
    const query = req.query;
    const content = await payload.find({
      collection: "diputados-y-senadores",
      sort: "-updatedAt",
      limit: 0,
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

const getDivision = async (clientId, division) => {
  let mps = await payload.find({
    collection: "senators-and-mps",
    sort: "-updatedAt",
    depth: 0,
    limit: 0,
    where: {
      clientId: {
        equals: clientId,
      },
      and: [
        {
          electorates: {
            equals: division,
          },
        },
      ],
    },
  });
  return mps;
};
const getElectorate = async (clientId, postcode) => {
  const content = await payload.find({
    collection: "electorates",
    sort: "-updatedAt",
    depth: 0,
    where: {
      clientId: {
        equals: clientId,
      },
      and: [
        {
          postcode: {
            equals: postcode,
          },
        },
      ],
    },
  });
  let data = content.docs;
  return data;
};
app.get("/find-mp", async (req, res) => {
  try {
    const query = req.query;
    let resp = [];    
    let statesFilter = [];
    console.log(query);
    const data = await getElectorate(query.clientId, query.postcode);
    console.log(data.length)
    if (data.length === 0 ) { 

      console.log('hola')
      return res.json({
        message:'Postal Code has not Found',
        data:data,statesFilter,
        success:true
      })
    }
    await Promise.all(
      data.map((el) => {
        let request = getDivision(el.clientId, el.division);
        return request;
      })
    )
      .then((request) => {
        resp = request.map((el) => {
          return el.docs;
        });
      })
      .then(async () => {
        const states = await payload.find({
          collection: "senators-and-mps",
          sort: "-updatedAt",
          depth: 0,
          limit: 0,
          where: {
            clientId: {
              equals: resp[0][0].clientId,
            },
            and: [
              {
                state: {
                  equals: resp[0][0].state,
                },
              },
            ],
          },
        });
        let response = states.docs;
        statesFilter = response.filter(
          (senator) => senator.govt_type === "Federal Senators"
        );
      });
      res.json({
        success: true,
        message: "all representatives found",
        data: resp,
        statesFilter
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
