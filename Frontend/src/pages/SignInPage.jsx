import {
  Eye,
  EyeOff,
  Image,
  Lock,
  MessageSquareIcon,
  MessagesSquareIcon,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthSkeleton from "../components/AuthSkeleton";
import useAuthHook from "../hooks/useAuthhook";
import toast from "react-hot-toast";

function SignInPage() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {signIn, setSignIn} = useAuthHook();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

 

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
      const result = await signIn(userData);
      if (result?.success){
        setTimeout(() => {
          navigate("/");
        }, 300);
      } else {
        toast.error("Invalid Credentials")
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="w-full h-screen items-center pt-15 h-screen">
      <div className="grid md:grid-cols-2 border h-screen p-10">
        <div className="w-full flex flex-col items-center border p-4">
          <MessagesSquareIcon />
          <h2>Welcome</h2>
          <p>Sign Into Your Account</p>
            {/* signin form */}
          <form className="w-full relative p-8 space-y-4">

              {/* email field */}
            <div className="relative flex w-full items-center">
              <MessageSquareIcon className="absolute insert-y-0 left-0 ml-1 size-5 opacity-30" />
              <label htmlFor="email" className="w-full">
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="border rounded p-1 w-full border-gray-500/45 pl-7"
                  value={userData.email}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                />
              </label>
            </div>

            {/* password field */}
            <div className="relative flex w-full items-center">
              <Lock className="absolute insert-y-0 left-0 ml-1 size-5 opacity-30" />
              <label htmlFor="password" className="w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••••"
                  className="border rounded p-1 w-full border-gray-500/45 pl-7"
                  value={userData.password}
                  onChange={(e) => setUserData({...userData, password: e.target.value})}
                />
              </label>
              {showPassword ? (
                <EyeOff
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute insert-y-0 right-0 mr-1 size-5 opacity-30"
                />
              ) : (
                <Eye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute insert-y-0 right-0 mr-1 size-5 opacity-30"
                />
              )}
            </div>

              {/* signIn button */}
            <div>
              <button type="submit" className="w-full p-3 bg-green-800 text-gray-300 rounded"
              onClick={handleFormSubmit}
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex flex-wrap items-center space-x-2">
            <p>Don't have an account?</p>
            <Link to="/signup" className="underline cursor-pointer">
            Sign Up
            </Link>
           </div>
        </div>

        <div className="w-full border-">
          <AuthSkeleton title={"Welcome to HackChat"} text={"Join our community of hackers to learn how to build the next web"}/>
        </div>
      </div>
    </div>
  );
}


export default SignInPage;