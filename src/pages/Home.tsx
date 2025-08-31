import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Shield, Users, Award, MapPin, ArrowRight, CheckCircle, Home as HomeIcon } from 'lucide-react';
import SearchBar from '../components/search/SearchBar';
import PropertyCard from '../components/property/PropertyCard';
import FeaturedProjects from '../components/property/FeaturedProjects';
import { mockProperties, trendingAreas, popularSearches } from '../utils/mockData';
import { SearchFilters } from '../types/User';

const Home: React.FC = () => {
  const navigate = useNavigate();


  const handleSearch = (filters: Partial<SearchFilters>) => {
    // Navigate to properties page with search filters
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        queryParams.append(key, JSON.stringify(value));
      }
    });
    navigate(`/properties?${queryParams.toString()}`);
  };

  const handlePropertyClick = (propertyId: string) => {
    navigate(`/property/${propertyId}`);
  };

  const handleAreaClick = (city: string, area: string) => {
    navigate(`/properties?city=${city}&area=${area}`);
  };

  const handlePopularSearch = (search: string) => {
    navigate(`/properties?search=${encodeURIComponent(search)}`);
  };

  const trendingProperties = mockProperties.slice(0, 3);
  const recentProperties = mockProperties.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient hero-pattern text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Find Your Perfect Home in India
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 animate-slide-up">
              Discover millions of properties across India's major cities. Buy, sell, or rent with confidence.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl font-bold">10L+</div>
                <div className="text-blue-100">Properties Listed</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl font-bold">100+</div>
                <div className="text-blue-100">Cities Covered</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-blue-100">Expert Agents</div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <SearchBar onSearch={handleSearch} isExpanded={true} />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/properties?transactionType=Sale')}
              className="btn-primary"
            >
              Buy Property
            </button>
            <button
              onClick={() => navigate('/properties?transactionType=Rent')}
              className="btn-secondary"
            >
              Rent Property
            </button>
            <button
              onClick={() => navigate('/sell')}
              className="btn-outline"
            >
              Sell Property
            </button>
            <button
              onClick={() => navigate('/agents')}
              className="btn-accent"
            >
              Find Agents
            </button>
          </div>
        </div>
      </section>

      {/* Trending Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the most popular properties in your preferred locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onClick={() => handlePropertyClick(property.id)}
                variant="featured"
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/properties')}
              className="btn-primary"
            >
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* Trending Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the most sought-after locations across major cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingAreas.map((cityData) => (
              <div key={cityData.city} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{cityData.city}</h3>
                  <MapPin className="h-5 w-5 text-primary-600" />
                </div>
                <div className="space-y-2">
                  {cityData.areas.slice(0, 5).map((area) => (
                    <button
                      key={area}
                      onClick={() => handleAreaClick(cityData.city, area)}
                      className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="text-gray-700">{area}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => navigate(`/properties?city=${cityData.city}`)}
                  className="w-full mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  View all areas in {cityData.city}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Searches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Searches</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find properties based on popular search criteria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => handlePopularSearch(search)}
                className="bg-white rounded-lg p-4 text-left hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">{search}</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Recent Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recently Added Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out the latest properties added to our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onClick={() => handlePropertyClick(property.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PropertyHub?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make property transactions simple, secure, and transparent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Insights</h3>
              <p className="text-gray-600">Get real-time market trends and price analytics</p>
            </div>

            <div className="text-center group">
              <div className="bg-success-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-success-200 transition-colors">
                <Shield className="h-8 w-8 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">RERA Verified</h3>
              <p className="text-gray-600">All properties are RERA approved and verified</p>
            </div>

            <div className="text-center group">
              <div className="bg-accent-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-accent-200 transition-colors">
                <Users className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Agents</h3>
              <p className="text-gray-600">Connect with certified real estate professionals</p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust & Safety</h3>
              <p className="text-gray-600">Secure transactions with end-to-end support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Indian Real Estate Made Simple</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">RERA Compliance</h3>
                    <p className="text-gray-600">All properties verified under RERA regulations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Vastu Compliant</h3>
                    <p className="text-gray-600">Properties designed according to Vastu principles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">EMI Calculator</h3>
                    <p className="text-gray-600">Calculate EMI with bank-specific interest rates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Document Verification</h3>
                    <p className="text-gray-600">All legal documents verified by experts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <HomeIcon className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Find Your Dream Home</h3>
                  <p className="text-primary-100 mb-6">
                    Join millions of satisfied customers who found their perfect property
                  </p>
                  <button
                    onClick={() => navigate('/properties')}
                    className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Start Searching
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;