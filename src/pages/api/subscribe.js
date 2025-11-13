// pages/api/subscribe.js
const { google } = require('googleapis');

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  // Validate email format
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address' });
  }

  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Subscribers!A:B'; 

    // Check for duplicates
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const values = response.data.values || [];
    const existingEmails = values.map(row => row[1]).filter(Boolean); // Column B = email

    if (existingEmails.includes(email)) {
      return res.status(409).json({ message: 'You are already subscribed!' });
    }

    // Append new subscriber
    const newRow = [[new Date().toISOString(), email]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: { values: newRow },
    });

    return res.status(200).json({ message: 'Thank you for subscribing!' });
  } catch (error) {
    console.error('Subscribe API error:', error);
    return res.status(500).json({ 
      message: 'Failed to subscribe', 
      error: error.message 
    });
  }
}