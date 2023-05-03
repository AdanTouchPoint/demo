const {Router} = require('express');
const router = Router();
const processExcel = require("../controllers/convertToXls")
const sendEmail = require("../controllers/emailController");
const keywords = require("../controllers/restrictedWords.js");
const checker = require('../controllers/wordsCheck');

router.get("/xls-process", async (req, res) => {
    try {
      const { clientId } = req.query;
      const buffer  =  await processExcel.processExcel(clientId)
      // Verificar que el tamaño del archivo no exceda el límite permitido (en este ejemplo, 5 MB)
      const maxSize = 5 * 1024 * 1024; // 5 MB en bytes
      if (buffer.byteLength > maxSize) {
        throw new Error("El archivo generado es demasiado grande");
      }
        res.contentType('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.status(200)
        res.attachment('leads.xlsx')
        res.send(Buffer.from(buffer));
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
  });
  router.get("/send-email", async (req, res) => {
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
  router.get("/email-builder", async (req, res) => {
    const query = req.query;
    try {
     let email 
     let user = JSON.parse(query.user)
     let questions = JSON.parse(query.questions);
     const checkText = await checker(questions, keywords)
     if(checkText)
     {
      email = await sendEmail.emailBuilder(questions,user);
     }
      res.json({
        success: true,
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
  router.get("/email-batch", async (req, res) => {
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
  router.get("/email-state", async (req, res) => {
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

  module.exports = router