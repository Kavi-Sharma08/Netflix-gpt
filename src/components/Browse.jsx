import Header from "./Header"
import { PROFILE_PIC } from "../utils/Constants"
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useEffect, useState } from "react";


const Browse = () => {
  const [Gpt, setGpt] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const userProfile = useSelector((store) => store.user);
  
  useEffect(() => {
    if (userProfile) {
      setIsLoading(false); // Mark as loaded once userProfile is available
    }
    
  }, [userProfile]);
  console.log("Loading " , isLoading)
  console.log("Object",userProfile)
  const { photoUrl, displayName } = userProfile || {};
  console.log("photoUrl ",photoUrl)
  
  const dispatch = useDispatch();
  useNowPlayingMovies();
  const HandleGpt = ()=>{
    setGpt(!Gpt);
  }
  const HandleSignOut = () => {
    signOut(auth).then(() => {

      dispatch(removeUser());
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")

      // An error happened.
    });

  }
  return (

    <div>
      <Header />
      { Gpt && <GptSearch />}


      <div className="absolute flex items-center flex-col right-1 mx-4 my-1 w-44">
        
        <button type="button" className="bg-red-700 border  font-semibold p-2 m-2" onClick={HandleGpt}>GPT Search</button>


        {!isLoading ? (
          photoUrl ? (
            <img className="w-14 h-14" src={photoUrl} alt="User Profile" />
          ) : (
            <img className="w-14 h-14" src={PROFILE_PIC} alt="Default Profile" />
          )
        ) : (
          <p>Loading...</p>
        )}
        <h1 className="font-bold text-zinc-50">
          {displayName || "Guest"}
        </h1>
        <button className="z-20 border-2 border-black m-2 p-2 rounded-xl font-semibold hover:bg-red-600 transition-all transition-duration-300 text-white" onClick={HandleSignOut}>Sign Out</button>
      </div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse