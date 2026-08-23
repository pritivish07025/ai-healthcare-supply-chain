export const districts = [
  { id: 'LKO', name: 'Lucknow', state: 'Uttar Pradesh', population: 4100000 },
  { id: 'VAR', name: 'Varanasi', state: 'Uttar Pradesh', population: 3800000 },
  { id: 'PRY', name: 'Prayagraj', state: 'Uttar Pradesh', population: 3200000 },
  { id: 'GOR', name: 'Gorakhpur', state: 'Uttar Pradesh', population: 2900000 }
];

export const facilities = [
  { id: 'PHC-LKO-01', name: 'Aliganj PHC', districtId: 'LKO', beds: 30, occupied: 22 },
  { id: 'PHC-LKO-02', name: 'Mohan PHC', districtId: 'LKO', beds: 24, occupied: 20 },
  { id: 'PHC-VAR-01', name: 'Sarnath PHC', districtId: 'VAR', beds: 40, occupied: 26 },
  { id: 'PHC-PRY-01', name: 'Naini PHC', districtId: 'PRY', beds: 32, occupied: 27 },
  { id: 'PHC-GOR-01', name: 'Gola PHC', districtId: 'GOR', beds: 28, occupied: 13 }
];

export const medicines = [
  { id: 'PARA500', name: 'Paracetamol 500mg', unit: 'tablets', category: 'Analgesic', stock: 18500, reorder: 6000, dailyDemand: 2100, districtId: 'LKO', trend: [1700,1800,1900,2050,2200,2100,2250] },
  { id: 'AMOX250', name: 'Amoxicillin 250mg', unit: 'capsules', category: 'Antibiotic', stock: 5200, reorder: 5000, dailyDemand: 720, districtId: 'VAR', trend: [560,610,650,700,730,760,740] },
  { id: 'ORS', name: 'ORS Sachets', unit: 'sachets', category: 'Rehydration', stock: 9400, reorder: 4000, dailyDemand: 1050, districtId: 'PRY', trend: [900,950,1000,1040,1100,1150,1210] },
  { id: 'INSULIN', name: 'Human Insulin', unit: 'vials', category: 'Diabetes', stock: 880, reorder: 350, dailyDemand: 70, districtId: 'GOR', trend: [58,62,65,70,72,75,76] },
  { id: 'AZI500', name: 'Azithromycin 500mg', unit: 'tablets', category: 'Antibiotic', stock: 2100, reorder: 2500, dailyDemand: 390, districtId: 'LKO', trend: [310,330,350,370,400,420,450] },
  { id: 'SALINE', name: 'Normal Saline 500ml', unit: 'bags', category: 'IV Fluid', stock: 2600, reorder: 1500, dailyDemand: 310, districtId: 'VAR', trend: [260,270,290,300,315,320,330] }
];

export const personnel = [
  { id: 'DOC-101', name: 'Dr. A. Sharma', role: 'Doctor', facilityId: 'PHC-LKO-01', status: 'Present', checkIn: '08:42' },
  { id: 'NUR-220', name: 'Nurse R. Singh', role: 'Nurse', facilityId: 'PHC-LKO-01', status: 'Present', checkIn: '08:15' },
  { id: 'DOC-133', name: 'Dr. P. Verma', role: 'Doctor', facilityId: 'PHC-VAR-01', status: 'Absent', checkIn: null },
  { id: 'NUR-281', name: 'Nurse S. Khan', role: 'Nurse', facilityId: 'PHC-PRY-01', status: 'Present', checkIn: '08:31' },
  { id: 'LAB-078', name: 'A. Yadav', role: 'Lab Technician', facilityId: 'PHC-GOR-01', status: 'Present', checkIn: '08:49' },
  { id: 'DOC-156', name: 'Dr. N. Gupta', role: 'Doctor', facilityId: 'PHC-GOR-01', status: 'Late', checkIn: '10:16' }
];
