const nodemailer = require("nodemailer");

const sendMail = async(req,res)=>{
    res.send("I am sending mail");

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'serenity.braun55@ethereal.email',
            pass: 'vr1kRw1V7DAE5vY8yx'
        }
    });

    const info = await transporter.sendMail({
        from: '"Saurabh Kante" <serenity.braun55@ethereal.email>', // sender address
        to: "saurabhkante7719@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello Saurabh Kante", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);

}
module.exports = sendMail;