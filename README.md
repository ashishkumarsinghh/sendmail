# sendmail

Simplified lib for sending mail. This is a npm library to send mail by sendgrid or mailgun.

# Supported Mail Senders

- [Sendgrid](https://sendgrid.com/)
- [Mailgun](https://www.mailgun.com/)

# How to Send Mail using this Library

1. First you need to signup for Sendgrid or MailGun.
2. Get the API KEYs.
3. Create a .env file with variables SENDGRID_API_KEY(if using SendGrid) or MAILGUN_API_KEY and MAILGUN_BASE_URL(if using MailGun)
4. Now you just have to do a

```javascript
npm install sgmgmail
```

5. import 'sendmail' function which is provided by sgmgmail library. You can do it like below.

```javascript
const sendmail = require("sgmgmail");
```

6. Voila ! You are ready, now you just have to pass SENDGRID/MAILGUN string as first parameter to specify which service will be used and second parameter to the function will be the msg object. You can create the msg object like below:

````javascript
const msg = {
  to: "abcdef@example.com",
  from: "abcdef@gmail.com",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};```
````
