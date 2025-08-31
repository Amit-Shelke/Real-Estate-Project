import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingUp, Info } from 'lucide-react';
import { calculateEMIDetails, calculateTotalCost } from '../../utils/calculation';

interface EMICalculatorProps {
  propertyPrice: number;
  className?: string;
}

const EMICalculator: React.FC<EMICalculatorProps> = ({ propertyPrice, className = '' }) => {
  const [downPayment, setDownPayment] = useState(20); // 20% default
  const [loanAmount, setLoanAmount] = useState(propertyPrice * 0.8);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [state, setState] = useState('Maharashtra');

  useEffect(() => {
    setLoanAmount(propertyPrice * (1 - downPayment / 100));
  }, [propertyPrice, downPayment]);

  const emiDetails = calculateEMIDetails(loanAmount, interestRate, tenure * 12);
  const totalCost = calculateTotalCost(propertyPrice, state);

  const downPaymentAmount = propertyPrice * (downPayment / 100);
  const totalEMIAmount = emiDetails.emi * tenure * 12;
  const totalInterestAmount = emiDetails.totalInterest;

  const states = [
    'Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Telangana', 'Andhra Pradesh',
    'Gujarat', 'Punjab', 'Haryana', 'Uttar Pradesh', 'West Bengal', 'Kerala',
    'Rajasthan', 'Madhya Pradesh', 'Odisha', 'Bihar', 'Jharkhand', 'Chhattisgarh',
    'Assam'
  ];

  const interestRates = [
    { bank: 'HDFC Bank', rate: 8.5 },
    { bank: 'ICICI Bank', rate: 8.75 },
    { bank: 'SBI', rate: 8.25 },
    { bank: 'Axis Bank', rate: 8.6 },
    { bank: 'Kotak Mahindra', rate: 8.4 }
  ];

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <Calculator className="h-5 w-5 text-primary-600" />
        <h3 className="text-lg font-semibold text-gray-900">EMI Calculator</h3>
      </div>

      {/* Property Price */}
      <div className="mb-4">
        <label className="form-label">Property Price</label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="number"
            value={propertyPrice.toLocaleString('en-IN')}
            readOnly
            className="form-input pl-10 bg-gray-50"
          />
        </div>
      </div>

      {/* Down Payment */}
      <div className="mb-4">
        <label className="form-label">Down Payment ({downPayment}%)</label>
        <div className="space-y-2">
          <input
            type="range"
            min="10"
            max="90"
            value={downPayment}
            onChange={(e) => setDownPayment(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>10%</span>
            <span>50%</span>
            <span>90%</span>
          </div>
          <div className="text-sm font-medium text-primary-600">
            ₹{downPaymentAmount.toLocaleString('en-IN')}
          </div>
        </div>
      </div>

      {/* Loan Amount */}
      <div className="mb-4">
        <label className="form-label">Loan Amount</label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="number"
            value={loanAmount.toLocaleString('en-IN')}
            readOnly
            className="form-input pl-10 bg-gray-50"
          />
        </div>
      </div>

      {/* Interest Rate */}
      <div className="mb-4">
        <label className="form-label">Interest Rate (% per annum)</label>
        <select
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          className="form-input"
        >
          {interestRates.map((bank) => (
            <option key={bank.bank} value={bank.rate}>
              {bank.bank} - {bank.rate}%
            </option>
          ))}
        </select>
      </div>

      {/* Tenure */}
      <div className="mb-4">
        <label className="form-label">Loan Tenure (Years)</label>
        <div className="space-y-2">
          <input
            type="range"
            min="5"
            max="30"
            value={tenure}
            onChange={(e) => setTenure(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>5 years</span>
            <span>15 years</span>
            <span>30 years</span>
          </div>
        </div>
      </div>

      {/* State for Additional Costs */}
      <div className="mb-6">
        <label className="form-label">State (for additional costs)</label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="form-input"
        >
          {states.map((stateName) => (
            <option key={stateName} value={stateName}>
              {stateName}
            </option>
          ))}
        </select>
      </div>

      {/* EMI Result */}
      <div className="bg-primary-50 rounded-lg p-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600">
            ₹{emiDetails.emi.toLocaleString('en-IN')}
          </div>
          <div className="text-sm text-gray-600">Monthly EMI</div>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="space-y-3 mb-4">
        <h4 className="font-semibold text-gray-900 flex items-center">
          <TrendingUp className="h-4 w-4 mr-2" />
          Cost Breakdown
        </h4>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Property Price:</span>
            <span className="font-medium">₹{propertyPrice.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Down Payment:</span>
            <span className="font-medium">₹{downPaymentAmount.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Loan Amount:</span>
            <span className="font-medium">₹{loanAmount.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Interest:</span>
            <span className="font-medium">₹{totalInterestAmount.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total EMI Amount:</span>
            <span className="font-medium">₹{totalEMIAmount.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      {/* Additional Costs */}
      <div className="space-y-3 mb-4">
        <h4 className="font-semibold text-gray-900 flex items-center">
          <Info className="h-4 w-4 mr-2" />
          Additional Costs
        </h4>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Stamp Duty:</span>
            <span className="font-medium">₹{totalCost.stampDuty.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Registration Charges:</span>
            <span className="font-medium">₹{totalCost.registrationCharges.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between border-t pt-2">
            <span className="text-gray-900 font-medium">Total Additional Cost:</span>
            <span className="font-bold text-primary-600">₹{totalCost.totalAdditionalCost.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      {/* Total Cost */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">Total Cost:</span>
          <span className="text-xl font-bold text-primary-600">
            ₹{totalCost.totalCost.toLocaleString('en-IN')}
          </span>
        </div>
        <div className="text-sm text-gray-600 mt-1">
          Including all charges and interest
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 text-xs text-gray-500">
        <p>* EMI calculation is approximate. Actual rates may vary based on credit score, income, and bank policies.</p>
        <p>* Additional costs like maintenance charges, society fees, and insurance are not included.</p>
      </div>
    </div>
  );
};

export default EMICalculator;