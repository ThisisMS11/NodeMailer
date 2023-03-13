const dotenv = require('dotenv')
dotenv.config();

const nodemailer = require('nodemailer')

const SendGmail = (req,res) => {

    res.send("Hello how are you ?");

    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    })

    let details = {
        from: process.env.USER,
        to: 'mailtomohit2002@gmail.com',
        subject: "Mailing using nodemailer",
        text: "Will it still go",
        html:'<b> Hi Mohit Saini </b>'
    }

    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log("It has a error", err);
        } else {
            // console.log("Email has been sent");
            res.send("Email has been sent");
        }
    })
}

module.exports = SendGmail;
