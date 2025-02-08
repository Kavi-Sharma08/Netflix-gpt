import { BACKGROUND_IMG, PROFILE_PIC } from "../utils/Constants"
import { useRef, useState } from "react"
import Header from "./Header"
import { CheckValidData } from "../utils/validate"

import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { addUser } from "../utils/userSlice"
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const fullName = useRef();
  const phone = useRef();
  const [IsSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null);


  const HandleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        // dispatch(addUser({displayName : user.displayName , photoURL : user.photoURL}))


      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const HandleSignInButton = () => {
    const message = CheckValidData(email, password, fullName, phone, IsSignIn);
    setError(message);
    if (message) return;

    if (!IsSignIn) {
      // Sign-Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          // Send verification email
          sendEmailVerification(user)
            .then(() => {
              alert("Verification email sent! Please check your inbox to verify your account.");
              setError("Please verify your email before logging in.");

            })
            .catch((error) => {
              setError(`Error sending email verification: ${error.message}`);
            });


          return updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: PROFILE_PIC,
          });
        })
        .then(() => {
          // Notify user to verify their email
          alert("Account created successfully. Please verify your email to complete the process.");
          setError("Account created. Verification email sent!");
        })
        .catch((error) => {
          setError(`Sign-up error: ${error.message}`);
        });
    }

    else {
      //Sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        }).then(() => {
          navigate('/browse')

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage)


        });

    }

  }

  const HandleSignUpForm = () => {
    setIsSignIn(!IsSignIn);

  }
  return (
    <div className="flex flex-col min-w-screen min-h-screen bg-black">
      <Header />
      <div className="flex justify-center items-center min-h-screen relative p-4 sm:p-8">
        {/* Background Image (hidden on small screens) */}
        <img
          src={BACKGROUND_IMG}
          className="absolute top-0 left-0 w-full h-full object-cover hidden sm:block"
          alt="Background"
        />

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className={`relative z-10 flex flex-col justify-center items-center bg-black bg-opacity-85 w-full max-w-[500px] sm:rounded-lg shadow-lg px-6 sm:px-8 py-8`}
        >
          <div className="w-full">
            <div className="text-center text-white font-bold sm:text-3xl text-2xl mb-6">
              <h3>{IsSignIn ? "Sign in" : "Sign up"}</h3>
            </div>

            {!IsSignIn && (
              <input
                className="border border-gray-500 bg-black bg-opacity-55 p-3 rounded text-white mb-4 w-full"
                type="text"
                placeholder="Full Name"
                aria-label="Full Name"
                ref={fullName}
              />
            )}

            {!IsSignIn && (
              <input
                className="border border-gray-500 bg-black bg-opacity-55 p-3 rounded text-white mb-4 w-full"
                type="text"
                placeholder="Phone Number"
                aria-label="Phone Number"
                ref={phone}
              />
            )}

            {error === "Invalid Phone Number" && (
              <p className="text-red-600 font-semibold mb-4">{error}</p>
            )}

            <input
              className="border border-gray-500 bg-black bg-opacity-55 p-3 rounded text-white mb-4 w-full"
              type="email"
              placeholder="Email"
              aria-label="Email"
              ref={email}
            />

            <input
              className="border border-gray-500 bg-black bg-opacity-55 p-3 rounded text-white mb-4 w-full"
              type="password"
              placeholder="Password"
              aria-label="Password"
              ref={password}
            />

            {error && <p className="text-red-600 font-semibold mb-4">{error}</p>}

            <button
              className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700 transition duration-200"
              type="submit"
              onClick={HandleSignInButton}
            >
              {IsSignIn ? "Sign in" : "Sign up"}
            </button>

            <div className="text-center text-white font-semibold mt-6 mb-4">OR</div>

            <button
              className="w-full border border-gray-400 bg-white text-black p-3 rounded hover:bg-transparent hover:text-white hover:border-white transition duration-200"
              type="button"
              onClick={HandleGoogle}
            >
              Use Google Account to {IsSignIn ? "Sign in" : "Sign up"}
            </button>

            <div className="text-center mt-4">
              <span className="text-white cursor-pointer hover:underline">
                Forgot Password?
              </span>
            </div>

            <div className="flex items-center mt-6">
              <input
                className="h-5 w-5"
                type="checkbox"
                id="rememberMe"
                aria-label="Remember Me"
              />
              <label htmlFor="rememberMe" className="text-white ml-2">
                Remember Me
              </label>
            </div>

            <div className="flex justify-center mt-6">
              <span className="text-white">
                {IsSignIn ? "New to Netflix?" : "Already Registered?"}
              </span>
              <span
                onClick={HandleSignUpForm}
                className="text-red-600 font-bold ml-2 cursor-pointer hover:underline"
              >
                {IsSignIn ? "Sign Up" : "Sign In"}
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>






  )
}

export default Login