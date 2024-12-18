const axios = require('axios')
let emailPass

const verifyEmail = async (email) => {
  console.log(email);
  emailPass = await axios.post(
    `https://api.emailable.com/v1/verify?email=${email}&api_key=${process.env.EMAIL_KEY_THERMO}`
  );
  return emailPass.data.score;
};
module.exports = {verifyEmail}  ;