import { BACKGROUND_IMG, PROFILE_PIC } from "../utils/Constants"
import { useRef, useState } from "react"
import Header from "./Header"
import { CheckValidData } from "../utils/validate"
import Footer from "./Footer"
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
    <div>
      <Header />
      <div>
        {/* Background Image */}
        <img src={BACKGROUND_IMG} className="w-full h-screen object-cover" alt="Background" />

        {/* Form */}
        <form onSubmit={(e) => { e.preventDefault() }}
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-3/12 min-h-[540px] bg-black bg-opacity-85 p-4 rounded shadow-lg z-10"
        >
          <div className="font-bold text-3xl text-white flex justify-center my-6">
            <h3>{IsSignIn ? "Sign in" : "Sign up"}</h3>
          </div>
          {!IsSignIn && <  input
            className="border border-white m-2 bg-black bg-opacity-55 p-2 rounded text-white"
            type="text"
            placeholder="Full name"
            ref={fullName}
          />}

          {!IsSignIn && <  input
            className="border border-white m-2 bg-black bg-opacity-55 p-2 rounded text-white"
            type="text"
            name="Name"
            id="Name"
            placeholder="Phone Number"
            ref={phone}
          />}
          {!IsSignIn && error == "Invalid Phone Number" ? <p className="text-red-600 m-2 px-1 font-semibold">{error}</p> : ""}
          <input
            className="border border-white m-2 bg-black bg-opacity-55 p-2 rounded text-white"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            ref={email}

          />


          <input
            className="border border-white m-2 p-2 rounded bg-black bg-opacity-55 text-white"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={password}

          />
          {error ? <p className="text-red-600 font-semibold m-2 px-1">{error}</p> : ""}
          <button
            className="border border-black m-2 p-2 bg-red-600 text-white rounded hover:bg-red-700 my-5"
            type="submit" onClick={HandleSignInButton}
          >
            {IsSignIn ? "Sign in" : "Sign up"}
          </button>
          <div>
            <h3 className="font-bold text-1xl text-white flex justify-center my-2">OR</h3>
            <button className="border border-black  bg-white text-black brightness-75 rounded w-full p-2 hover:bg-transparent hover:text-white hover:transition duration-300 hover:border-white my-3"
              type="submit" onClick={HandleGoogle}>Use Google Account to Sign up</button>
            <h3 className="text-white hover:underline text-center cursor-pointer">Forgot Password ?</h3>
          </div>
          <div className="flex items-center my-6 mx-2">
            <input className=" h-5 w-5" type="checkbox" name="" id="" /><label className="text-white mx-1" htmlFor="">Remember me</label>
          </div>
          <div className="flex items-center">
            <span className="text-white">{IsSignIn ? "New to Netflix?" : "Already Registered?"}</span>
            <span onClick={HandleSignUpForm} className="font-bold text-white hover:underline mx-2 cursor-pointer">{IsSignIn ? "Sign Up" : "Sign In"}</span>
          </div>

        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>



  )
}

export default Login