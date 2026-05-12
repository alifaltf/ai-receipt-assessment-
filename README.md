# Receipt AI Extractor

A simple AI-powered web application that extracts receipt information from uploaded images and auto-fills a review form using the Gemini API.

## Features

- Upload receipt image
- AI extracts:
  - Merchant Name
  - Date
  - Total Amount
  - Currency
- Editable auto-filled form
- Save submitted receipts using browser localStorage
- Responsive and simple UI
- Deployed on Vercel

## Tech Stack

- Node.js
- Express.js
- HTML/CSS/JavaScript
- Gemini API
- localStorage
- Vercel

## Installation

Clone the repository:

```bash
git clone https://github.com/alifaltf/ai-receipt-assessment.git
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
GEMINI_API_KEY=AIzaSyAbFyL8MHBO_5oD9N1-yF2_cphjTo29l1A
```

Run the server:

```bash
node server.js
```

Open in browser:

```txt
http://localhost:3000
```

## How It Works

1. User uploads a receipt image
2. Gemini AI extracts receipt details
3. Extracted data auto-fills the form
4. User can review/edit the fields
5. Submitted data is saved in browser localStorage

## Storage

This project uses browser localStorage instead of a traditional database for simplicity and faster deployment.

## Deployment

The application is deployed using Vercel.

## Author

Muhammad Alif Altaf
