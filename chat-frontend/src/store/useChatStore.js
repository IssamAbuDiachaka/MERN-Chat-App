import { create } from 'zustand';
import axios from 'axios';
import toast from 'react-hot-toast';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

export const useChatStore = create((set, get) => ({
  // State
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  // Actions
  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await api.get('/message/chats');
      set({ users: res.data.data });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to load users');
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await api.get(`/message/getmessages/${userId}`);
      set({ messages: res.data.data.messages });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to load messages');
    } finally {
      set({ isMessagesLoading: false });
    }
  },



  setSelectedUser: (selectedUser) => set({ selectedUser }),

  // Socket.io methods (will be implemented later)
  subscribeToMessages: () => {
    // Will implement with Socket.io
  },

  unsubscribeFromMessages: () => {
    // Will implement with Socket.io
  },
}));