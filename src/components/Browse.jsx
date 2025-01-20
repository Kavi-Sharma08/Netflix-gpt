import Header from "./Header"
import { PROFILE_PIC } from "../utils/Constants"
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
const Browse = () => {
  const dispatch = useDispatch();
  useNowPlayingMovies();
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
      <GptSearch/>


      <div className="absolute flex items-center flex-col right-1 mx-4 my-1 w-44">
        <button type="button" className="bg-red-700 border  font-semibold p-2 m-2">GPT Search</button>


        <img className="w-14 h-14" src={PROFILE_PIC} />
        <button className="z-20 border-2 border-black m-2 p-2 rounded-xl font-semibold hover:bg-red-600 transition-all transition-duration-300 text-white" onClick={HandleSignOut}>Sign Out</button>
      </div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse