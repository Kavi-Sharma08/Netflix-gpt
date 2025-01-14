import { BACKGROUND_IMG } from "../utils/Constants"
import { useState } from "react"
import Header from "./Header"
const Login = () => {
  const [IsSignIn, setIsSignIn] = useState(true)
  const HandleSignUpForm = ()=>{
    setIsSignIn(!IsSignIn);

  }
  return (
    <div>
      <Header />
      <div>
        {/* Background Image */}
        <img src={BACKGROUND_IMG} className="w-full h-screen object-cover" alt="Background" />

        {/* Form */}
        <form
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-3/12 min-h-[540px] bg-black bg-opacity-85 p-4 rounded shadow-lg z-10"
        >
          <div className="font-bold text-3xl text-white flex justify-center my-6">
            <h3>{IsSignIn ? "Sign in" : "Sign up"}</h3>
          </div>
          {!IsSignIn && <  input
            className="border border-white m-2 bg-black bg-opacity-55 p-2 rounded text-white"
            type="number"
            
            placeholder="Full name"
          />}
          {!IsSignIn && <  input
            className="border border-white m-2 bg-black bg-opacity-55 p-2 rounded text-white"
            type="text"
            name="Name"
            id="Name"
            placeholder="Phone Number"
          />}
          <input
            className="border border-white m-2 bg-black bg-opacity-55 p-2 rounded text-white"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="border border-white m-2 p-2 rounded bg-black bg-opacity-55 text-white"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button
            className="border border-black m-2 p-2 bg-red-600 text-white rounded hover:bg-red-700 my-5"
            type="submit"
          >
            {IsSignIn ? "Sign in" : "Sign up"}
          </button>
          <div>
            <h3 className="font-bold text-1xl text-white flex justify-center my-2">OR</h3>
            <button className="border border-black  bg-white text-black brightness-75 rounded w-full p-2 hover:bg-transparent hover:text-white hover:transition duration-300 hover:border-white my-3"
            type="submit">Use a sign in button</button>
            <h3 className="text-white hover:underline text-center cursor-pointer">Forgot Password ?</h3>
          </div>
          <div className="flex items-center my-6 mx-2">
            <input className=" h-5 w-5" type="checkbox" name="" id="" /><label className = "text-white mx-1" htmlFor="">Remember me</label>
          </div>
          <div className="flex items-center">
            <span className="text-white">{IsSignIn ? "New to Netflix?" : "Already Registered?"}</span>
            <span onClick={HandleSignUpForm} className="font-bold text-white hover:underline mx-2 cursor-pointer">{IsSignIn ? "Sign Up" : "Sign In"}</span>
          </div>
          
        </form>
      </div>
    </div>


    
  )
}

export default Login