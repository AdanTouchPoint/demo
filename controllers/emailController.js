const sgMail = require('@sendgrid/mail')

function contact_email(input) {
    const {
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
    // console.log(input)
    const msg = {
        to: 'adan.mijangos@touchpointmarketing.mx',
        subject: subject,
        from: {
            "name": ` ${firstName} <<${emailUser}>>`,
            "email": 'contact@touchpoint-intl.com',
        },
        replyTo: `${emailUser}`,
        cc: 'adan.mijangos@touchpointmarketing.mx',
        templateId: 'd-abe696ed56dc463498b7da0a8728ad1f',
        dynamic_template_data: {
            name: firstName,
            text: text,
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