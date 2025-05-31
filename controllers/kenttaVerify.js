
const axios = require('axios')
import free_email_provider_set from './email-providers';

let phonePass
let emailPass

const verifyPhone = async (phone) => {
  console.log(phone);
  phonePass = await axios.post(
    `http://apilayer.net/api/validate?access_key=${process.env.PHONE_KEY_KENTTA}&number=${phone}&country_code=MX&format=1`
  );
  return phonePass.data.valid;
};
const verifyEmail = async (email) => {
  console.log(email);
  emailPass = await axios.post(
    `https://api.emailable.com/v1/verify?email=${email}&api_key=${process.env.EMAIL_KEY_KENTTA}`
  );
  return emailPass.data.score;
};
const verify = async (phone, email) => {
  if (phone) {
    let valid = await verifyPhone(phone).catch((e) => console.error(e));
    let score = await verifyEmail(email).catch((e) => console.error(e));
    return { valid, score };
  }
  let score = await verifyEmail(email).catch((e) => console.error(e));
  return { score };
};
const verifyCompanyEmail = async (email) => {
let fields = email.split('@');
    let domain = fields[1];
    return !free_email_provider_set.has(domain); // if the free provider set doesn't have this domain, then most likely it's a company email address
};

module.exports = {verify,verifyCompanyEmail}  ;
