const nodemailer = require('nodemailer');
const options = require('../routes/products');

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.smtp_host,
        port: process.env.smtp_port,
        auth: {
            user: process.env.smtp_email,
            pass: process.env.smtp_password,
        },
    });

    const massage = {
        from: `${process.env.smtp_From_Name} <${process.env.smtp_From_Email}>`,
        to: options.email,
        subject: options.subject,
        text: options.massage,
    };

    await transporter.sendMail(massage);

    //     smtp_host =sandbox.smtp.mailtrap.io
    // smtp_port=2525
    // smtp_email=64738ccc4978b1
    // smtp_password=d6651ce63d5257
    // smtp_From_Email=noreplay@shpit.com
    // smtp_From_Name=SHopit
};

module.exports = sendEmail;
