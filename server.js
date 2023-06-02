const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// POST route for form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'mohamedaboukaram39@gmail.com', // Update with your Gmail email address
            pass: '01093300032Booka' // Update with your Gmail password
        }
    });

    // Create the email
    const mailOptions = {
        from: 'mohamedaboukaram39@gmail.com', // Update with your Gmail email address
        to: 'ahmed.shehata.360@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'An error occurred while sending the email.' });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ success: true, message: 'Email sent successfully.' });
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});