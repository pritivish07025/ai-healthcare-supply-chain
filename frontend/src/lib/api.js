const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
export async function getDashboard(){ return (await fetch(`${API}/dashboard`)).json(); }
export async function getRedistribution(){ return (await fetch(`${API}/redistribution`)).json(); }
export async function getFederated(){ return (await fetch(`${API}/federated`)).json(); }
export async function askAI(question){ return (await fetch(`${API}/ai/ask`, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({question})})).json(); }
