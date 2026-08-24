const API =
  import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function request(endpoint, options = {}) {
  const response = await fetch(`${API}${endpoint}`, options);

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `API Error ${response.status}: ${errorText || response.statusText}`
    );
  }

  return response.json();
}

export async function getDashboard() {
  return request('/dashboard');
}

export async function getRedistribution() {
  return request('/redistribution');
}

export async function getFederated() {
  return request('/federated');
}

export async function askAI(question) {
  return request('/ai/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question }),
  });
}