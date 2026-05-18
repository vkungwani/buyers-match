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
  {label:'0%', value:0}
];

export const BUYER_TYPES = [
  'Owner Occupier',
  'First Home Buyer',
  'Investor',
];

export const DEFAULT_INPUTS = {
  state:            '',
  propMgtPct:       '',
  councilRates:     '',
  purchasePrice:    '',
  buildYear:        '',
  minWeeklyRent:    '',
  maxWeeklyRent:    '',
  homeInsurance:    '',
  buyerType:        'Investor',
  interestRate:     '',
  taxRate:          '',
  depositAmount:    '',
  equityUsed:       '',
  lmiOverride:      '',
  lmiWaived:        false,
  waterRates:       800,
  landlordInsurance:400,
  maintenance:      2000,
  bankCharges:      500,
  strata:           '',
  landTax:          '',
  conveyancing:     1700,
  buildingPest:     700,
  depSchedule:      550,
  compliance:       350,
  settlementLegal:  400,
};
