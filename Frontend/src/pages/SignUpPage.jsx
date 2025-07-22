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
import { Link } from "react-router-dom";
import AuthSkeleton from "../components/AuthSkeleton";
import useAuthHook from "../hooks/useAuthhook";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {signUp, isSigningUp} = useAuthHook();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    avater: ""
  });

  const handleUserDataSubmit = async (e) => {
    e.preventDefault();
    const result = await signUp(userData)
    if (result.success) {
      navigate ("/signin");
    } else {
      toast.error("Failed to sign up try again.");
    }
  }


  // if (isSigningUp){
  //   <div>
  //     <div>
        
  //     </div>
  //   </div>
  // }

  return (
    <div className="w-full h-screen items-center pt-15 h-screen">
      <div className="grid md:grid-cols-2 border h-screen p-10">
        <div className="w-full flex flex-col items-center border p-4">
          <MessagesSquareIcon />
          <h2>Welcome</h2>
          <p>Create a new account</p>

          <form className="w-full relative p-8 space-y-4">

            {/* // username field */}
            <div className="relative flex w-full items-center">
              <User className="absolute insert-y-0 left-0 ml-1 size-5 opacity-30" />
              <label htmlFor="username" className="w-full">
                <input
                  type="text"
                  id="username"
                  placeholder="sahadev"
                  className="border rounded p-1 w-full border-gray-500/45 pl-7"
                  value={userData.username}
                  onChange={(e) => setUserData({ ...userData, username: e.target.value})}
                />
              </label>
            </div>

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
                  onChange={(e) => setUserData({ ...userData, email: e.target.value})}
                />
              </label>
            </div>

            {/* password field  */}
            <div className="relative flex w-full items-center">
              <Lock className="absolute insert-y-0 left-0 ml-1 size-5 opacity-30" />
              <label htmlFor="email" className="w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••••"
                  className="border rounded p-1 w-full border-gray-500/45 pl-7"
                  value={userData.password}
                  onChange={(e) => setUserData({  ...userData, password: e.target.value})}
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

              {/* avatar field */}
            <div className="relative flex w-full items-center">
              <Image className="absolute insert-y-0 left-0 ml-1 size-5 opacity-30" />
              <label htmlFor="email" className="w-full">
                <input
                  type="url"
                  id="url"
                  placeholder="Enter your avatar url"
                  className="border rounded p-1 w-full border-gray-500/45 pl-7"
                  value={userData.avater}
                  onChange={(e) => setUserData({...userData, avater: e.target.value})}
                />
              </label>
            </div>
              {/* submit button */}
            <div>
              <button type="submit" className="w-full p-3 bg-green-800 text-gray-300 rounded" onClick={handleUserDataSubmit}>
                Create an account
              </button>
            </div>
          </form>

          <div className="flex flex-wrap items-center space-x-2">
            <p>Have an account?</p>
            <Link to="/signin" className="underline cursor-pointer">
            Sign In
            </Link>
           </div>
        </div>

        <div className="w-full">
          <AuthSkeleton title={"Welcome to HackChat"} text={"Join our community of hackers to learn how to build the next web"}/>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;