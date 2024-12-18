const { Router } = require("express");
const router = Router();
const processExcel = require("../controllers/convertToXls");
const sendEmail = require("../controllers/emailController");
const keywords = require("../controllers/restrictedWords.js");
const checker = require("../controllers/wordsCheck");
const {verify} = require("../controllers/kenttaVerify.js");
const {verifyEmail} = require("../controllers/thermoEmailVerifier.js")

router.get("/xls-process", async (req, res) => {
  try {
    const { clientId } = req.query;
    const buffer = await processExcel.processExcel(clientId);
    // Verificar que el tamaño del archivo no exceda el límite permitido (en este caso, 5 MB)
    const maxSize = 5 * 1024 * 1024; // 5 MB en bytes
    if (buffer.byteLength > maxSize) {
      throw new Error("El archivo generado es demasiado grande");
    }
    res.contentType(
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.status(200);
    res.attachment("leads.xlsx");
    res.send(Buffer.from(buffer));
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
router.get("/send-form-email", async (req, res) => {
  try {
    const query = req.query;
    console.log(query.data);
    const email = await sendEmail.formEmail(query.data);
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
    let email;
    let user = JSON.parse(query.user);
    let questions = JSON.parse(query.questions);
    const checkText = await checker(questions, keywords);
    if (checkText) {
      email = await sendEmail.emailBuilder(questions, user);
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
router.get("/original-builder-email", async (req, res) => {
  const query = req.query;
  try {
    console.log(req.query)
    let email;
    let user = JSON.parse(query.user);
    let questions = JSON.parse(query.questions);
    const checkText = await checker(questions, keywords);
    if (checkText) {
      email = await sendEmail.original_builder(questions, user);
    }
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
router.get("/kentta-data-validator", async (req, res) => {
  try {
    console.log(req.query)
    const { email, phone } = req.query;
    verify(phone, email)
      .then(async (data) => {
        if (data.valid === false) {
          res.status(208);
          res.json({
            success: false,
            message: "Telefono invalido , introduzca otro numero",
          });
          return;
        }
        if (data.score >= 50) {
          console.log(`${data.score} Muy Bueno`);
          res.json({
            success: true,
            message: "Correo Valido",
          });
        } else if (data.score >= 25) {
          console.log(`${data.score}  Regular`);
          res.status(206);
          res.json({
            success: false,
            message: "intenta con otro  correo",
          });
        } else if (data.score >= 0) {
          console.log(`${data.score}  Mal`);
          res.status(206);
          res.json({
            success: false,
            message: "intenta con otro  correo",
          });
        }
      })
      .catch((e) => console.error(e));
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
router.get("/data-validaton", async (req, res) => {
  try {
    console.log(req.query)
    const {email} = req.query;
    verifyEmail(email)
      .then(async (data) => {
        if (data >= 50) {
          console.log(`${data} Muy Bueno`);
          res.json({
            success: true,
            message: "Correo Valido",
          });
        } else if (data >= 25) {
          console.log(`${data}  Regular`);
          res.status(206);
          res.json({
            success: false,
            message: "intenta con otro  correo",
          });
        } else if (data >= 0) {
          console.log(`${data}  Mal`);
          res.status(206);
          res.json({
            success: false,
            message: "intenta con otro  correo",
          });
        }
      })
      .catch((e) => console.error(e));
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
