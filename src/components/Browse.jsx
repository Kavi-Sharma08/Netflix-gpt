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
import { Button } from "./ui/button";
import { toggleGptSearch } from "@/utils/gptSlice";



const Browse = () => {
  const [isLoading, setIsLoading] = useState(true);

  const userProfile = useSelector((store) => store.user);
  const Showgpt = useSelector((store)=>store.gpt.showGptSearch)
  
  
  useEffect(() => {
    if (userProfile) {
      setIsLoading(false); // Mark as loaded once userProfile is available
    }
    
  }, [userProfile]);
  const { photoUrl, displayName } = userProfile || {};
  
  
  const dispatch = useDispatch();
  useNowPlayingMovies();
  const HandleGpt = ()=>{
    dispatch(toggleGptSearch())
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
      
      <div className="absolute flex items-center flex-col right-1 mx-4 my-1 w-44">
        <Button variant="secondary" className="my-2 z-20" onClick = {HandleGpt}>Gpt Search</Button>
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
        <button className="z-20 border-2 border-black m-2 p-2 rounded-xl font-semibold hover:bg-red-600 transition-all transition-duration-300 text-purple-500 hover:text-white" onClick={HandleSignOut}>Sign Out</button>
      </div>
      {
        Showgpt ? <GptSearch/> : 
        <>
          <MainContainer />
          <SecondaryContainer />
        </>

      }
      
    </div>
  )
}

export default Browse