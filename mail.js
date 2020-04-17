//Set environment variables for mailing APIS
const dotenv = require("dotenv");
dotenv.config();

const sgMail = require("./sgmail");

const mgMail = require("./mgmail");

//mail_service could be MAILGUN, SENDGRID
const sendmail = (mail_service, msg) => {
  switch (mail_service) {
    case "MAILGUN":
      mgMail(msg);
      break;
    case "SENDGRID":
      sgMail(msg);
      break;
    default:
      break;
  }
};
// const msg = {
//   to: "abcdef@example.com",
//   from: "abcdef@gmail.com",
//   subject: "Sending with Twilio SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sendmail("MAILGUN", msg);
module.exports = sendmail;
