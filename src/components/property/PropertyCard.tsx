import React from 'react';
import { Heart, MapPin, Home, Car, CheckCircle, Star, Eye, Calendar, Building, Compass } from 'lucide-react';
import { Property } from '../../types/Property';
import { formatPrice, formatArea, formatRelativeDate } from '../../utils/calculation';
import { useAuth } from '../../hooks/useAuth';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
  variant?: 'default' | 'compact' | 'featured';
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick, variant = 'default' }) => {
  const { user, toggleFavorite } = useAuth();
  const isFavorite = user?.favorites.includes(property.id) || false;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (user) {
      toggleFavorite(property.id);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-success-100 text-success-800 border-success-200';
      case 'Sold':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Rented':
        return 'bg-warning-100 text-warning-800 border-warning-200';
      case 'Under Agreement':
        return 'bg-primary-100 text-primary-800 border-primary-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTransactionTypeColor = (type: string) => {
    switch (type) {
      case 'Sale':
        return 'bg-green-500 text-white';
      case 'Rent':
        return 'bg-orange-500 text-white';
      case 'Lease':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  if (variant === 'compact') {
    return (
      <div 
        className="property-card group cursor-pointer"
        onClick={onClick}
      >
        <div className="relative h-32 overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="property-image"
          />
          <div className="absolute top-2 right-2">
            <button
              onClick={handleFavoriteClick}
              className={`p-1.5 rounded-full ${
                isFavorite 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-600 hover:text-red-500'
              } transition-colors shadow-md`}
            >
              <Heart className={`h-3 w-3 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>
          <div className="absolute top-2 left-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTransactionTypeColor(property.transactionType)}`}>
              {property.transactionType}
            </span>
          </div>
        </div>

        <div className="p-3">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">{property.title}</h3>
          <div className="flex items-center text-gray-600 text-xs mb-2">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{property.location.area}, {property.location.city}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-primary-600">
              {formatPrice(property.price, property.transactionType)}
            </span>
            <div className="flex items-center space-x-2 text-xs text-gray-600">
              <span className="flex items-center space-x-1">
                <Home className="h-3 w-3" />
                <span>{property.details.bhk} BHK</span>
              </span>
              <span>{formatArea(property.details.carpetArea)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="property-card group cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="property-image"
        />
        
        {/* Favorite Button */}
        <div className="absolute top-3 right-3">
          <button
            onClick={handleFavoriteClick}
            className={`p-2 rounded-full ${
              isFavorite 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-600 hover:text-red-500'
            } transition-colors shadow-md`}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Transaction Type Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTransactionTypeColor(property.transactionType)}`}>
            For {property.transactionType}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 left-3 transform translate-y-8">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(property.status)}`}>
            {property.status}
          </span>
        </div>

        {/* RERA Badge */}
        {property.features.reraApproved && (
          <div className="absolute bottom-3 left-3">
            <span className="flex items-center space-x-1 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
              <CheckCircle className="h-3 w-3" />
              <span>RERA</span>
            </span>
          </div>
        )}

        {/* Vastu Badge */}
        {property.features.vastuCompliant && (
          <div className="absolute bottom-3 left-3 transform translate-x-16">
            <span className="flex items-center space-x-1 bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
              <Home className="h-3 w-3" />
              <span>Vastu</span>
            </span>
          </div>
        )}

        {/* Views and Favorites */}
        <div className="absolute bottom-3 right-3 flex items-center space-x-2 text-white text-xs">
          <div className="flex items-center space-x-1 bg-black/50 px-2 py-1 rounded-full">
            <Eye className="h-3 w-3" />
            <span>{property.views}</span>
          </div>
          <div className="flex items-center space-x-1 bg-black/50 px-2 py-1 rounded-full">
            <Heart className="h-3 w-3" />
            <span>{property.favorites}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Price */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1">{property.title}</h3>
          <span className="price-medium ml-2">
            {formatPrice(property.price, property.transactionType)}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location.area}, {property.location.city}</span>
        </div>

        {/* Key Details */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Home className="h-4 w-4" />
              <span>{property.details.bhk} BHK</span>
            </span>
            <span className="flex items-center space-x-1">
              <Building className="h-4 w-4" />
              <span>{formatArea(property.details.carpetArea)}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Car className="h-4 w-4" />
              <span>{property.details.parking}</span>
            </span>
          </div>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-600">
          <div className="flex items-center space-x-1">
            <Compass className="h-3 w-3" />
            <span>{property.details.facing}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{formatRelativeDate(property.listedDate)}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1 mb-3">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Agent Info */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <img
              src={property.agent.photo}
              alt={property.agent.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div>
              <span className="text-sm font-medium text-gray-700">{property.agent.name}</span>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span className="text-xs text-gray-600">{property.agent.rating}</span>
                <span className="text-xs text-gray-500">({property.agent.totalProperties} properties)</span>
              </div>
            </div>
          </div>
          {property.agent.verified && (
            <div className="flex items-center space-x-1 text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span className="text-xs">Verified</span>
            </div>
          )}
        </div>

        {/* Developer Info (if available) */}
        {property.developer && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-600">Developer</span>
                <p className="text-sm font-medium text-gray-700">{property.developer.name}</p>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span className="text-xs text-gray-600">{property.developer.rating}</span>
              </div>
            </div>
          </div>
        )}

        {/* Price per sq ft */}
        {property.pricing && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Price per sq.ft</span>
              <span className="text-sm font-medium text-primary-600">
                ₹{property.pricing.pricePerSqFt.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;