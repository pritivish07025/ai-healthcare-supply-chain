import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getDashboard, redistributionRecommendations, federatedSummary } from './analytics.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_, res) => res.json({ ok: true, service: 'AI Healthcare Supply Chain API' }));
app.get('/api/dashboard', (_, res) => res.json(getDashboard()));
app.get('/api/redistribution', (_, res) => res.json(redistributionRecommendations()));
app.get('/api/federated', (_, res) => res.json(federatedSummary()));

app.post('/api/ai/ask', async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ error: 'question is required' });
  if (!process.env.GEMINI_API_KEY) return res.json({ answer: 'Gemini is not configured. Add GEMINI_API_KEY to backend/.env to enable the AI operations assistant.' });
  try {
    const dashboard = getDashboard();
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash' });
    const prompt = `You are an AI healthcare supply-chain operations assistant. Use only the supplied dashboard data. Give concise, actionable recommendations. Flag uncertainty.\nDashboard: ${JSON.stringify(dashboard)}\nQuestion: ${question}`;
    const result = await model.generateContent(prompt);
    res.json({ answer: result.response.text() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gemini request failed', details: error.message });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`API running on http://localhost:${port}`));
