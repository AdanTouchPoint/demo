const sgMail = require('@sendgrid/mail')

function contact_email(input) {
    const {
        to,
        subject,
        text,
        firstName,
        emailData
    } = input
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const sendTo = to
    const msg = {
        to: sendTo, //{sendTo}
        subject: subject,
        from: {
            "name": ` ${firstName} <${emailData}>`,
            "email": 'contact@touchpoint-intl.com',
        },
        replyTo: `${emailData}`,
        bcc:  'domainstpm@gmail.com',
        templateId: 'd-4b4fedbbb8fc4842afcf95f2271e1f58', // chang this templateID 
        dynamic_template_data: {
            name: firstName,
            text: text.replace(/\n\r?/g, '<br/>'),
            subject: subject
        },
    }
    //Send email
    return sgMail
        .send(msg)
        .then(() => {
            console.log('Email Sent')
        })
        .catch((error) => {
            console.error(error)
        })
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
        emailData
    } = input
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const batch = to.split(',')
console.log(batch)
    const msg = {
        to: batch, //{sendTo}
        subject: subject,
        from: {
            "name": ` ${firstName} <${emailData}>`,
            "email": 'contact@touchpoint-intl.com',
        },
        replyTo: `${emailData}`,
        bcc:  'domainstpm@gmail.com',
        templateId: 'd-4b4fedbbb8fc4842afcf95f2271e1f58', // chang this templateID 
        dynamic_template_data: {
            name: firstName,
            text: text.replace(/\n\r?/g, '<br/>'),
            subject: subject
        },
    }
    //Send email
    return sgMail
        .send(msg)
        .then(() => {
            console.log('Email Sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

function send(input) {
    console.log(input)
    // configure apíkey sg
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    //configure  message
    const msg = {
        to: 'adan.mijangos@touchpointmarketing.mx',
        from: {
            "name": ` ${input.user.firstName} ${input.user.lastName} <<${input.user.email}>>`,
            "email": 'contact@touchpoint-intl.com',
        },
        subject: 'Legalize Vaping',
        templateId: 'd-8de0d79028134deba2b84fb547a0462f',
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
        }
    }
    //Send email
    return sgMail
        .send(msg)
        .then(() => {
            console.log('NoSmokerSubmission Sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

function sendOther(input) {
    console.log('here')
    //console.log(input)
    console.log( input.user.firstName,input.dataSmokerSub.personalStory,input.allDataIn)
    // configure apíkey sg
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//configure  message
    const msg = {
        to: 'adan.mijangos@touchpointmarketing.mx',
        from: {
            "name": ` ${ input.user.firstName} ${input.user.lastName} <${input.user.email}>`,
            "email": 'contact@touchpoint-intl.com',
        },
        subject: 'Legalize Vaping',
        templateId: 'd-4e69295f021d4860911b6a9cc1ddfc11',
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
            smokedYears: input.dataSmokerSub.smokedYears
        }
    }
    //Send email
    return sgMail
        .send(msg)
        .then(() => {
            console.log('Smoker Submission Sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

function emailBuilder(questions,user) {
console.log(questions)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: `${user.email}`, //{sendTo}
        subject: 'Email Builder',
        from: {
            "name": ` ${user.name} <${user.emailUser}>`,
            "email": 'contact@touchpoint-intl.com',
        },
        replyTo: `${user.emailUser}`,
        bcc:  'domainstpm@gmail.com',
        templateId: 'd-fc3e9b4697f64df785e23a5adcd928a6', // chang this templateID 
        dynamic_template_data: {
            subject: user.subject,
            firstName: user.name,
            questions: questions
        },
    }
    //Send email
    return sgMail
        .send(msg)
        .then(() => {
            console.log('Email Sent')
        })
        .catch((error) => {
            console.error(error)
            return error
            
        })
}


module.exports = {
    contact_email,
    batch_email,
    send,
    sendOther,
    emailBuilder
}