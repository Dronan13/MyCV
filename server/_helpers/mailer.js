const sendEmail = (question) => {
    var nodeMailer = require('nodemailer');

    let transporter = nodeMailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_SECURE,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });
    let mailOptions = {
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER, 
        subject: process.env.MAIL_SUBJECT +' '+ question.firstname +' '+ question.lastname,
        text: question.email +' '+ question.question,
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        });
}
module.exports = sendEmail;