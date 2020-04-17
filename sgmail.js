//Configure to Send mail via Sendgrid
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//function to send mail via sendgrid
const sgSend = (msg) => {
  sgMail
    .send(msg)
    .then((res) => console.log(res))
    .catch((err) => console.error(JSON.stringify(err)));
};

module.exports = sgSend;
