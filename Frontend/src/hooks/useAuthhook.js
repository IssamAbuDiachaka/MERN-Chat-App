import { create } from "zustand";
import api from "../lib/axios";
import toast from "react-hot-toast";

const useAuthHook = create((set) => ({
  authUser: null,
  isCheckingAuth: false,
  isSigningUp: false,
  isSigningIn: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true });

    try {
      const response = await api.get("/auth/check");
      set({ authUser: response.data.user, isCheckingAuth: false });
    } catch (error) {
      console.error("Error checking authentication:", error);
      set({ isCheckingAuth: false });
    }
  },

  signUp: async (data) => {
    set({ isSigningUp: true });
    // validate input fields
    if (!data.username || !data.email || !data.password) {
      console.log("all requied fields must be provided");
      set({ isSigningUp: false });
      return;
    }
    // Now call backend enpoint and pass data
    try {
      const response = await api.post("/auth/sign-up", {
        data,
      });
      if (response.data) {
        toast.success("Sign Up Successful");
        return {
          success: true,
        };
      }
    } catch (error) {
      toast.error("Signup faild! try again.")
      console.log(error);
    } finally {
      set({ isSigningUp: false });
    }
  },

  signIn: async (data) => {
    set({isSigningIn: true})
    if (!data.email || !data.password){
      set({isSigningIn: false})
      return{error: "email and password required"};
    }

    try {
      const response = await api.post("/auth/sign-in", data);
      if (response.data){
        toast.success("Sign in successful!")
        return {
          success: true,
        }
      }
    } catch (error){
      console.error("Error signing in", error)
      return {error: "Sign in failed"}
    } finally {
      set({isSigningIn: false});
    }

  },

  
}));


export default useAuthHook;
