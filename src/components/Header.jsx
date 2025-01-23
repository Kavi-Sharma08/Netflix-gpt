import {LOGO } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { uid, displayName, email , photoURL } = user;

        // Dispatch user update to Redux
        dispatch(addUser({ uid, email, displayName , photoURL }));
        

        // Ensure the user state is updated before navigating
        navigate("/browse"); // Navigate only after the state is updated
      } else {
        // Remove user from Redux state
        dispatch(removeUser());

        // Navigate to login page
        navigate("/");
      }
    });

    // Clean up the subscription to avoid memory leaks
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute  bg-gradient-to-br from-black bg-cover z-10 sm:w-full">
      <img className="sm:w-36 w-28 brightness-125 sm:block hidden" src={LOGO} alt="Logo" />
    </div>
  );
};

export default Header;
