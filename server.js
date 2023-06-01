const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json()); // Parse JSON request bodies

// Serve static files from the "public" directory
app.use(express.static('public'));

// Configure express-session middleware
app.use(
    session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: false,
    })
);

// Create an instance of OAuth2 client
const oauth2Client = new google.auth.OAuth2(
    '470386140001-l441pt0g2s3ndjrn1s8i67cmlm5f6cno.apps.googleusercontent.com',
    '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',
    'http://localhost:3000/auth/google/callback'
);

// Define the scopes for accessing Gmail API
const scopes = ['https://www.googleapis.com/auth/gmail.send'];

// Redirect the user to the authorization URL
app.get('/auth/google', (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
    });
    res.redirect(authUrl);
});

// Handle the callback from Google OAuth2
app.get('/auth/google/callback', async(req, res) => {
    const { code } = req.query;

    try {
        // Exchange the authorization code for tokens
        const { tokens } = await oauth2Client.getToken(code);

        // Get the access token from the tokens response
        const accessToken = tokens.access_token;

        // Redirect the user back to the home page with the access token
        res.redirect(`http://localhost:3000/?accessToken=${accessToken}`);
    } catch (error) {
        console.error('Error exchanging authorization code for tokens:', error);
        res.sendStatus(500);
    }
});

// Define the route handler for sending the email
app.post('/sendEmail', (req, res) => {
    const { name, email, message, accessToken } = req.body;

    // Set the access token in the OAuth2 client
    oauth2Client.setCredentials({ access_token: accessToken });

    // Create a Nodemailer transporter with the OAuth2 client
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: email,
            clientId: '470386140001-l441pt0g2s3ndjrn1s8i67cmlm5f6cno.apps.googleusercontent.com',

            clientSecret: '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',

            refreshToken: 'YOUR_REFRESH_TOKEN', // Refresh token is required here
            accessToken: accessToken,
            expires: 3600,
        },
    });

    // Configure the email options
    const mailOptions = {
        from: email, // Sender's email address
        to: 'ahmed.shehata.360@gmail.com', // Recipient's email address
        subject: 'New Message', // Email subject
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Email body
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            // Handle the error
            res.status(500).send('Error occurred while sending the email.');
        } else {
            console.log('Email sent: ' + info.response);
            // Handle the success
            res.sendStatus(200);
        }
    });
});

// Define a route handler for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});