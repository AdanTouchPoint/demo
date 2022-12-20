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
        emailUser
    } = input
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const sentTo = to
    const msg = {
        to: sentTo, //{sendTo}
        subject: subject,
        from: {
            "name": ` ${firstName}  ${lastName}<<${emailUser}>>`,
            "email": 'contact@touchpoint-intl.com',
        },
        replyTo: `${emailUser}`,
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