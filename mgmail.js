//Configure to Send mail via Sendgrid
const mailgun = require("mailgun-js");
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_BASE_URL,
});

//function to send mail via sendgrid
const mgSend = (msg) => {
  mg.messages().send(msg, function (error) {
    if (error) console.error(error);
    else console.log("Mail sent");
  });
};
module.exports = mgSend;
