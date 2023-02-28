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
            "name": ` ${firstName} <<${emailData}>>`,
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
            "name": ` ${firstName} <<${emailData}>>`,
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
        cc:['ruben.mejia@touchpointmarketing.mx','omar.mijangos@touchpointmarketing.mx','ricardo.dominguez@touchpointmarketing.mx','emilio@emiliogc.com'],
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
        cc:['ruben.mejia@touchpointmarketing.mx','omar.mijangos@touchpointmarketing.mx','ricardo.dominguez@touchpointmarketing.mx','emilio@emiliogc.com'],
        from: {
            "name": ` ${ input.user.firstName} ${input.user.lastName} <<${input.user.email}>>`,
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

function emailBuilder(input) {
console.log(input.questions.question1)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'adan.mijangos@touchpointmarketing.mx', //{sendTo}
        cc:['ruben.mejia@touchpointmarketing.mx','omar.mijangos@touchpointmarketing.mx','ricardo.dominguez@touchpointmarketing.mx','emilio@emiliogc.com'],
        subject: 'Email Builder',
        from: {
            "name": ` ${input.user.firstName} ${input.user.lastName} <<${input.user.email}>>`,
            "email": 'contact@touchpoint-intl.com',
        },
        replyTo: `${input.user.email}`,
        bcc:  'domainstpm@gmail.com',
        templateId: 'd-fc3e9b4697f64df785e23a5adcd928a6', // chang this templateID 
        dynamic_template_data: {
            firstName: input.user.firstName,
            lastName: input.user.lastName,
            question1: input.questions.question1.replace(/\n\r?/g, '<br/>').replace(/`/g, ''),
            question2: input.questions.question2.replace(/\n\r?/g, '<br/>').replace(/`/g, ''),
            question3: input.questions.question3.replace(/\n\r?/g, '<br/>').replace(/`/g, ''),
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


module.exports = {
    contact_email,
    batch_email,
    send,
    sendOther,
    emailBuilder
}