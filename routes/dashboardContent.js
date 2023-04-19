const {Router} = require('express');
const router = Router();
const payload = require("payload");
const leadController = require("../controllers/leads")
const tweetController =  require("../controllers/tweet")
const mainContentController = require("../controllers/mainContent")
const emailMessageController = require("../controllers/emailMessage")
const typMessageController = require("../controllers/typMessage")
const representativesmxController = require("../controllers/representativesMX")
const representativesausController = require("../controllers/representativesAUS");
const questionsController = require("../controllers/questions")
/*
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
  */
  router.post("/leads", async (req, res) => {
    try {
      const query = req.query;
      const create = await leadController.createLeads(query)
      /*const post = await payload.create({
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
      });*/
      res.json({
        success: true,
        message: "leads created",
        data: create,
      });
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
  });
  router.get("/leads", async (req, res) => {
    try {
      const query = req.query;
      const allLeads = await leadController.getAllLeads(query)
    /*  const leads = await payload.find({
        collection: "conversiones",
        sort: "-updatedAt",
        limit: 0,
        depth: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      }); */
      res.json({
        success: true,
        message: "leads found",
        data: allLeads,
      });
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
  });
  router.get("/tweets", async (req, res) => {
    try {
      const query = req.query;
      const tweets = await tweetController(query)
     /* const tweets = await payload.find({
        collection: "tweets",
        sort: "-updatedAt",
        limit: 1,
        depth: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });*/
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
  router.get("/main", async (req, res) => {
    try {
      const query = req.query;
      const content = await mainContentController(query)
     /* const content = await payload.find({
        collection: "paginas-principales",
        sort: "-updatedAt",
        limit: 1,
        depth: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });*/
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
  router.get("/email-message", async (req, res) => {
    try {
      const query = req.query;
      console.log(query)
      const content = await emailMessageController(query)
     /* const content = await payload.find({
        collection: "emails",
        sort: "-updatedAt",
        limit: 1,
        depth: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });*/
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
  router.get("/typ-message", async (req, res) => {
    try {
      const query = req.query;
      const content = await typMessageController(query)
      /*const content = await payload.find({
        collection: "mensaje-de-agradecimientos",
        sort: "-updatedAt",
        limit: 1,
        depth: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });*/
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
  router.get("/representatives", async (req, res) => {
    try {
      const query = req.query;
      const content = await representativesmxController.representativesmxByCP(query)
     /* const content = await payload.find({
        collection: "diputados-y-senadores",
        sort: "-updatedAt",
        depth: 0,
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
      });*/
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
  router.get("/representatives-state", async (req, res) => {
    try {
      const query = req.query;
      const content = await representativesmxController.representativesmxByState(query)
      /*const content = await payload.find({
        collection: "diputados-y-senadores",
        sort: "-updatedAt",
        depth: 0,
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
      });*/
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
  router.get("/all-representatives", async (req, res) => {
    try {
      console.log("here");
      const query = req.query;
      const content = await representativesmxController.getAll(query)
      /*const content = await payload.find({
        collection: "diputados-y-senadores",
        sort: "-updatedAt",
        limit: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });*/
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
  router.get("/all-senators", async (req, res) => {
    try {
      console.log("here");
      const query = req.query;
      const content = await representativesausController.getAll(query)
     /* const content = await payload.find({
        collection: "senators-and-mps",
        sort: "-updatedAt",
        limit: 0,
        depth: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });*/
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
  router.get("/find-mp", async (req, res) => {
    try {
      const query = req.query;
      let resp = [];
      let statesFilter = [];
      console.log(query);
      const data = await representativesausController.getElectorate(query);
      console.log(data);
      if (data.length === 0) {
        console.log("hola");
        return res.json({
          message: "Postal Code has not Found",
          data: data,
          statesFilter,
          success: true,
        });
      }
      await Promise.all( 
          data.map(async  (el) => {
          let request = await representativesausController.getDivision(el);
          return request;
        })
      ).then((request) => {
          resp = request.map((el) => {
            return el;
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
        statesFilter,
      });
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
  });
  router.get("/questions", async (req, res) => {
    try {
      const query = req.query;
      const content = await questionsController(query)
      /*const content = await payload.find({
        collection: "questions",
        sort: "-updatedAt",
        limit: 1,
        depth: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });*/
      res.json({
        success: true,
        message: "questions content found",
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
  module.exports = router