export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    city: string;
    area: string;
    pincode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    landmarks: string[];
    metroDistance?: number;
    airportDistance?: number;
  };
  details: {
    bhk: number;
    bathrooms: number;
    carpetArea: number;
    builtUpArea: number;
    superBuiltUpArea?: number;
    furnishing: 'Unfurnished' | 'Semi-Furnished' | 'Fully-Furnished';
    floorNumber: number;
    totalFloors: number;
    ageOfProperty: string;
    facing: string;
    parking: number;
    balcony?: number;
    studyRoom?: boolean;
    servantRoom?: boolean;
    poojaRoom?: boolean;
  };
  propertyType: 'Apartment' | 'Villa' | 'Plot' | 'Commercial' | 'PG' | 'Farmhouse' | 'Penthouse';
  transactionType: 'Sale' | 'Rent' | 'Lease';
  amenities: string[];
  images: string[];
  virtualTour?: string;
  agent: {
    id: string;
    name: string;
    phone: string;
    email: string;
    photo: string;
    experience: number;
    languages: string[];
    verified: boolean;
    rating: number;
    totalProperties: number;
  };
  features: {
    reraApproved: boolean;
    reraNumber?: string;
    vastuCompliant: boolean;
    powerBackup: boolean;
    waterSupply: boolean;
    security: boolean;
    gatedCommunity: boolean;
    lift: boolean;
    petFriendly: boolean;
    readyToMove: boolean;
    underConstruction: boolean;
    possessionDate?: string;
  };
  nearbyPlaces: {
    schools: string[];
    hospitals: string[];
    transport: string[];
    shopping: string[];
    restaurants: string[];
    banks: string[];
    parks: string[];
  };
  listedDate: string;
  status: 'Active' | 'Sold' | 'Rented' | 'Under Agreement' | 'Withdrawn';
  views: number;
  favorites: number;
  developer?: {
    name: string;
    rating: number;
    totalProjects: number;
    logo?: string;
  };
  financing?: {
    bankApproved: boolean;
    banks: string[];
    maxLoanAmount?: number;
    interestRate?: number;
  };
  documents?: {
    titleDeed: boolean;
    buildingPlan: boolean;
    occupancyCertificate: boolean;
    completionCertificate: boolean;
    taxReceipts: boolean;
  };
  pricing?: {
    pricePerSqFt: number;
    maintenanceCharges?: number;
    bookingAmount?: number;
    stampDuty?: number;
    registrationCharges?: number;
  };
}

export interface PropertyFilter {
  city?: string;
  area?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  bhk?: number[];
  propertyType?: string[];
  transactionType?: 'Sale' | 'Rent' | 'Lease' | 'All';
  amenities?: string[];
  furnishing?: string[];
  possessionStatus?: 'Ready to Move' | 'Under Construction' | 'All';
  reraApproved?: boolean;
  vastuCompliant?: boolean;
  sortBy?: 'price-low' | 'price-high' | 'newest' | 'oldest' | 'relevance' | 'area-low' | 'area-high';
  page?: number;
  limit?: number;
}

export interface PropertySearchResult {
  properties: Property[];
  total: number;
  page: number;
  totalPages: number;
  hasMore: boolean;
}