import React, { useState } from 'react';
import { Search, MapPin, Filter, ChevronDown, CheckCircle, Home } from 'lucide-react';
import { cities, amenities, propertyTypes, furnishingTypes } from '../../utils/mockData';
import { SearchFilters } from '../../types/User';

interface SearchBarProps {
  onSearch: (filters: Partial<SearchFilters>) => void;
  className?: string;
  isExpanded?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className = '', isExpanded = false }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(isExpanded);
  const [filters, setFilters] = useState<Partial<SearchFilters>>({
    transactionType: 'Sale',
    priceRange: { min: 0, max: 50000000 },
    bhk: [],
    propertyType: [],
    amenities: [],
    furnishing: [],
    possessionStatus: 'All',
    reraApproved: false,
    vastuCompliant: false,
    sortBy: 'relevance'
  });

  const handleSearch = () => {
    onSearch({
      ...filters,
      city: selectedCity || searchQuery,
      area: selectedArea
    });
  };

  const handleReset = () => {
    setFilters({
      transactionType: 'Sale',
      priceRange: { min: 0, max: 50000000 },
      bhk: [],
      propertyType: [],
      amenities: [],
      furnishing: [],
      possessionStatus: 'All',
      reraApproved: false,
      vastuCompliant: false,
      sortBy: 'relevance'
    });
    setSearchQuery('');
    setSelectedCity('');
    setSelectedArea('');
  };

  const bhkOptions = [1, 2, 3, 4, 5, 6];
  const priceRanges = [
    { label: 'Under ₹25L', min: 0, max: 2500000 },
    { label: '₹25L - ₹50L', min: 2500000, max: 5000000 },
    { label: '₹50L - ₹1Cr', min: 5000000, max: 10000000 },
    { label: '₹1Cr - ₹2Cr', min: 10000000, max: 20000000 },
    { label: '₹2Cr - ₹5Cr', min: 20000000, max: 50000000 },
    { label: 'Above ₹5Cr', min: 50000000, max: 100000000 }
  ];

  const areas = {
    'Mumbai': ['Bandra West', 'Andheri West', 'Powai', 'Worli', 'Lower Parel', 'Bandra East', 'Khar', 'Juhu'],
    'Delhi': ['Dwarka', 'Vasant Vihar', 'Saket', 'Hauz Khas', 'Greater Noida', 'Noida', 'Gurgaon'],
    'Bangalore': ['Whitefield', 'Koramangala', 'HSR Layout', 'Electronic City', 'Sarjapur', 'Indiranagar', 'JP Nagar'],
    'Hyderabad': ['Gachibowli', 'Hitech City', 'Banjara Hills', 'Jubilee Hills', 'Madhapur', 'Kondapur'],
    'Pune': ['Hinjewadi', 'Wakad', 'Kharadi', 'Viman Nagar', 'Koregaon Park', 'Baner', 'Aundh']
  };

  return (
    <div className={`search-container ${className}`}>
      {/* Main Search Bar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by city, area, or locality"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input pl-10"
          />
        </div>
        
        <select
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
            setSelectedArea('');
          }}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">Select City</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        {selectedCity && areas[selectedCity as keyof typeof areas] && (
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select Area</option>
            {areas[selectedCity as keyof typeof areas].map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        )}

        <div className="flex gap-2">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 ${
              showAdvanced ? 'bg-primary-50 border-primary-300 text-primary-700' : ''
            }`}
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
          </button>
          
          <button
            onClick={handleSearch}
            className="btn-primary flex items-center space-x-2"
          >
            <Search className="h-5 w-5" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="border-t pt-6 space-y-6">
          {/* Transaction Type */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Transaction Type</h3>
            <div className="flex gap-4">
              {['Sale', 'Rent', 'Lease'].map(type => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="transactionType"
                    value={type}
                    checked={filters.transactionType === type}
                    onChange={(e) => setFilters({ ...filters, transactionType: e.target.value as 'Sale' | 'Rent' | 'Lease' })}
                    className="text-primary-600"
                  />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Price Range</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {priceRanges.map((range, index) => (
                <button
                  key={index}
                  onClick={() => setFilters({
                    ...filters,
                    priceRange: { min: range.min, max: range.max }
                  })}
                  className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                    filters.priceRange?.min === range.min && filters.priceRange?.max === range.max
                      ? 'bg-primary-100 border-primary-300 text-primary-700'
                      : 'border-gray-300 hover:border-primary-300'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div>
                <label className="form-label">Min Price (₹)</label>
                <input
                  type="number"
                  placeholder="Min Price"
                  value={filters.priceRange?.min || ''}
                  onChange={(e) => setFilters({
                    ...filters,
                    priceRange: { ...filters.priceRange!, min: parseInt(e.target.value) || 0 }
                  })}
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">Max Price (₹)</label>
                <input
                  type="number"
                  placeholder="Max Price"
                  value={filters.priceRange?.max || ''}
                  onChange={(e) => setFilters({
                    ...filters,
                    priceRange: { ...filters.priceRange!, max: parseInt(e.target.value) || 50000000 }
                  })}
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* BHK Selection */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Home className="h-5 w-5 mr-2" />
              BHK
            </h3>
            <div className="flex flex-wrap gap-3">
              {bhkOptions.map(bhk => (
                                 <button
                   key={bhk}
                   onClick={() => {
                     const currentBhk = filters.bhk || [];
                     if (currentBhk.includes(bhk)) {
                       setFilters({ ...filters, bhk: currentBhk.filter(b => b !== bhk) });
                     } else {
                       setFilters({ ...filters, bhk: [...currentBhk, bhk] });
                     }
                   }}
                   className={`px-4 py-2 rounded-lg border transition-colors flex items-center space-x-2 ${
                     filters.bhk?.includes(bhk)
                       ? 'bg-primary-100 border-primary-300 text-primary-700'
                       : 'border-gray-300 hover:border-primary-300'
                   }`}
                 >
                   <span>{bhk === 6 ? '5+' : bhk}</span>
                   <span className="text-sm">BHK</span>
                 </button>
              ))}
            </div>
          </div>

          {/* Property Type */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Property Type</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {propertyTypes.map(type => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
                  <input
                    type="checkbox"
                    checked={filters.propertyType?.includes(type) || false}
                    onChange={(e) => {
                      const currentTypes = filters.propertyType || [];
                      if (e.target.checked) {
                        setFilters({ ...filters, propertyType: [...currentTypes, type] });
                      } else {
                        setFilters({ ...filters, propertyType: currentTypes.filter(t => t !== type) });
                      }
                    }}
                    className="text-primary-600"
                  />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Furnishing */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Furnishing</h3>
            <div className="flex gap-4">
              {furnishingTypes.map(type => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.furnishing?.includes(type) || false}
                    onChange={(e) => {
                      const currentFurnishing = filters.furnishing || [];
                      if (e.target.checked) {
                        setFilters({ ...filters, furnishing: [...currentFurnishing, type] });
                      } else {
                        setFilters({ ...filters, furnishing: currentFurnishing.filter(f => f !== type) });
                      }
                    }}
                    className="text-primary-600"
                  />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Possession Status */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Possession Status</h3>
            <div className="flex gap-4">
              {['Ready to Move', 'Under Construction', 'All'].map(status => (
                <label key={status} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="possessionStatus"
                    value={status}
                    checked={filters.possessionStatus === status}
                    onChange={(e) => setFilters({ ...filters, possessionStatus: e.target.value as 'Ready to Move' | 'Under Construction' | 'All' })}
                    className="text-primary-600"
                  />
                  <span className="text-gray-700">{status}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Indian Specific Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Special Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
                <input
                  type="checkbox"
                  checked={filters.reraApproved || false}
                  onChange={(e) => setFilters({ ...filters, reraApproved: e.target.checked })}
                  className="text-primary-600"
                />
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <span className="font-medium text-gray-700">RERA Approved</span>
                  <p className="text-sm text-gray-500">Government verified properties</p>
                </div>
              </label>
              
              <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
                <input
                  type="checkbox"
                  checked={filters.vastuCompliant || false}
                  onChange={(e) => setFilters({ ...filters, vastuCompliant: e.target.checked })}
                  className="text-primary-600"
                />
                <Home className="h-5 w-5 text-orange-600" />
                <div>
                  <span className="font-medium text-gray-700">Vastu Compliant</span>
                  <p className="text-sm text-gray-500">Traditional Indian architecture</p>
                </div>
              </label>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {amenities.slice(0, 16).map(amenity => (
                <label key={amenity} className="flex items-center space-x-2 cursor-pointer p-2 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
                  <input
                    type="checkbox"
                    checked={filters.amenities?.includes(amenity) || false}
                    onChange={(e) => {
                      const currentAmenities = filters.amenities || [];
                      if (e.target.checked) {
                        setFilters({ ...filters, amenities: [...currentAmenities, amenity] });
                      } else {
                        setFilters({ ...filters, amenities: currentAmenities.filter(a => a !== amenity) });
                      }
                    }}
                    className="text-primary-600"
                  />
                  <span className="text-sm text-gray-700">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Sort By</h3>
            <select
              value={filters.sortBy}
                             onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as 'relevance' | 'price-low' | 'price-high' | 'newest' | 'oldest' | 'area-low' | 'area-high' })}
              className="form-input max-w-xs"
            >
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="area-low">Area: Low to High</option>
              <option value="area-high">Area: High to Low</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t">
            <button
              onClick={handleSearch}
              className="btn-primary flex-1"
            >
              Search Properties
            </button>
            <button
              onClick={handleReset}
              className="btn-outline flex-1"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;