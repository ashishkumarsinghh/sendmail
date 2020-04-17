//Set environment variables for mailing APIS
const dotenv = require("dotenv");
dotenv.config();

//Configure to Send mail via Sendgrid
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//function to send mail via sendgrid
// Example msg object
/******
const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
*/
const msg = {
  to: "ashwebdeveloper@gmail.com",
  from: "warrior2602@gmail.com",
  subject: "A hello from your friend",
  text: "I don't know how to say it.",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
const sgSend = (msg) => {
  sgMail
    .send(msg)
    .then((res) => console.log(res))
    .catch((err) => console.error(JSON.stringify(err)));
};
//Send the msg using SendGrid
sgSend(msg);
