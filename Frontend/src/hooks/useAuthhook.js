import { create } from "zustand";
import api from "../lib/axios";
import toast from "daisyui/components/toast";

const useAuthHook = create((set) => ({
  authUser: null,
  isCheckingAuth: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true });

    try {
      const response = await api.get("/auth/check");
      set({authUser: response.data.user, isCheckingAuth: false});
    } catch (error) {
      console.error("Error checking authentication:", error);
      set({ isCheckingAuth: false });
    }
  },

  signUp: async (data) => {
    // validate input fields
    if  (!data.username || !data.email || !data.password){
        console.log("all requied fields must be provided");
        return;
    }
    // Now call backend enpoint and pass data
    try {
      const response = await api.post("/auth/sign-up", {
        data
      })
      if (response.data){
        return {
          success: true, 
        }
        toast.success("Sign Up Successful")
      }
    } catch (error){
      console.log(error);
    }
  }
}));

export default useAuthHook;
