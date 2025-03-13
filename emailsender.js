require("dotenv").config();
const nodemailer = require("nodemailer");

async function sendTestEmail() {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let info = await transporter.sendMail({
        from: `"Auto Tester" <${process.env.EMAIL_USER}>`,
        to: process.env.TEST_EMAIL,
        subject: "Test Email",
        text: "This is a test email from your automation tool.",
    });

    console.log("Email sent:", info.messageId);
}

sendTestEmail().catch(console.error);

