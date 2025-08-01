import { create } from 'zustand';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

export const useAuthStore = create((set) => ({
  // State
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],

  // Actions
  checkAuth: async () => {
    try {
      const res = await api.get('/auth/check');
      set({ authUser: res.data });
    } catch (error) {
      console.log('Error in checkAuth:', error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  // signup: async (data) => {
  //   const navigate = useNavigate;
  //   set({ isSigningUp: true });
  //   try {
  //     const res = await api.post('/auth/sign-up', data);
  //     set({ authUser: res.data });
  //     toast.success('Account created successfully');
  //     navigate ("/login");
  //   } catch (error) {
  //     toast.error(error.response?.data?.message || 'Signup failed');
  //   } finally {
  //     set({ isSigningUp: false });
  //   }
  // },

  signup: async (data, navigate) => {
    set({ isSigningUp: true });
    try {
      const res = await api.post('/auth/sign-up', data);
      // set({ authUser: res.data });
      toast.success('Account created successfully');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
    } finally {
      set({ isSigningUp: false });
    }
  },
  

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await api.post('/auth/log-in', data);
      set({ authUser: res.data });
      toast.success('Logged in successfully');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await api.post('/auth/log-out');
      set({ authUser: null });
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Logout failed');
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await api.put('/auth/update-profile', data);
      set({ authUser: res.data });
      toast.success('Profile updated successfully');
    } catch (error) {
      console.log('Error in updateProfile:', error);
      toast.error(error.response?.data?.message || 'Profile update failed');
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  setOnlineUsers: (users) => {
    set({ onlineUsers: users });
  },
}));