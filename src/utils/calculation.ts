export const formatPrice = (price: number, transactionType: 'Sale' | 'Rent' | 'Lease'): string => {
  if (transactionType === 'Rent') {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L/month`;
    }
    return `₹${price.toLocaleString('en-IN')}/month`;
  }
  
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(1)}Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(1)}L`;
  }
  return `₹${price.toLocaleString('en-IN')}`;
};

export const formatPricePerSqFt = (price: number, area: number): string => {
  const pricePerSqFt = price / area;
  return `₹${pricePerSqFt.toLocaleString('en-IN')}/sq.ft`;
};

export const calculateEMI = (principal: number, rate: number, tenure: number): number => {
  const monthlyRate = rate / (12 * 100);
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / 
              (Math.pow(1 + monthlyRate, tenure) - 1);
  return Math.round(emi);
};

export const calculateEMIDetails = (principal: number, rate: number, tenure: number) => {
  const monthlyRate = rate / (12 * 100);
  const emi = calculateEMI(principal, rate, tenure);
  const totalAmount = emi * tenure;
  const totalInterest = totalAmount - principal;
  
  return {
    emi: Math.round(emi),
    totalAmount: Math.round(totalAmount),
    totalInterest: Math.round(totalInterest),
    principal: principal,
    monthlyRate: monthlyRate,
    tenure: tenure
  };
};

export const formatArea = (area: number): string => {
  if (area >= 1000) {
    return `${(area / 1000).toFixed(1)}K sq.ft`;
  }
  return `${area} sq.ft`;
};

export const calculateStampDuty = (propertyValue: number, state: string): number => {
  // Simplified stamp duty calculation (varies by state)
  const stampDutyRates: Record<string, number> = {
    'Maharashtra': 0.05, // 5%
    'Delhi': 0.06, // 6%
    'Karnataka': 0.05, // 5%
    'Tamil Nadu': 0.07, // 7%
    'Telangana': 0.05, // 5%
    'Andhra Pradesh': 0.05, // 5%
    'Gujarat': 0.049, // 4.9%
    'Punjab': 0.06, // 6%
    'Haryana': 0.06, // 6%
    'Uttar Pradesh': 0.07, // 7%
    'West Bengal': 0.06, // 6%
    'Kerala': 0.08, // 8%
    'Rajasthan': 0.05, // 5%
    'Madhya Pradesh': 0.06, // 6%
    'Odisha': 0.05, // 5%
    'Bihar': 0.06, // 6%
    'Jharkhand': 0.06, // 6%
    'Chhattisgarh': 0.05, // 5%
    'Assam': 0.08, // 8%
    'default': 0.06 // Default 6%
  };
  
  const rate = stampDutyRates[state] || stampDutyRates.default;
  return Math.round(propertyValue * rate);
};

export const calculateRegistrationCharges = (propertyValue: number, state: string): number => {
  // Simplified registration charges calculation
  const registrationRates: Record<string, number> = {
    'Maharashtra': 0.01, // 1%
    'Delhi': 0.01, // 1%
    'Karnataka': 0.01, // 1%
    'Tamil Nadu': 0.01, // 1%
    'Telangana': 0.01, // 1%
    'Andhra Pradesh': 0.01, // 1%
    'Gujarat': 0.01, // 1%
    'Punjab': 0.01, // 1%
    'Haryana': 0.01, // 1%
    'Uttar Pradesh': 0.01, // 1%
    'West Bengal': 0.01, // 1%
    'Kerala': 0.01, // 1%
    'Rajasthan': 0.01, // 1%
    'Madhya Pradesh': 0.01, // 1%
    'Odisha': 0.01, // 1%
    'Bihar': 0.01, // 1%
    'Jharkhand': 0.01, // 1%
    'Chhattisgarh': 0.01, // 1%
    'Assam': 0.01, // 1%
    'default': 0.01 // Default 1%
  };
  
  const rate = registrationRates[state] || registrationRates.default;
  return Math.round(propertyValue * rate);
};

export const calculateTotalCost = (propertyValue: number, state: string): {
  stampDuty: number;
  registrationCharges: number;
  totalAdditionalCost: number;
  totalCost: number;
} => {
  const stampDuty = calculateStampDuty(propertyValue, state);
  const registrationCharges = calculateRegistrationCharges(propertyValue, state);
  const totalAdditionalCost = stampDuty + registrationCharges;
  const totalCost = propertyValue + totalAdditionalCost;
  
  return {
    stampDuty,
    registrationCharges,
    totalAdditionalCost,
    totalCost
  };
};

export const calculateRentalYield = (annualRent: number, propertyValue: number): number => {
  return (annualRent / propertyValue) * 100;
};

export const calculateROI = (currentValue: number, purchasePrice: number, timeInYears: number): number => {
  const totalReturn = currentValue - purchasePrice;
  const roi = (totalReturn / purchasePrice) * 100;
  const annualizedROI = roi / timeInYears;
  return annualizedROI;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatCompactCurrency = (amount: number): string => {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)}Cr`;
  } else if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)}L`;
  } else if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(1)}K`;
  }
  return `₹${amount}`;
};

export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return Math.round(distance * 10) / 10; // Round to 1 decimal place
};

export const calculateMaintenanceCharges = (builtUpArea: number, ratePerSqFt: number = 2): number => {
  return Math.round(builtUpArea * ratePerSqFt);
};

export const calculateBookingAmount = (propertyValue: number, percentage: number = 10): number => {
  return Math.round(propertyValue * (percentage / 100));
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatRelativeDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
};