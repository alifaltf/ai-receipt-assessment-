const express = require("express");
const multer = require("multer");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/extract", upload.single("receipt"), async (req, res) => {
  try {
    const base64Image = req.file.buffer.toString("base64");

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          inlineData: {
            mimeType: req.file.mimetype,
            data: base64Image,
          },
        },
        {
          text: `Extract receipt information. Return ONLY valid JSON:
{
  "merchantName": "",
  "date": "",
  "totalAmount": "",
  "currency": ""
}`,
        },
      ],
    });

    const cleanText = response.text.replace(/```json|```/g, "").trim();
    const data = JSON.parse(cleanText);

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to extract receipt data" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});