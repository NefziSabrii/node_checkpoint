const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
  authMethod: 'LOGIN'
});

let mailOptions = {
  from: "sabrinefzi04@gmail.com",
  to: "nefzisabri4@gmail.com",
  subject: "Test Email",
  text: "Hello World!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
