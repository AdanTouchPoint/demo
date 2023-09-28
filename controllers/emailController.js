const sgMail = require("@sendgrid/mail");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function formEmail(data) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log(JSON.parse(data));
    const field = JSON.parse(data)
    const msg = {
      to: "adan.mijangos@touchpointmarketing.mx", //{sendTo}
      subject: "Form Test",
      from: {
        name:  field.name,
        email: "test@politicalldirect.com",
      },
      replyTo: `${field.email}`,
      bcc: "domainstpm@gmail.com",
      templateId: "d-84dc14435d3040a6bb2d5f98f5266842", // chang this templateID
      dynamic_template_data: {
        subject: "falta definir",
        fields: field,
      },
    };
    //Send email
    return sgMail
      .send(msg)
      .then(() => {
        console.log("Email Sent");
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
}
function contact_email(input) {
  const { to, subject, text, firstName, emailData } = input;
  //console.log(firstName.replace(/\s/g, "."))
  const mxDomains = [
    `${firstName.replace(/\s/g, ".")}@puentepublico.com`,
    `${firstName.replace(/\s/g, ".")}@vozvotante.com`,
  ];
  const index = getRandomInt(2);
  console.log(index);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const sendTo = to;
  const msg = {
    to: sendTo, //{sendTo}
    subject: subject,
    from: {
      name: ` ${firstName}`,
      email: mxDomains[index],
    },
    replyTo: `${emailData}`,
    bcc: "domainstpm@gmail.com",
    templateId: "d-4b4fedbbb8fc4842afcf95f2271e1f58", // chang this templateID
    dynamic_template_data: {
      name: firstName,
      text: text.replace(/\n\r?/g, "<br/>"),
      subject: subject,
    },
  };
  //Send email
  return sgMail
    .send(msg)
    .then(() => {
      console.log("Email Sent");
    })
    .catch((error) => {
      console.error(error);
    });
}

function batch_email(input) {
  const {
    to,
    from,
    addressee,
    subject,
    text,
    html,
    firstName,
    lastName,
    emailData,
  } = input;
  const ausDomains = [
    `${firstName.replace(/\s/g, ".")}@politicalldirect.com`,
    `${firstName.replace(/\s/g, ".")}@lawmakerlink.com`,
    `${firstName.replace(/\s/g, ".")}@votervertex.com`
  ];
  const index = getRandomInt(3);
  console.log(index);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const batch = to.split(",");
  console.log(batch);
  const msg = {
    to: batch, //{sendTo}
    subject: subject,
    from: {
      name: `${firstName}`,
      email: ausDomains[index]
    },
    replyTo: `${emailData}`,
    bcc: "domainstpm@gmail.com",
    templateId: "d-4b4fedbbb8fc4842afcf95f2271e1f58", // chang this templateID
    dynamic_template_data: {
      name: firstName,
      text: text.replace(/\n\r?/g, "<br/>"),
      subject: subject,
    },
  };
  //Send email
  return sgMail
    .send(msg)
    .then(() => {
      console.log("Email Sent");
    })
    .catch((error) => {
      console.error(error);
    });
}

function send(input) {
  console.log(input);
  // configure apíkey sg
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  //configure  message
  const msg = {
    to: "adan.mijangos@touchpointmarketing.mx",
    from: {
      name: ` ${input.user.firstName} ${input.user.lastName} <<${input.user.email}>>`,
      email: "contact@touchpoint-intl.com",
    },
    subject: "Legalize Vaping",
    templateId: "d-8de0d79028134deba2b84fb547a0462f",
    replyTo: `${input.user.email}`,
    dynamic_template_data: {
      submissionType: input.user.submissionType,
      firstName: input.user.name,
      lastName: input.user.lastName,
      age: input.user.age,
      city: input.user.city,
      state: input.user.state,
      personalStory: input.dataNoSmokerSub.personalStory,
      relatives: input.allDataIn,
      prescriptionSupport: input.dataNoSmokerSub.prescriptionSupport,
    },
  };
  //Send email
  return sgMail
    .send(msg)
    .then(() => {
      console.log("NoSmokerSubmission Sent");
    })
    .catch((error) => {
      console.error(error);
    });
}

function sendOther(input) {
  console.log("here");
  //console.log(input)
  console.log(
    input.user.firstName,
    input.dataSmokerSub.personalStory,
    input.allDataIn
  );
  // configure apíkey sg
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  //configure  message
  const msg = {
    to: "adan.mijangos@touchpointmarketing.mx",
    from: {
      name: ` ${input.user.firstName} ${input.user.lastName} <${input.user.email}>`,
      email: "contact@touchpoint-intl.com",
    },
    subject: "Legalize Vaping",
    templateId: "d-4e69295f021d4860911b6a9cc1ddfc11",
    replyTo: `${input.user.email}`,
    dynamic_template_data: {
      submissionType: input.user.submissionType,
      firstName: input.user.firstName,
      lastName: input.user.lastName,
      age: input.user.age,
      city: input.user.city,
      state: input.user.state,
      personalStory: input.dataSmokerSub.personalStory,
      products: input.allDataIn,
      prescriptionSupport: input.dataSmokerSub.prescriptionSupport,
      words: input.dataSmokerSub.words,
      money: input.dataSmokerSub.money,
      tries: input.dataSmokerSub.tries,
      smokedYears: input.dataSmokerSub.smokedYears,
    },
  };
  //Send email
  return sgMail
    .send(msg)
    .then(() => {
      console.log("Smoker Submission Sent");
    })
    .catch((error) => {
      console.error(error);
    });
}

function emailBuilder(questions, user) {
  const { email, userName} = user;
  const ausDomains = [
    `${userName.replace(/\s/g, ".")}@politicalldirect.com`,
    `${userName.replace(/\s/g, ".")}@lawmakerlink.com`,
    `${userName.replace(/\s/g, ".")}@votervertex.com`
  ];
  const index = getRandomInt(3);
  console.log(userName);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(email.toString());
  const msg = {
    to: email, //{sendTo}
    subject: "Email Builder",
    from: {
      name: ` ${userName}`,
      email: ausDomains[index],
    },
    replyTo: `${user.emailUser}`,
    bcc: "domainstpm@gmail.com",
    templateId: "d-fc3e9b4697f64df785e23a5adcd928a6", // chang this templateID
    dynamic_template_data: {
      subject: user.subject,
      firstName: user.userName,
      questions: questions,
    },
  };
  //Send email
  return sgMail
    .send(msg)
    .then(() => {
      console.log("Email Sent");
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

module.exports = {
  formEmail,
  contact_email,
  batch_email,
  send,
  sendOther,
  emailBuilder
};
