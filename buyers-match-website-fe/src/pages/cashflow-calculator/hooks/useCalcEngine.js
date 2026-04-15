import { useMemo } from 'react';
import {
  STATE_PROPERTY_MANAGEMENT,
  STATE_COUNCIL_RATES,
  BUILD_YEAR_DEPRECIATION,
} from '../data/defaults';

// ── Stamp Duty ────────────────────────────────────────────────────────────────

function stampDutyNSW(price, buyerType) {
  let amount;
  if (price <= 16000)    amount = Math.max(10, price * 0.0125);
  else if (price <= 35000)   amount = 200  + (price - 16000)   * 0.015;
  else if (price <= 93000)   amount = 485  + (price - 35000)   * 0.0175;
  else if (price <= 351000)  amount = 1500 + (price - 93000)   * 0.035;
  else if (price <= 1168000) amount = 10530 + (price - 351000) * 0.045;
  else                       amount = 47295 + (price - 1168000)* 0.07;

  if (buyerType === 'First Home Buyer') {
    if (price <= 800000) return { amount: 0, note: 'FHB exempt (≤$800k)' };
    if (price <= 1000000) {
      // Scale linearly from 0 at $800k to full duty at $1,000k
      const scale = (price - 800000) / 200000;
      return { amount: Math.round(amount * scale), note: 'FHB partial concession' };
    }
  }
  return { amount: Math.round(amount), note: '' };
}

function stampDutyVIC(price, buyerType) {
  let amount;
  if (price <= 25000)    amount = price * 0.014;
  else if (price <= 130000)  amount = 350   + (price - 25000)  * 0.024;
  else if (price <= 960000)  amount = 2870  + (price - 130000) * 0.06;
  else                       amount = 55000 + (price - 960000) * 0.065;

  if (buyerType === 'First Home Buyer') {
    if (price <= 600000) return { amount: 0, note: 'FHB exempt (≤$600k)' };
    if (price <= 750000) {
      const scale = (price - 600000) / 150000;
      return { amount: Math.round(amount * scale), note: 'FHB partial concession' };
    }
  }
  return { amount: Math.round(amount), note: '' };
}

function stampDutyQLD(price, buyerType) {
  let amount;
  if (price <= 5000)     amount = 0;
  else if (price <= 75000)   amount = (price - 5000)    * 0.015;
  else if (price <= 540000)  amount = 1050  + (price - 75000)  * 0.035;
  else if (price <= 1000000) amount = 17325 + (price - 540000) * 0.045;
  else                       amount = 38025 + (price - 1000000)* 0.0575;

  if (buyerType === 'First Home Buyer' && price <= 700000) {
    return { amount: 0, note: 'FHB exempt (≤$700k)' };
  }
  return { amount: Math.round(amount), note: '' };
}

function stampDutyWA(price, buyerType) {
  let amount;
  if (price <= 120000)   amount = price * 0.019;
  else if (price <= 150000)  amount = 2280  + (price - 120000) * 0.0285;
  else if (price <= 360000)  amount = 3135  + (price - 150000) * 0.038;
  else if (price <= 725000)  amount = 11115 + (price - 360000) * 0.0475;
  else                       amount = 28440 + (price - 725000) * 0.051;

  if (buyerType === 'First Home Buyer') {
    if (price <= 430000) return { amount: 0, note: 'FHB exempt (≤$430k)' };
    if (price <= 530000) {
      const scale = (price - 430000) / 100000;
      return { amount: Math.round(amount * scale), note: 'FHB partial concession' };
    }
  }
  return { amount: Math.round(amount), note: '' };
}

function stampDutySA(price) {
  let amount;
  if (price <= 12000)    amount = price * 0.01;
  else if (price <= 30000)   amount = 120   + (price - 12000)  * 0.02;
  else if (price <= 50000)   amount = 480   + (price - 30000)  * 0.03;
  else if (price <= 100000)  amount = 1080  + (price - 50000)  * 0.035;
  else if (price <= 200000)  amount = 2830  + (price - 100000) * 0.04;
  else if (price <= 250000)  amount = 6830  + (price - 200000) * 0.0425;
  else if (price <= 300000)  amount = 8955  + (price - 250000) * 0.045;
  else if (price <= 500000)  amount = 11205 + (price - 300000) * 0.05;
  else                       amount = 21205 + (price - 500000) * 0.055;
  return { amount: Math.round(amount), note: '' };
}

function stampDutyTAS(price, buyerType) {
  let amount;
  if (price <= 3000)     amount = 50;
  else if (price <= 25000)   amount = 50    + (price - 3000)   * 0.0175;
  else if (price <= 75000)   amount = 435   + (price - 25000)  * 0.025;
  else if (price <= 200000)  amount = 1685  + (price - 75000)  * 0.03;
  else if (price <= 375000)  amount = 5435  + (price - 200000) * 0.035;
  else if (price <= 725000)  amount = 11560 + (price - 375000) * 0.04;
  else                       amount = 25560 + (price - 725000) * 0.045;

  if (buyerType === 'First Home Buyer' && price <= 400000) {
    return { amount: 0, note: 'FHB exempt (≤$400k)' };
  }
  return { amount: Math.round(amount), note: '' };
}

function stampDutyACT(price, buyerType) {
  let amount;
  if (price <= 200000)       amount = price * 0.002;
  else if (price <= 300000)  amount = 400   + (price - 200000) * 0.039;
  else if (price <= 500000)  amount = 4300  + (price - 300000) * 0.047;
  else if (price <= 750000)  amount = 13700 + (price - 500000) * 0.059;
  else if (price <= 1000000) amount = 28450 + (price - 750000) * 0.067;
  else if (price <= 1455000) amount = 45200 + (price - 1000000)* 0.073;
  else                       amount = 78415 + (price - 1455000)* 0.09;

  if (buyerType === 'First Home Buyer' && price <= 1000000) {
    return { amount: 0, note: 'FHB exempt (≤$1M)' };
  }
  return { amount: Math.round(amount), note: '' };
}

function stampDutyNT(price) {
  let amount;
  if (price <= 525000) {
    amount = Math.round((0.06571441 * (price / 1000) + 15) * (price / 1000));
  } else {
    amount = Math.round(price * 0.0495);
  }
  return { amount, note: '' };
}

export function stampDuty(price, state, buyerType) {
  switch (state) {
    case 'NSW': return stampDutyNSW(price, buyerType);
    case 'VIC': return stampDutyVIC(price, buyerType);
    case 'QLD': return stampDutyQLD(price, buyerType);
    case 'WA':  return stampDutyWA(price, buyerType);
    case 'SA':  return stampDutySA(price);
    case 'TAS': return stampDutyTAS(price, buyerType);
    case 'ACT': return stampDutyACT(price, buyerType);
    case 'NT':  return stampDutyNT(price);
    default:    return { amount: 0, note: '' };
  }
}

// ── LMI ──────────────────────────────────────────────────────────────────────

export function lmiCalc(loanPre, price) {
  const lvr = price > 0 ? loanPre / price : 0;
  if (lvr <= 0.80) return { lmi: 0,                            tier: 1 };
  if (lvr <= 0.85) return { lmi: Math.round(loanPre * 0.012), tier: 2 };
  if (lvr <= 0.90) return { lmi: Math.round(loanPre * 0.019), tier: 2 };
  if (lvr <= 0.92) return { lmi: Math.round(loanPre * 0.028), tier: 3 };
  if (lvr <= 0.95) return { lmi: Math.round(loanPre * 0.038), tier: 3 };
  return             { lmi: Math.round(loanPre * 0.044),       tier: 3 };
}

// ── Main hook ─────────────────────────────────────────────────────────────────

export default function useCalcEngine(inputs) {
  return useMemo(() => {
    const {
      state, purchasePrice, buildYear,
      minWeeklyRent, maxWeeklyRent,
      homeInsurance, buyerType,
      interestRate, taxRate,
      depositAmount, equityUsed,
      lmiOverride, lmiWaived,
      waterRates, landlordInsurance, maintenance,
      bankCharges, strata, landTax,
      conveyancing, buildingPest,
      depSchedule, compliance, settlementLegal,
    } = inputs;

    const pp = Number(purchasePrice) || 0;

    // ── Loan & LMI ──────────────────────────────────────────────────────────
    const purchaseLoan = Math.max(0, pp - (Number(depositAmount) || 0) - (Number(equityUsed) || 0));
    const lvr          = pp > 0 ? purchaseLoan / pp : 0;

    let lmiResult;
    if (lmiWaived) {
      lmiResult = { lmi: 0, tier: 1 };
    } else if (lmiOverride !== '' && lmiOverride !== null && lmiOverride !== undefined) {
      lmiResult = { lmi: Number(lmiOverride), tier: lmiCalc(purchaseLoan, pp).tier };
    } else {
      lmiResult = lmiCalc(purchaseLoan, pp);
    }

    // Total debt = Purchase Loan + Equity Loan from elsewhere + optional capitalized LMI
    const loanPre  = purchaseLoan; // This is the amount borrowed against the NEW property
    const loanPost = purchaseLoan + (Number(equityUsed) || 0) + lmiResult.lmi;

    // ── State defaults ───────────────────────────────────────────────────────
    const propMgtPct    = (inputs.propMgtPct ?? STATE_PROPERTY_MANAGEMENT[state] ?? 8.8) / 100;
    const councilRates  = inputs.councilRates ?? STATE_COUNCIL_RATES[state] ?? 1800;
    const depreciation  = BUILD_YEAR_DEPRECIATION[buildYear] ?? 0;

    // ── Rental income ────────────────────────────────────────────────────────
    const minAnnualRent = (Number(minWeeklyRent) || 0) * 52;
    const maxAnnualRent = (Number(maxWeeklyRent) || 0) * 52;

    // ── Expenses ─────────────────────────────────────────────────────────────
    const interest      = loanPost * (interestRate / 100);
    const propMgtMin    = minAnnualRent * propMgtPct;
    const propMgtMax    = maxAnnualRent * propMgtPct;
    const leasingFee    = Number(minWeeklyRent) || 0;   // 1 week's rent
    const advertising   = 350;
    const vacancy       = Number(minWeeklyRent) || 0;   // 1 week's rent

    const totalFixed =
      interest +
      councilRates +
      (Number(waterRates)         || 0) +
      (Number(homeInsurance)      || 0) +
      (Number(landlordInsurance)  || 0) +
      (Number(maintenance)        || 0) +
      (Number(bankCharges)        || 0) +
      (Number(strata)             || 0) +
      (Number(landTax)            || 0) +
      leasingFee +
      advertising +
      vacancy;

    const minTotalExpenses = totalFixed + propMgtMin;
    const maxTotalExpenses = totalFixed + propMgtMax;

    // ── Pre-tax cash flow ────────────────────────────────────────────────────
    const minCashflowBT = minAnnualRent - minTotalExpenses;
    const maxCashflowBT = maxAnnualRent - maxTotalExpenses;

    // ── Tax benefit (negative gearing) ───────────────────────────────────────
    const minTaxableIncome = minCashflowBT - depreciation;
    const maxTaxableIncome = maxCashflowBT - depreciation;

    const minTaxBenefit = minTaxableIncome < 0
      ? Math.abs(minTaxableIncome) * taxRate
      : 0;
    const maxTaxBenefit = maxTaxableIncome < 0
      ? Math.abs(maxTaxableIncome) * taxRate
      : 0;

    // ── After-tax cash flow ──────────────────────────────────────────────────
    const minAfterTax = minCashflowBT + minTaxBenefit;
    const maxAfterTax = maxCashflowBT + maxTaxBenefit;

    // ── Yields ───────────────────────────────────────────────────────────────
    const minGrossYield = pp > 0 ? (minAnnualRent / pp) * 100 : 0;
    const maxGrossYield = pp > 0 ? (maxAnnualRent / pp) * 100 : 0;

    // ── Stamp duty & upfront costs ───────────────────────────────────────────
    const stampDutyResult = stampDuty(pp, state, buyerType);

    const totalCashRequired =
      (Number(depositAmount)    || 0) +
      stampDutyResult.amount +
      lmiResult.lmi +
      (Number(conveyancing)     || 0) +
      (Number(buildingPest)     || 0) +
      (Number(depSchedule)      || 0) +
      (Number(compliance)       || 0) +
      (Number(settlementLegal)  || 0) -
      (Number(equityUsed)       || 0);

    return {
      // Loan
      loanPre,
      loanPost,
      lvr,
      lmiResult,
      // State-derived
      propMgtPct,
      councilRates,
      depreciation,
      // Rental
      minAnnualRent,
      maxAnnualRent,
      // Expense breakdown
      interest,
      propMgtMin,
      propMgtMax,
      leasingFee,
      advertising,
      vacancy,
      totalFixed,
      minTotalExpenses,
      maxTotalExpenses,
      // Pre-tax cash flow
      minCashflowBT,
      maxCashflowBT,
      // Tax
      minTaxableIncome,
      maxTaxableIncome,
      minTaxBenefit,
      maxTaxBenefit,
      // After-tax cash flow
      minAfterTax,
      maxAfterTax,
      // Yields
      minGrossYield,
      maxGrossYield,
      // Stamp duty & upfront
      stampDutyResult,
      totalCashRequired,
    };
  }, [inputs]);
}
