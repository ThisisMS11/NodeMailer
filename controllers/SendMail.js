const dotenv = require('dotenv')
dotenv.config();
const nodemailer = require("nodemailer");

const SendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    // connect with the smtp
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'conner.thiel@ethereal.email', // fake generated email using etheral
            pass: 'kRbUXZhPWRu7psDEqF'
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <mailtomohit@gmail.com>', // sender address
        to: "MohitSaini@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world by Mohit Saini?</b>", // html body
    });

    console.log("Message sent : %s", info.messageId);
    // res.send("I am sending Email");
    res.json(info);

}
module.exports = SendMail;