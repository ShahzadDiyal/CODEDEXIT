import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, service, message } = req.body;

    if (!name || !email || !service || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // SMTP Transport Configuration
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com', // Hostinger SMTP Server
            port: 465, // Use 465 for SSL or 587 for TLS
            secure: true, // True for 465, false for 587
            auth: {
                user: process.env.EMAIL_USER, // Store credentials in .env file
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false, // Bypass SSL certificate issues (if needed)
            }
        });

        // Verify connection
        transporter.verify((error, success) => {
            if (error) {
                console.error("SMTP Error:", error);
            } else {
                console.log("SMTP Server is ready to send emails!");
            }
        });

        // Email content
        const mailOptions = {
            from: `"East & West Agency" <${process.env.EMAIL_USER}>`, // Sender
            to: "info@eastandwestagency.com", // Recipient
            subject: `New Service Request: ${service}`, // Email Subject
            text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`, // Email Body
            replyTo: email, // Reply-to address
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);

        return res.status(200).json({ message: "Email sent successfully!" });

    } catch (error) {
        console.error("Email send error:", error);
        return res.status(500).json({ message: "Failed to send email", error: message });
    }
}
