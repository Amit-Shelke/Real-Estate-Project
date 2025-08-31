import React, { useState } from 'react';
import { Plus, Home, Users, TrendingUp, Eye, Edit, Trash2, Heart } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { mockProperties } from '../utils/mockData';
import { formatPrice } from '../utils/calculation';


const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('properties');

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">Please log in to access your dashboard</p>
          <a
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </a>
        </div>
      </div>
    );
  }

  // Mock user properties (in real app, this would come from API)
  const userProperties = mockProperties.slice(0, 2);

  const stats = {
    totalProperties: userProperties.length,
    totalViews: 1234,
    totalLeads: 45,
    totalRevenue: 2500000
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome, {user.name}!</h1>
              <p className="text-gray-600">Manage your properties and track performance</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="h-5 w-5" />
              <span>Add Property</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        {(user.userType === 'Seller' || user.userType === 'Agent') && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Total Properties</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalProperties}</p>
                </div>
                <Home className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Total Views</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalViews.toLocaleString()}</p>
                </div>
                <Eye className="h-8 w-8 text-green-600" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Total Leads</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalLeads}</p>
                </div>
                <Users className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">₹{(stats.totalRevenue / 100000).toFixed(1)}L</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('properties')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'properties'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                My Properties
              </button>
              <button
                onClick={() => setActiveTab('favorites')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'favorites'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Favorites
              </button>
              {(user.userType === 'Seller' || user.userType === 'Agent') && (
                <button
                  onClick={() => setActiveTab('leads')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === 'leads'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Leads
                </button>
              )}
            </nav>
          </div>

          <div className="p-6">
            {/* Properties Tab */}
            {activeTab === 'properties' && (
              <div>
                {userProperties.length === 0 ? (
                  <div className="text-center py-12">
                    <Home className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Properties Listed</h3>
                    <p className="text-gray-600 mb-4">Start by adding your first property</p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Add Property
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {userProperties.map((property) => (
                      <div key={property.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <img
                              src={property.images[0]}
                              alt={property.title}
                              className="h-16 w-16 rounded-lg object-cover"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">{property.title}</h4>
                              <p className="text-gray-600">{property.location.area}, {property.location.city}</p>
                              <p className="text-blue-600 font-medium">
                                {formatPrice(property.price, property.transactionType)}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                              <Eye className="h-5 w-5" />
                            </button>
                            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                              <Edit className="h-5 w-5" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Favorites Tab */}
            {activeTab === 'favorites' && (
              <div>
                {user.favorites.length === 0 ? (
                  <div className="text-center py-12">
                    <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Favorites Yet</h3>
                    <p className="text-gray-600 mb-4">Save properties you like to view them here</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mockProperties
                      .filter(property => user.favorites.includes(property.id))
                      .map((property) => (
                        <div key={property.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex space-x-4">
                            <img
                              src={property.images[0]}
                              alt={property.title}
                              className="h-20 w-20 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">{property.title}</h4>
                              <p className="text-gray-600">{property.location.area}, {property.location.city}</p>
                              <p className="text-blue-600 font-medium">
                                {formatPrice(property.price, property.transactionType)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}

            {/* Leads Tab */}
            {activeTab === 'leads' && (user.userType === 'Seller' || user.userType === 'Agent') && (
              <div>
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Leads Yet</h3>
                  <p className="text-gray-600">Leads will appear here when buyers contact you</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;