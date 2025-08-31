import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import PropertyCard from '../components/property/PropertyCard';
import SearchBar from '../components/search/SearchBar';
import { mockProperties } from '../utils/mockData';
import { Property } from '../types/Property';
import { SearchFilters } from '../types/User';

const PropertyListings: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [properties] = useState<Property[]>(mockProperties);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(mockProperties);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Apply initial filters from URL params
    const cityParam = searchParams.get('city');
    if (cityParam) {
      const filtered = mockProperties.filter(property => 
        property.location.city.toLowerCase().includes(cityParam.toLowerCase())
      );
      setFilteredProperties(filtered);
    }
  }, [searchParams]);

  const handleSearch = (filters: Partial<SearchFilters>) => {
    let filtered = properties;

    // Apply filters
    if (filters.city) {
      filtered = filtered.filter(property =>
        property.location.city.toLowerCase().includes(filters.city!.toLowerCase()) ||
        property.location.area.toLowerCase().includes(filters.city!.toLowerCase())
      );
    }

    if (filters.transactionType && filters.transactionType !== 'All') {
      filtered = filtered.filter(property => property.transactionType === filters.transactionType);
    }

    if (filters.priceRange) {
      filtered = filtered.filter(property =>
        property.price >= filters.priceRange!.min && property.price <= filters.priceRange!.max
      );
    }

    if (filters.bhk && filters.bhk.length > 0) {
      filtered = filtered.filter(property => filters.bhk!.includes(property.details.bhk));
    }

    if (filters.propertyType && filters.propertyType.length > 0) {
      filtered = filtered.filter(property => filters.propertyType!.includes(property.propertyType));
    }

    // Apply sorting
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          filtered.sort((a, b) => new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime());
          break;
        case 'oldest':
          filtered.sort((a, b) => new Date(a.listedDate).getTime() - new Date(b.listedDate).getTime());
          break;
      }
    }

    setFilteredProperties(filtered);
  };

  const handlePropertyClick = (propertyId: string) => {
    window.location.href = `/property/${propertyId}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {filteredProperties.length} Properties Found
            </h1>
            <p className="text-gray-600">Showing properties in your selected area</p>
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>

            {/* View Mode */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>

            {/* Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 bg-white rounded-lg shadow-md p-6 h-fit">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Refine Search</h3>
              <SearchBar onSearch={handleSearch} className="shadow-none p-0" />
            </div>
          )}

          {/* Properties Grid/List */}
          <div className="flex-1">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
                <p className="text-gray-600">Try adjusting your search criteria</p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onClick={() => handlePropertyClick(property.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListings;