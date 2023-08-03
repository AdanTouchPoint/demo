const { Router } = require("express");
const router = Router();
const payload = require("payload");
const leadController = require("../controllers/leads");
const tweetController = require("../controllers/tweet");
const mainContentController = require("../controllers/mainContent");
const emailMessageController = require("../controllers/emailMessage");
const typMessageController = require("../controllers/typMessage");
const representativesmxController = require("../controllers/representativesMX");
const representativesausController = require("../controllers/representativesAUS");
const questionsController = require("../controllers/questions");
const Forms = require("../controllers/formController");

router.get("/representatives-aus-cp", async (req, res) => {
  try {
    const query = req.query;
    const content = await representativesausController.representativesAusByCP(
      query
    );
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
router.get("/forms", async (req, res) => {
  try {
    const query = req.query;
    const data = await Forms.Forms(query);
    console.log(data)
   /* const newData = [{
      "lenguage": confs.docs[0].lenguage.lenguage,
      "SearchBy": confs.docs[0].SearchBy.SearchBy,
      "sendMany": confs.docs[0].sendMany.sendMany,
      "region": confs.docs[0].region.region,
      "filter": confs.docs[0].filter.filter
    }] */
    res.json({
      success: true,
      message: "confs founded",
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
router.get("/confs", async (req, res) => {
  try {
    const query = req.query;
    const confs = await ConfsController.Confs(query);
    const newData = [{
      "lenguage": confs.docs[0].lenguage.lenguage,
      "SearchBy": confs.docs[0].SearchBy.SearchBy,
      "sendMany": confs.docs[0].sendMany.sendMany,
      "region": confs.docs[0].region.region,
      "filter": confs.docs[0].filter.filter
    }]
    res.json({
      success: true,
      message: "confs founded",
      data: newData,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
router.post("/leads", async (req, res) => {
  try {
    
    const query = req.query;
    console.log(req.query)
    const create = await leadController.createLeads(query);
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
    const allLeads = await leadController.getAllLeads(query);
    res.json({
      success: true,
      message: "leads found",
      data: allLeads.totalDocs,
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
    const tweets = await tweetController(query);
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
    const content = await mainContentController(query);
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
    const content = await emailMessageController(query);
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
    const content = await typMessageController(query);
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
router.get("/representatives-cp", async (req, res) => {
  try {
    const query = req.query;
    const content = await representativesmxController.representativesmxByCP(
      query
    );
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
    const content = await representativesmxController.representativesmxByState(
      query
    );
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
router.get("/representatives-party", async (req, res) => {
  try {
    const query = req.query;
    const content = await representativesmxController.representativesmxByParty(
      query
    );
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
    const query = req.query;
    console.log(query);
    const content = await representativesmxController.getAll(query);
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
    const query = req.query;
    const content = await representativesausController.getAll(query);
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
      data.map(async (el) => {
        let request = await representativesausController.getDivision(el);
        return request;
      })
    )
      .then((request) => {
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
              equals: resp[0][0]?.clientId ? resp[0][0]?.clientId : resp[1][0]?.clientId ,
            },
            and: [
              {
                state: {
                  equals: resp[0][0]?.state ? resp[0][0]?.state : resp[1][0]?.state ,
                },
              },
            ],
          },
        });
        let response = states.docs;
        statesFilter = response.filter(
          (senator) => senator.govt_type === "Federal Senators" || senator.govt_type === "State Senators"
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
    const content = await questionsController(query);

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
module.exports = router;