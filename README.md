# 🏥 HealthStock AI

### AI-Powered Healthcare Resource & Supply Chain Management Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-HealthStock%20AI-00C7B7?style=for-the-badge\&logo=netlify\&logoColor=white)](https://healthstockai.netlify.app/)
[![Frontend](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)](https://react.dev/)
[![Backend](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/)
[![API](https://img.shields.io/badge/API-Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)](https://expressjs.com/)

---

## 📌 Problem Statement

Healthcare systems in developing nations manage large networks of **Primary Health Centres (PHCs)**, hospitals, medical personnel, medicines, and other critical resources.

A lack of centralized and real-time visibility into:

* 💊 Medicine stock levels
* 🛏️ Bed availability
* 👨‍⚕️ Medical personnel attendance
* 📦 Resource utilization
* 📈 Medicine demand

can lead to **medicine stock-outs, inefficient resource allocation, delayed emergency response, and wastage of available resources**.

HealthStock AI aims to address these challenges through a centralized, AI-powered healthcare resource management platform.

---

# 🎯 Challenge

The goal of HealthStock AI is to build a **federated AI platform for national-scale healthcare resource and supply-chain management**.

The platform focuses on providing:

* Real-time medicine stock visibility
* Bed availability tracking
* Medical personnel attendance monitoring
* Demand forecasting
* Early warnings for potential stock-outs
* Automated cross-district resource redistribution recommendations
* Shared predictive modelling capabilities across BRICS nations

---

# 🚀 Live Demo

### 🌐 HealthStock AI

**Live Website:**
https://healthstockai.netlify.app/

---

# ✨ Key Features

### 💊 Medicine Stock Monitoring

Provides visibility into medicine inventory levels across healthcare facilities.

Helps identify:

* Low-stock medicines
* Critical stock levels
* Medicine availability
* Potential stock-out situations

---

### 🛏️ Bed Availability Tracking

Displays healthcare facility capacity and available beds to help improve resource utilization and emergency planning.

---

### 👨‍⚕️ Personnel Attendance

Tracks medical staff availability and attendance status to provide better visibility into healthcare workforce availability.

---

### 📈 Demand Forecasting

Uses data-driven forecasting concepts to estimate future healthcare resource requirements and support better inventory planning.

---

### ⚠️ Stock-Out Risk Detection

Identifies medicines and resources that may reach critical levels and provides early warnings.

This enables healthcare administrators to take action before an actual shortage occurs.

---

### 🔄 Resource Redistribution Recommendations

Provides recommendations for moving available resources from facilities with surplus inventory to facilities experiencing shortages.

This can help reduce:

* Medicine wastage
* Stock-outs
* Uneven resource distribution

---

### 🤖 AI Healthcare Assistant

The platform integrates **Google Gemini API** to provide an AI-powered interface for asking questions and receiving intelligent responses related to healthcare resource management.

---

### 📊 Interactive Dashboard

The dashboard provides visual insights into healthcare resources using charts, cards, indicators, and analytics.

Built using **React.js and Recharts**.

---

# 🧠 AI & Data Capabilities

HealthStock AI combines traditional application logic with AI-powered capabilities.

### AI Components

* 🤖 Google Gemini API
* 🧠 AI Integration
* 📈 Demand Forecasting
* 🔄 Federated AI Concepts
* ⚠️ Risk Detection
* 📊 Data Visualization
* 🔮 Predictive Resource Planning

---

# 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │      User / Admin    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    React Dashboard   │
                    │      Frontend        │
                    └──────────┬───────────┘
                               │
                         REST API Calls
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Express.js API    │
                    │       Backend        │
                    └──────────┬───────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
       ┌────────────┐   ┌────────────┐   ┌────────────┐
       │ Healthcare │   │ AI Service │   │ Forecasting│
       │    Data    │   │   Gemini   │   │   Logic    │
       └────────────┘   └────────────┘   └────────────┘
              │                │                │
              └────────────────┼────────────────┘
                               ▼
                    ┌──────────────────────┐
                    │  Resource Insights   │
                    │ Recommendations & AI │
                    └──────────────────────┘
```

---

# 🛠️ Technologies Used

## Frontend

| Technology           | Purpose                     |
| -------------------- | --------------------------- |
| ⚛️ React.js          | User Interface              |
| 🟨 JavaScript (ES6+) | Application Logic           |
| 🎨 CSS3              | Styling & Responsive Design |
| 📊 Recharts          | Data Visualization          |
| 🔗 Fetch API         | Backend API Integration     |

---

## Backend

| Technology           | Purpose                        |
| -------------------- | ------------------------------ |
| 🟢 Node.js           | Backend Runtime                |
| 🚂 Express.js        | REST API Development           |
| 🔗 REST APIs         | Frontend-Backend Communication |
| 🤖 Google Gemini API | AI Integration                 |
| ⚠️ Error Handling    | API Error Management           |

---

## Deployment

| Platform        | Usage               |
| --------------- | ------------------- |
| 🌐 Netlify      | Frontend Deployment |
| 🚀 Render       | Backend Deployment  |
| 🔀 Git & GitHub | Version Control     |

---

# 📂 Project Structure

```text
ai-healthcare-supply-chain/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# 🔌 API Endpoints

The backend provides REST APIs for accessing healthcare resource information.

| Endpoint              | Method | Purpose                                 |
| --------------------- | ------ | --------------------------------------- |
| `/api/dashboard`      | GET    | Dashboard healthcare data               |
| `/api/redistribution` | GET    | Resource redistribution recommendations |
| `/api/federated`      | GET    | Federated AI / predictive insights      |
| `/api/ai/ask`         | POST   | AI-powered healthcare assistant         |

---

# 🔐 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
```

For frontend deployment, configure:

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

> Never commit API keys or `.env` files to GitHub.

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/pritivish07025/ai-healthcare-supply-chain.git
```

```bash
cd ai-healthcare-supply-chain
```

---

## 2. Setup Backend

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env`:

```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
```

Start the backend:

```bash
npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

---

## 3. Setup Frontend

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

# 📊 Benefits

HealthStock AI can help healthcare administrators with:

### 🚑 Better Emergency Preparedness

Real-time visibility into beds, medicines, and personnel can support faster emergency decisions.

### 💊 Reduced Medicine Stock-Outs

Early warnings can help identify critical inventory levels before shortages occur.

### 🔄 Better Resource Utilization

Redistribution recommendations can help move surplus resources toward facilities with higher demand.

### 📈 Data-Driven Planning

Demand forecasting can support better procurement and inventory planning.

### 👨‍⚕️ Workforce Visibility

Personnel attendance monitoring provides better understanding of available healthcare staff.

### 🌍 Scalable AI Model

The federated AI concept can support collaborative predictive modelling across different regions and countries while keeping the system adaptable to large healthcare networks.

---

# 🧠 Skills Learned

Through this project, I developed practical experience in:

* React.js application development
* REST API development
* Node.js & Express.js
* Frontend-Backend integration
* Google Gemini API integration
* AI-powered application development
* Data visualization with Recharts
* Demand forecasting concepts
* Federated AI concepts
* API error handling
* Environment variable management
* Netlify deployment
* Render deployment
* Git & GitHub
* Debugging production deployment issues
* Building responsive dashboards

---

# 🔮 Future Improvements

The platform can be further enhanced with:

* 🗄️ Real-time database integration
* 📱 Mobile application support
* 🔔 Real-time notifications and alerts
* 🗺️ Geographic healthcare resource mapping
* 📈 Advanced ML-based demand forecasting
* 🧠 Improved predictive models
* 🔐 Role-based authentication and authorization
* 📊 Advanced analytics and reporting
* 🌍 Multi-country federated learning infrastructure
* 📡 IoT-based real-time inventory monitoring
* 🏥 Integration with hospital management systems

---

# 🎯 Project Impact

HealthStock AI demonstrates how **Full-Stack Development + Artificial Intelligence + Data Visualization** can be combined to address real-world healthcare supply-chain challenges.

The platform focuses on moving healthcare resource management from a **reactive approach** toward a more **predictive and data-driven approach**.

```text
                    Healthcare Data
                           │
                           ▼
                  Real-Time Visibility
                           │
                           ▼
                   AI & Forecasting
                           │
                           ▼
                  Risk Identification
                           │
                           ▼
              Resource Recommendations
                           │
                           ▼
               Better Healthcare Planning
```

---

# 👩‍💻 Developer

### Priti Vishwakarma

**B.Tech Computer Science Student | Full-Stack Developer | AI Enthusiast**

* GitHub: https://github.com/pritivish07025
* LinkedIn: https://www.linkedin.com/in/priti-vishwakarma-279118304/
* Email: [priti.vishwakarma311664@gmail.com](mailto:priti.vishwakarma311664@gmail.com)

---

<div align="center">

## ⭐ If you found this project interesting, consider giving it a star!

### 🏥 HealthStock AI

**Building smarter healthcare resource management with AI.**

</div>
