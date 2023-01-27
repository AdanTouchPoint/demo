const sgMail = require('@sendgrid/mail')

function contact_email(input) {
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
module.exports = {
    contact_email
}