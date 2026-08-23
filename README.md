# AI-Powered Healthcare Supply Chain

A national-scale prototype for healthcare resource visibility, demand forecasting, stock-out early warnings, personnel attendance, bed availability, and cross-district redistribution recommendations.

## Google AI integration
- Gemini API powers the AI operations assistant and redistribution explanation endpoint.
- Predictive modelling is implemented with a transparent demand forecast + stock-out risk model.
- Federated learning is simulated by aggregating district-level model statistics without centralizing raw district data.

## Features
- Medicine inventory dashboard
- Bed availability by PHC/district
- Personnel attendance monitoring
- 7-day medicine demand forecasting
- Stock-out risk scoring and alerts
- Cross-district transfer recommendations
- Gemini-powered natural-language operations assistant
- Federated district model aggregation demo

## Run

### 1. Backend
```bash
cd backend
npm install
cp .env.example .env
# Put your Gemini API key in GEMINI_API_KEY
npm run dev
```

Backend: http://localhost:5000

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173

## Environment
`GEMINI_API_KEY` is required for the AI assistant. Without it, the rest of the dashboard and deterministic analytics still work.

## Production architecture
See `docs/architecture.md` for the recommended Google Cloud deployment using Firebase, Cloud Run, BigQuery, Vertex AI, and Gemini.
