import { Property } from '../types/Property';

export const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 
  'Pune', 'Ahmedabad', 'Surat', 'Jaipur', 'Lucknow', 'Kanpur',
  'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad',
  'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik'
];

export const amenities = [
  'Swimming Pool', 'Gym', 'Clubhouse', 'Children\'s Play Area', 'Jogging Track',
  'Security', 'Power Backup', 'Lift', 'Parking', 'Garden', 'CCTV Surveillance',
  'Intercom', 'Fire Safety', 'Rainwater Harvesting', 'Solar Panels', 'Tennis Court',
  'Basketball Court', 'Badminton Court', 'Squash Court', 'Indoor Games', 'Party Hall',
  'Guest Parking', 'Servant Quarters', 'Pooja Room', 'Study Room', 'Balcony',
  'Modular Kitchen', 'Wardrobe', 'Air Conditioning', 'Geyser', 'Internet/WiFi'
];

export const propertyTypes = [
  'Apartment', 'Villa', 'Plot', 'Commercial', 'PG', 'Farmhouse', 'Penthouse'
];

export const furnishingTypes = [
  'Unfurnished', 'Semi-Furnished', 'Fully-Furnished'
];

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Luxurious 3 BHK Apartment in Bandra West',
    description: 'Premium 3 BHK apartment with world-class amenities, excellent connectivity, and stunning city views. Located in the heart of Bandra West, this property offers the perfect blend of luxury and convenience.',
    price: 25000000,
    location: {
      city: 'Mumbai',
      area: 'Bandra West',
      pincode: '400050',
      coordinates: { lat: 19.0596, lng: 72.8295 },
      landmarks: ['Bandra Railway Station', 'Linking Road', 'Bandra Kurla Complex'],
      metroDistance: 0.5,
      airportDistance: 8
    },
    details: {
      bhk: 3,
      bathrooms: 3,
      carpetArea: 1200,
      builtUpArea: 1450,
      superBuiltUpArea: 1650,
      furnishing: 'Semi-Furnished',
      floorNumber: 15,
      totalFloors: 25,
      ageOfProperty: 'Under Construction',
      facing: 'North-East',
      parking: 2,
      balcony: 2,
      studyRoom: true,
      servantRoom: true,
      poojaRoom: true
    },
    propertyType: 'Apartment',
    transactionType: 'Sale',
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Security', 'Lift', 'Garden', 'CCTV Surveillance'],
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    virtualTour: 'https://example.com/virtual-tour-1',
    agent: {
      id: 'agent1',
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      email: 'rajesh@propertyhub.com',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      experience: 8,
      languages: ['English', 'Hindi', 'Marathi'],
      verified: true,
      rating: 4.8,
      totalProperties: 45
    },
    features: {
      reraApproved: true,
      reraNumber: 'MahaRERA/A51234/2023',
      vastuCompliant: true,
      powerBackup: true,
      waterSupply: true,
      security: true,
      gatedCommunity: true,
      lift: true,
      petFriendly: true,
      readyToMove: false,
      underConstruction: true,
      possessionDate: '2025-12-31'
    },
    nearbyPlaces: {
      schools: ['Bombay Scottish School', 'Cathedral School', 'Dhirubhai Ambani International School'],
      hospitals: ['Lilavati Hospital', 'Holy Family Hospital', 'Kokilaben Hospital'],
      transport: ['Bandra Railway Station', 'Bandra Bus Depot', 'Metro Station'],
      shopping: ['Linking Road', 'Hill Road Market', 'Phoenix MarketCity'],
      restaurants: ['Pizza by the Bay', 'Cafe Coffee Day', 'McDonald\'s'],
      banks: ['HDFC Bank', 'ICICI Bank', 'State Bank of India'],
      parks: ['Carter Road Promenade', 'Joggers Park', 'Bandstand']
    },
    listedDate: '2025-01-10',
    status: 'Active',
    views: 1250,
    favorites: 89,
    developer: {
      name: 'Lodha Group',
      rating: 4.6,
      totalProjects: 150,
      logo: 'https://example.com/lodha-logo.png'
    },
    financing: {
      bankApproved: true,
      banks: ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank'],
      maxLoanAmount: 20000000,
      interestRate: 8.5
    },
    documents: {
      titleDeed: true,
      buildingPlan: true,
      occupancyCertificate: false,
      completionCertificate: false,
      taxReceipts: true
    },
    pricing: {
      pricePerSqFt: 17241,
      maintenanceCharges: 5000,
      bookingAmount: 2500000,
      stampDuty: 1250000,
      registrationCharges: 250000
    }
  },
  {
    id: '2',
    title: 'Modern 2 BHK Villa in Whitefield',
    description: 'Independent villa with garden and modern amenities in the heart of Bangalore\'s IT corridor. Perfect for families looking for privacy and luxury.',
    price: 12500000,
    location: {
      city: 'Bangalore',
      area: 'Whitefield',
      pincode: '560066',
      coordinates: { lat: 12.9698, lng: 77.7500 },
      landmarks: ['Phoenix MarketCity', 'ITPL', 'Whitefield Railway Station'],
      metroDistance: 2,
      airportDistance: 35
    },
    details: {
      bhk: 2,
      bathrooms: 2,
      carpetArea: 1800,
      builtUpArea: 2200,
      superBuiltUpArea: 2400,
      furnishing: 'Unfurnished',
      floorNumber: 0,
      totalFloors: 2,
      ageOfProperty: '2-5 years',
      facing: 'East',
      parking: 2,
      balcony: 1,
      studyRoom: false,
      servantRoom: true,
      poojaRoom: true
    },
    propertyType: 'Villa',
    transactionType: 'Sale',
    amenities: ['Garden', 'Security', 'Parking', 'Power Backup', 'CCTV Surveillance'],
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    agent: {
      id: 'agent2',
      name: 'Priya Sharma',
      phone: '+91 87654 32109',
      email: 'priya@propertyhub.com',
      photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      experience: 6,
      languages: ['English', 'Hindi', 'Kannada'],
      verified: true,
      rating: 4.7,
      totalProperties: 32
    },
    features: {
      reraApproved: true,
      reraNumber: 'KarRERA/A78901/2023',
      vastuCompliant: true,
      powerBackup: true,
      waterSupply: true,
      security: true,
      gatedCommunity: true,
      lift: false,
      petFriendly: true,
      readyToMove: true,
      underConstruction: false
    },
    nearbyPlaces: {
      schools: ['Ryan International School', 'Vibgyor High', 'Delhi Public School'],
      hospitals: ['Columbia Asia Hospital', 'Manipal Hospital', 'Apollo Hospital'],
      transport: ['Whitefield Railway Station', 'BMTC Bus Stand', 'Metro Station'],
      shopping: ['Phoenix MarketCity', 'Forum Shantiniketan', 'VR Mall'],
      restaurants: ['Pizza Hut', 'KFC', 'Domino\'s'],
      banks: ['HDFC Bank', 'ICICI Bank', 'Axis Bank'],
      parks: ['Whitefield Park', 'Cubbon Park', 'Lalbagh']
    },
    listedDate: '2025-01-08',
    status: 'Active',
    views: 890,
    favorites: 56,
    financing: {
      bankApproved: true,
      banks: ['HDFC Bank', 'ICICI Bank', 'SBI'],
      maxLoanAmount: 10000000,
      interestRate: 8.75
    },
    documents: {
      titleDeed: true,
      buildingPlan: true,
      occupancyCertificate: true,
      completionCertificate: true,
      taxReceipts: true
    },
    pricing: {
      pricePerSqFt: 6944,
      maintenanceCharges: 3000,
      bookingAmount: 1250000,
      stampDuty: 625000,
      registrationCharges: 125000
    }
  },
  {
    id: '3',
    title: 'Premium 4 BHK Penthouse in Gurgaon',
    description: 'Luxury penthouse with panoramic city views and top-tier amenities in the Millennium City. Perfect for high-end buyers seeking exclusivity.',
    price: 45000000,
    location: {
      city: 'Gurgaon',
      area: 'Cyber City',
      pincode: '122002',
      coordinates: { lat: 28.4595, lng: 77.0266 },
      landmarks: ['Cyber Hub', 'DLF Cyber City', 'Metro Station'],
      metroDistance: 0.3,
      airportDistance: 15
    },
    details: {
      bhk: 4,
      bathrooms: 4,
      carpetArea: 2800,
      builtUpArea: 3200,
      superBuiltUpArea: 3600,
      furnishing: 'Fully-Furnished',
      floorNumber: 20,
      totalFloors: 20,
      ageOfProperty: '1-2 years',
      facing: 'North',
      parking: 3,
      balcony: 3,
      studyRoom: true,
      servantRoom: true,
      poojaRoom: true
    },
    propertyType: 'Penthouse',
    transactionType: 'Sale',
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Children\'s Play Area', 'Security', 'Tennis Court'],
    images: [
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    agent: {
      id: 'agent3',
      name: 'Amit Singh',
      phone: '+91 76543 21098',
      email: 'amit@propertyhub.com',
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      experience: 12,
      languages: ['English', 'Hindi', 'Punjabi'],
      verified: true,
      rating: 4.9,
      totalProperties: 78
    },
    features: {
      reraApproved: true,
      reraNumber: 'HarRERA/A34567/2023',
      vastuCompliant: true,
      powerBackup: true,
      waterSupply: true,
      security: true,
      gatedCommunity: true,
      lift: true,
      petFriendly: true,
      readyToMove: true,
      underConstruction: false
    },
    nearbyPlaces: {
      schools: ['DPS Gurgaon', 'Pathways School', 'Shiv Nadar School'],
      hospitals: ['Medanta Hospital', 'Artemis Hospital', 'Fortis Hospital'],
      transport: ['Cyber City Metro', 'Rapid Metro', 'Bus Stand'],
      shopping: ['Cyber Hub', 'Ambience Mall', 'DLF Mall of India'],
      restaurants: ['Hard Rock Cafe', 'Pizza Express', 'Starbucks'],
      banks: ['HDFC Bank', 'ICICI Bank', 'Axis Bank'],
      parks: ['Leisure Valley Park', 'Sultanpur National Park']
    },
    listedDate: '2025-01-05',
    status: 'Active',
    views: 2100,
    favorites: 145,
    developer: {
      name: 'DLF Limited',
      rating: 4.8,
      totalProjects: 200,
      logo: 'https://example.com/dlf-logo.png'
    },
    financing: {
      bankApproved: true,
      banks: ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank'],
      maxLoanAmount: 36000000,
      interestRate: 8.25
    },
    documents: {
      titleDeed: true,
      buildingPlan: true,
      occupancyCertificate: true,
      completionCertificate: true,
      taxReceipts: true
    },
    pricing: {
      pricePerSqFt: 16071,
      maintenanceCharges: 8000,
      bookingAmount: 4500000,
      stampDuty: 2250000,
      registrationCharges: 450000
    }
  },
  {
    id: '4',
    title: 'Affordable 1 BHK for Rent in Koramangala',
    description: 'Well-maintained 1 BHK apartment in the heart of Bangalore\'s startup ecosystem. Perfect for young professionals.',
    price: 35000,
    location: {
      city: 'Bangalore',
      area: 'Koramangala',
      pincode: '560034',
      coordinates: { lat: 12.9279, lng: 77.6271 },
      landmarks: ['Forum Mall', 'Koramangala Club', 'HSR Layout'],
      metroDistance: 1.5,
      airportDistance: 30
    },
    details: {
      bhk: 1,
      bathrooms: 1,
      carpetArea: 600,
      builtUpArea: 750,
      superBuiltUpArea: 850,
      furnishing: 'Fully-Furnished',
      floorNumber: 3,
      totalFloors: 5,
      ageOfProperty: '5-10 years',
      facing: 'South',
      parking: 1,
      balcony: 1,
      studyRoom: false,
      servantRoom: false,
      poojaRoom: false
    },
    propertyType: 'Apartment',
    transactionType: 'Rent',
    amenities: ['Security', 'Lift', 'Power Backup', 'Internet/WiFi'],
    images: [
      'https://images.pexels.com/photos/2029734/pexels-photo-2029734.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    agent: {
      id: 'agent4',
      name: 'Meera Nair',
      phone: '+91 65432 10987',
      email: 'meera@propertyhub.com',
      photo: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
      experience: 4,
      languages: ['English', 'Hindi', 'Kannada', 'Malayalam'],
      verified: true,
      rating: 4.5,
      totalProperties: 28
    },
    features: {
      reraApproved: true,
      reraNumber: 'KarRERA/A12345/2023',
      vastuCompliant: true,
      powerBackup: true,
      waterSupply: true,
      security: true,
      gatedCommunity: false,
      lift: true,
      petFriendly: false,
      readyToMove: true,
      underConstruction: false
    },
    nearbyPlaces: {
      schools: ['Indus International School', 'Inventure Academy', 'Vibgyor High'],
      hospitals: ['Manipal Hospital', 'Apollo Hospital', 'Fortis Hospital'],
      transport: ['Koramangala Bus Stand', 'HSR Layout Metro', 'BMTC Depot'],
      shopping: ['Forum Mall', '5th Block Shopping Complex', 'Koramangala Club'],
      restaurants: ['Pizza Hut', 'KFC', 'Domino\'s', 'Cafe Coffee Day'],
      banks: ['HDFC Bank', 'ICICI Bank', 'Axis Bank'],
      parks: ['Koramangala Park', 'Cubbon Park']
    },
    listedDate: '2025-01-12',
    status: 'Active',
    views: 650,
    favorites: 23,
    documents: {
      titleDeed: true,
      buildingPlan: true,
      occupancyCertificate: true,
      completionCertificate: true,
      taxReceipts: true
    },
    pricing: {
      pricePerSqFt: 58,
      maintenanceCharges: 2000,
      bookingAmount: 70000,
      stampDuty: 0,
      registrationCharges: 0
    }
  },
  {
    id: '5',
    title: 'Spacious 2 BHK Apartment in Hinjewadi',
    description: 'Modern 2 BHK apartment in Pune\'s IT hub with excellent connectivity and amenities. Perfect for IT professionals.',
    price: 8500000,
    location: {
      city: 'Pune',
      area: 'Hinjewadi',
      pincode: '411057',
      coordinates: { lat: 18.5912, lng: 73.7415 },
      landmarks: ['Hinjewadi IT Park', 'Wakad', 'Pimpri-Chinchwad'],
      metroDistance: 3,
      airportDistance: 25
    },
    details: {
      bhk: 2,
      bathrooms: 2,
      carpetArea: 950,
      builtUpArea: 1150,
      superBuiltUpArea: 1300,
      furnishing: 'Semi-Furnished',
      floorNumber: 8,
      totalFloors: 15,
      ageOfProperty: '1-2 years',
      facing: 'North-East',
      parking: 1,
      balcony: 1,
      studyRoom: false,
      servantRoom: false,
      poojaRoom: true
    },
    propertyType: 'Apartment',
    transactionType: 'Sale',
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Security', 'Lift', 'Garden'],
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    agent: {
      id: 'agent5',
      name: 'Rahul Deshmukh',
      phone: '+91 54321 09876',
      email: 'rahul@propertyhub.com',
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      experience: 7,
      languages: ['English', 'Hindi', 'Marathi'],
      verified: true,
      rating: 4.6,
      totalProperties: 41
    },
    features: {
      reraApproved: true,
      reraNumber: 'MahRERA/A67890/2023',
      vastuCompliant: true,
      powerBackup: true,
      waterSupply: true,
      security: true,
      gatedCommunity: true,
      lift: true,
      petFriendly: true,
      readyToMove: true,
      underConstruction: false
    },
    nearbyPlaces: {
      schools: ['Vibgyor High', 'Delhi Public School', 'Podar International School'],
      hospitals: ['Sahyadri Hospital', 'Aditya Birla Hospital', 'Ruby Hall Clinic'],
      transport: ['Hinjewadi Bus Stand', 'Metro Station', 'Pune Railway Station'],
      shopping: ['Phoenix MarketCity', 'Seasons Mall', 'Westend Mall'],
      restaurants: ['Pizza Hut', 'KFC', 'Domino\'s'],
      banks: ['HDFC Bank', 'ICICI Bank', 'Axis Bank'],
      parks: ['Hinjewadi Park', 'Pune Central Park']
    },
    listedDate: '2025-01-15',
    status: 'Active',
    views: 720,
    favorites: 34,
    developer: {
      name: 'Kolte Patil Developers',
      rating: 4.4,
      totalProjects: 85,
      logo: 'https://example.com/kolte-patil-logo.png'
    },
    financing: {
      bankApproved: true,
      banks: ['HDFC Bank', 'ICICI Bank', 'SBI'],
      maxLoanAmount: 6800000,
      interestRate: 8.5
    },
    documents: {
      titleDeed: true,
      buildingPlan: true,
      occupancyCertificate: true,
      completionCertificate: true,
      taxReceipts: true
    },
    pricing: {
      pricePerSqFt: 8947,
      maintenanceCharges: 3500,
      bookingAmount: 850000,
      stampDuty: 425000,
      registrationCharges: 85000
    }
  }
];

export const featuredProjects = [
  {
    id: 'project1',
    name: 'Prestige Lake Ridge',
    location: 'Whitefield, Bangalore',
    priceRange: '₹80L - ₹1.2Cr',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    developer: 'Prestige Group',
    possession: 'Dec 2025',
    reraNumber: 'KarRERA/P12345/2023',
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Security'],
    description: 'Luxury residential project with world-class amenities and excellent connectivity.'
  },
  {
    id: 'project2',
    name: 'Lodha Park',
    location: 'Lower Parel, Mumbai',
    priceRange: '₹2.5Cr - ₹5Cr',
    image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
    developer: 'Lodha Group',
    possession: 'Ready to Move',
    reraNumber: 'MahaRERA/L67890/2023',
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Security', 'Tennis Court'],
    description: 'Ultra-luxury residential project in the heart of Mumbai with premium amenities.'
  },
  {
    id: 'project3',
    name: 'DLF Crest',
    location: 'Sector 54, Gurgaon',
    priceRange: '₹1.8Cr - ₹3.5Cr',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    developer: 'DLF Limited',
    possession: 'Mar 2026',
    reraNumber: 'HarRERA/D34567/2023',
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Security', 'Garden'],
    description: 'Premium residential project with modern amenities and excellent connectivity.'
  }
];

export const trendingAreas = [
  {
    city: 'Mumbai',
    areas: ['Bandra West', 'Andheri West', 'Powai', 'Worli', 'Lower Parel']
  },
  {
    city: 'Delhi',
    areas: ['Dwarka', 'Vasant Vihar', 'Saket', 'Hauz Khas', 'Greater Noida']
  },
  {
    city: 'Bangalore',
    areas: ['Whitefield', 'Koramangala', 'HSR Layout', 'Electronic City', 'Sarjapur']
  },
  {
    city: 'Hyderabad',
    areas: ['Gachibowli', 'Hitech City', 'Banjara Hills', 'Jubilee Hills', 'Madhapur']
  },
  {
    city: 'Pune',
    areas: ['Hinjewadi', 'Wakad', 'Kharadi', 'Viman Nagar', 'Koregaon Park']
  }
];

export const popularSearches = [
  '2 BHK in Mumbai under 1Cr',
  '3 BHK in Bangalore for rent',
  'Villa in Pune',
  '1 BHK in Delhi under 50L',
  'Penthouse in Gurgaon',
  'Plot in Hyderabad',
  'Commercial property in Chennai',
  'PG accommodation in Bangalore'
];