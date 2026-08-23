import { medicines, facilities, personnel, districts } from './data.js';
export function forecastMedicine(medicine, days = 7) {
  const trend = medicine.trend;
  const avg = trend.reduce((a,b) => a+b, 0) / trend.length;
  const slope = (trend.at(-1) - trend[0]) / Math.max(1, trend.length - 1);
  return Array.from({ length: days }, (_, i) => Math.max(0, Math.round(avg + slope * (i + 1))));
}

export function stockoutRisk(medicine) {
  const forecast = forecastMedicine(medicine, 7);
  const projectedDemand = forecast.reduce((a,b) => a+b, 0);
  const daysOfCover = medicine.stock / Math.max(1, medicine.dailyDemand);
  const risk = Math.min(99, Math.round((projectedDemand / Math.max(1, medicine.stock)) * 70 + (medicine.stock < medicine.reorder ? 25 : 0)));
  const level = risk >= 75 ? 'Critical' : risk >= 45 ? 'High' : risk >= 20 ? 'Medium' : 'Low';
  return { risk, level, daysOfCover: Number(daysOfCover.toFixed(1)), projectedDemand, forecast };
}

export function getDashboard() {
  const medicineAnalytics = medicines.map(m => ({ ...m, analytics: stockoutRisk(m) }));
  const alerts = medicineAnalytics.filter(m => m.analytics.level === 'Critical' || m.analytics.level === 'High');
  const totalBeds = facilities.reduce((s,f) => s + f.beds, 0);
  const occupiedBeds = facilities.reduce((s,f) => s + f.occupied, 0);
  const present = personnel.filter(p => p.status === 'Present').length;
  return {
    kpis: {
      medicinesTracked: medicines.length,
      stockoutAlerts: alerts.length,
      bedsAvailable: totalBeds - occupiedBeds,
      bedOccupancy: Math.round(occupiedBeds / totalBeds * 100),
      attendance: Math.round(present / personnel.length * 100)
    },
    medicines: medicineAnalytics,
    facilities,
    personnel,
    districts,
    alerts
  };
}

export function redistributionRecommendations() {
  return [
    { medicine: 'Amoxicillin 250mg', from: 'GOR', to: 'VAR', quantity: 1100, reason: 'Gorakhpur has 8.6 days of cover while Varanasi is below reorder threshold.', priority: 'High' },
    { medicine: 'Azithromycin 500mg', from: 'PRY', to: 'LKO', quantity: 900, reason: 'Lucknow demand is rising and projected 7-day demand exceeds available buffer.', priority: 'Medium' },
    { medicine: 'Normal Saline 500ml', from: 'GOR', to: 'VAR', quantity: 500, reason: 'Varanasi has the highest recent consumption growth for IV fluids.', priority: 'Medium' }
  ];
}

export function federatedSummary() {
  const districtUpdates = districts.map((d, i) => ({ district: d.name, samples: 1200 + i * 430, localMae: Number((8.2 - i * 0.7).toFixed(1)), modelVersion: `local-v${i+1}` }));
  const weightedMae = districtUpdates.reduce((sum, x) => sum + x.localMae * x.samples, 0) / districtUpdates.reduce((sum, x) => sum + x.samples, 0);
  return { rounds: 4, participatingDistricts: districtUpdates.length, aggregatedMae: Number(weightedMae.toFixed(2)), districtUpdates, privacy: 'Raw district records remain local; only aggregate model statistics are shared in this prototype.' };
}
