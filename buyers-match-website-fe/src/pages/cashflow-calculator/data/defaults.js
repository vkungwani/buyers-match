export const STATE_PROPERTY_MANAGEMENT = {
  NSW: 7, VIC: 6, QLD: 8, WA: 9,
  SA: 7, TAS: 7, ACT: 6, NT: 9,
};

export const STATE_COUNCIL_RATES = {
  NSW: 2200, VIC: 1800, QLD: 2000, WA: 1600,
  SA: 1500, TAS: 1400, ACT: 2500, NT: 1800,
};

export const BUILD_YEAR_DEPRECIATION = {
  'Pre-1987':  0,
  '1987-2000': 4000,
  '2000-2010': 6000,
  '2010-2020': 8000,
  'Post-2020': 10000,
};

export const STATES = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];

export const BUILD_YEARS = [
  'Pre-1987',
  '1987-2000',
  '2000-2010',
  '2010-2020',
  'Post-2020',
];

export const TAX_RATES = [
  { label: '30%', value: 0.30 },
  { label: '37%', value: 0.37 },
  { label: '40%', value: 0.40 },
  { label: '45%', value: 0.45 },
];

export const BUYER_TYPES = [
  'Owner Occupier',
  'First Home Buyer',
  'Investor',
];

export const DEFAULT_INPUTS = {
  state:            'QLD',
  purchasePrice:    550000,
  buildYear:        '2000-2010',
  minWeeklyRent:    600,
  maxWeeklyRent:    650,
  homeInsurance:    2300,
  buyerType:        'Investor',
  interestRate:     6.5,
  taxRate:          0.40,
  depositAmount:    67000,
  equityUsed:       0,
  lmiOverride:      '',
  lmiWaived:        false,
  waterRates:       800,
  landlordInsurance:400,
  maintenance:      2000,
  bankCharges:      500,
  strata:           0,
  landTax:          0,
  conveyancing:     1700,
  buildingPest:     700,
  depSchedule:      550,
  compliance:       350,
  settlementLegal:  400,
};
