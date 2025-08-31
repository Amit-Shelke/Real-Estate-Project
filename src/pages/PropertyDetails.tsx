import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Home, Car, Compass, Building, CheckCircle, Phone, Mail, MessageSquare, Heart, Share2, School, Guitar as Hospital, Bus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { mockProperties } from '../utils/mockData';
import { formatPrice, formatArea } from "../utils/calculation";
import EMICalculator from '../components/property/EMICalculator';
import { useAuth } from '../hooks/useAuth';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, toggleFavorite } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showEMICalculator, setShowEMICalculator] = useState(false);

  const property = mockProperties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <button
            onClick={() => navigate('/properties')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Properties
          </button>
        </div>
      </div>
    );
  }

  const isFavorite = user?.favorites.includes(property.id) || false;

  const handleFavoriteClick = () => {
    if (user) {
      toggleFavorite(property.id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={handleFavoriteClick}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isFavorite 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                <span>{isFavorite ? 'Saved' : 'Save'}</span>
              </button>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-96">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex space-x-2">
                    {property.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{property.location.area}, {property.location.city} - {property.location.pincode}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">
                    {formatPrice(property.price, property.transactionType)}
                  </div>
                  {property.transactionType === 'Sale' && (
                    <div className="text-sm text-gray-600">
                      ₹{Math.round(property.price / property.details.carpetArea).toLocaleString('en-IN')}/sq.ft
                    </div>
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-6">{property.description}</p>

              {/* Key Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Home className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <div className="font-semibold">{property.details.bhk} BHK</div>
                  <div className="text-sm text-gray-600">{property.details.bathrooms} Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Building className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <div className="font-semibold">{formatArea(property.details.carpetArea)}</div>
                  <div className="text-sm text-gray-600">Carpet Area</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Car className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                  <div className="font-semibold">{property.details.parking}</div>
                  <div className="text-sm text-gray-600">Parking</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Compass className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                  <div className="font-semibold">{property.details.facing}</div>
                  <div className="text-sm text-gray-600">Facing</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.reraApproved && (
                    <div className="flex items-center space-x-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      <span>RERA Approved</span>
                    </div>
                  )}
                  {property.features.vastuCompliant && (
                    <div className="flex items-center space-x-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      <span>Vastu Compliant</span>
                    </div>
                  )}
                  {property.features.powerBackup && (
                    <div className="flex items-center space-x-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      <span>Power Backup</span>
                    </div>
                  )}
                  {property.features.security && (
                    <div className="flex items-center space-x-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      <span>24/7 Security</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nearby Places */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Nearby</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <School className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Schools</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {property.nearbyPlaces.schools.map((school, index) => (
                        <li key={index}>{school}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Hospital className="h-5 w-5 text-red-600" />
                      <span className="font-medium">Hospitals</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {property.nearbyPlaces.hospitals.map((hospital, index) => (
                        <li key={index}>{hospital}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Bus className="h-5 w-5 text-green-600" />
                      <span className="font-medium">Transport</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {property.nearbyPlaces.transport.map((transport, index) => (
                        <li key={index}>{transport}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <ShoppingBag className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">Shopping</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {property.nearbyPlaces.shopping.map((shopping, index) => (
                        <li key={index}>{shopping}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Contact */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={property.agent.photo}
                  alt={property.agent.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{property.agent.name}</h3>
                  <p className="text-gray-600">Real Estate Agent</p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center justify-center space-x-2 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
                
                <a
                  href={`https://wa.me/${property.agent.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
                
                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex items-center justify-center space-x-2 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Details</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type:</span>
                  <span className="font-medium">{property.propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Carpet Area:</span>
                  <span className="font-medium">{formatArea(property.details.carpetArea)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Built-up Area:</span>
                  <span className="font-medium">{formatArea(property.details.builtUpArea)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Floor:</span>
                  <span className="font-medium">{property.details.floorNumber} of {property.details.totalFloors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Age:</span>
                  <span className="font-medium">{property.details.ageOfProperty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Furnishing:</span>
                  <span className="font-medium">{property.details.furnishing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Facing:</span>
                  <span className="font-medium">{property.details.facing}</span>
                </div>
              </div>
            </div>

            {/* EMI Calculator */}
            {property.transactionType === 'Sale' && (
              <div>
                {!showEMICalculator ? (
                  <button
                    onClick={() => setShowEMICalculator(true)}
                    className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Calculate EMI
                  </button>
                ) : (
                  <EMICalculator propertyPrice={property.price} />
                )}
              </div>
            )}

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">({property.location.coordinates.lat}, {property.location.coordinates.lng})</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;