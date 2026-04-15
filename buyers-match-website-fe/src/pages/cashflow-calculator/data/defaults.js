export const STATE_PROPERTY_MANAGEMENT = {
  NSW: 7.7, VIC: 6.6, QLD: 8.8, WA: 9.9,
  SA: 7.7, TAS: 7.7, ACT: 6.6, NT: 9.9,
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
  { label: '15%', value: 0.15 },
  { label: '30%', value: 0.30 },
  { label: '37%', value: 0.37 },
  { label: '45%', value: 0.45 },
];

export const BUYER_TYPES = [
  'Owner Occupier',
  'First Home Buyer',
  'Investor',
];

export const DEFAULT_INPUTS = {
  state:            '',
  propMgtPct:       8.8,
  councilRates:     2000,
  purchasePrice:    0,
  buildYear:        '2000-2010',
  minWeeklyRent:    0,
  maxWeeklyRent:    0,
  homeInsurance:    0,
  buyerType:        'Investor',
  interestRate:     0,
  taxRate:          0.40,
  depositAmount:    0,
  equityUsed:       0,
  lmiOverride:      '',
  lmiWaived:        false,
  waterRates:       0,
  landlordInsurance:0,
  maintenance:      0,
  bankCharges:      0,
  strata:           0,
  landTax:          0,
  conveyancing:     0,
  buildingPest:     0,
  depSchedule:      0,
  compliance:       0,
  settlementLegal:  0,
};
