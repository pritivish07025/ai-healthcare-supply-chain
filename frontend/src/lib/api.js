const API = 'http://localhost:5000/api';

export async function getDashboard() {
  const response = await fetch(`${API}/dashboard`);
  return response.json();
}

export async function getRedistribution() {
  const response = await fetch(`${API}/redistribution`);
  return response.json();
}

export async function getFederated() {
  const response = await fetch(`${API}/federated`);
  return response.json();
}

export async function askAI(question) {
  const response = await fetch(`${API}/ai/ask`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question }),
  });

  return response.json();
}