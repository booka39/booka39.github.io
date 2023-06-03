const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Serve the static files
app.use(express.static(path.join(__dirname, 'public')));

// POST route for form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create the email content
    const emailContent = `To: ahmed.shehata.360@gmail.com\nFrom: ${email}\nSubject: New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Use the sendmail command to send the email
    exec(`echo -e "${emailContent}" | sendmail -t`, (error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'An error occurred while sending the email.' });
        } else {
            console.log('Email sent successfully');
            res.sendFile(path.join(__dirname, 'index.html'));
        }
    });
});

// Serve the form.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});