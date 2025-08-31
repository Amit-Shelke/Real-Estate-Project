import { useState, useEffect } from 'react';
import { User } from '../types/User';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock authentication check
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string): Promise<boolean> => {
    setIsLoading(true);
    // Mock login logic
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email,
      phone: '+91 98765 43210',
      userType: 'Buyer',
      favorites: [],
      recentlyViewed: [],
      lastActive: new Date().toISOString(),
      isVerified: true,
      isPremium: false,
      notifications: {
        email: true,
        sms: false,
        push: true,
        whatsapp: false
      },
      createdAt: new Date().toISOString()
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    setIsLoading(false);
    return true;
  };

  const register = async (userData: Partial<User>): Promise<boolean> => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name || '',
      email: userData.email || '',
      phone: userData.phone || '',
      userType: userData.userType || 'Buyer',
      favorites: [],
      recentlyViewed: [],
      lastActive: new Date().toISOString(),
      isVerified: false,
      isPremium: false,
      notifications: {
        email: true,
        sms: false,
        push: true,
        whatsapp: false
      },
      createdAt: new Date().toISOString()
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const toggleFavorite = (propertyId: string) => {
    if (!user) return;
    
    const updatedFavorites = user.favorites.includes(propertyId)
      ? user.favorites.filter(id => id !== propertyId)
      : [...user.favorites, propertyId];
    
    const updatedUser = { ...user, favorites: updatedFavorites };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return {
    user,
    isLoading,
    login,
    register,
    logout,
    toggleFavorite
  };
};