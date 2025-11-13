// pages/api/contact.js
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

  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'responses!A:E'; 

    const values = [[new Date().toISOString(), name, email, subject, message]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: { values },
    });

    return res.status(200).json({ message: 'Thank you! We’ll reply soon.' });
  } catch (error) {
    console.error('Error saving to Google Sheet:', error);
    return res.status(500).json({ 
      message: 'Failed to save', 
      error: error.message 
    });
  }
}