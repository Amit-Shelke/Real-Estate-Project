export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  userType: 'Buyer' | 'Seller' | 'Agent' | 'Builder' | 'Admin';
  avatar?: string;
  location?: {
    city: string;
    state: string;
    pincode?: string;
  };
  preferences?: {
    budget: {
      min: number;
      max: number;
    };
    propertyTypes: string[];
    locations: string[];
    bhk: number[];
    amenities: string[];
    furnishing: string[];
    possessionStatus: 'Ready to Move' | 'Under Construction' | 'All';
  };
  favorites: string[];
  recentlyViewed: string[];
  createdAt: string;
  lastActive: string;
  isVerified: boolean;
  isPremium: boolean;
  subscription?: {
    type: 'Basic' | 'Premium' | 'Enterprise';
    startDate: string;
    endDate: string;
    features: string[];
  };
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
    whatsapp: boolean;
  };
  documents?: {
    aadharCard?: string;
    panCard?: string;
    addressProof?: string;
    incomeProof?: string;
  };
  agentProfile?: {
    licenseNumber: string;
    experience: number;
    specializations: string[];
    languages: string[];
    rating: number;
    totalProperties: number;
    totalDeals: number;
    commission: number;
    teamSize?: number;
    officeAddress?: string;
    workingHours?: string;
  };
  builderProfile?: {
    companyName: string;
    gstNumber: string;
    reraNumber: string;
    totalProjects: number;
    completedProjects: number;
    ongoingProjects: number;
    averageRating: number;
    specializations: string[];
    certifications: string[];
  };
}

export interface SearchFilters {
  city: string;
  area?: string;
  priceRange: {
    min: number;
    max: number;
  };
  bhk: number[];
  propertyType: string[];
  transactionType: 'Sale' | 'Rent' | 'Lease' | 'All';
  amenities: string[];
  furnishing: string[];
  possessionStatus: 'Ready to Move' | 'Under Construction' | 'All';
  reraApproved: boolean;
  vastuCompliant: boolean;
  sortBy: 'price-low' | 'price-high' | 'newest' | 'oldest' | 'relevance' | 'area-low' | 'area-high';
  page: number;
  limit: number;
}

export interface UserProfile {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: string;
    gender?: 'Male' | 'Female' | 'Other';
    maritalStatus?: 'Single' | 'Married' | 'Divorced' | 'Widowed';
  };
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  professionalInfo?: {
    occupation: string;
    company: string;
    experience: number;
    income: number;
    employmentType: 'Salaried' | 'Self-Employed' | 'Business Owner' | 'Retired';
  };
  preferences: {
    budget: {
      min: number;
      max: number;
    };
    propertyTypes: string[];
    locations: string[];
    bhk: number[];
    amenities: string[];
    furnishing: string[];
    possessionStatus: 'Ready to Move' | 'Under Construction' | 'All';
    timeline: 'Immediate' | '3-6 months' | '6-12 months' | '1+ years';
  };
}

export interface Notification {
  id: string;
  userId: string;
  type: 'Property' | 'Price' | 'New' | 'System' | 'Agent' | 'Deal';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  actionUrl?: string;
      metadata?: Record<string, unknown>;
}