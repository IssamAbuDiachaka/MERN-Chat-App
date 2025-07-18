import { create } from "zustand";

const useAuthHook = create((set) => ({
  authUser: null,
  isCheckingAuth: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true });

    try {
      const response = await fetch("/api/auth/check");
      const data = await response.json();

      set({
        authUser: data.user || null,
        isCheckingAuth: false,
      });
    } catch (error) {
      console.error("Error checking authentication:", error);
      set({ isCheckingAuth: false });
    }
  },
}));

export default useAuthHook;
