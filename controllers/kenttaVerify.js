const axios = require('axios')
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
module.exports = {verify}  ;
