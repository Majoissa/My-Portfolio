const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", //React is running in port 3000
    credentials: true,
  })
);

app.post("/send", (req, res) => {
  let data = req.body;

  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: data.mail,
    to: process.env.MAIL,
    subject: `Message from ${data.name}`,
    html: `
            <h3>Informations</h3>
            <ul>
              <li>Name: ${data.name}</li>
              <li>Email: ${data.mail}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
        `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.error("Error sending email: ", error);
      res.status(500).send({
        success: false,
        message: "Failed to send email",
        error: error,
      });
    } else {
      res.send({ success: true, message: "Email sent" });
    }
    smtpTransport.close();
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`);
});
