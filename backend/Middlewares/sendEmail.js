const nodeMailer = require('nodemailer');

exports.sendEmail = async (options) =>{
    var transporter = nodeMailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "278c25f6cd69cf",
          pass: "5be3b7e0a12cad"
        }
      });


    const mailOptions =   {
        from: "",
        to: options.email,
        subject:options.subject,
        text:options.message,
    }

    await transporter.sendMail(mailOptions);
}