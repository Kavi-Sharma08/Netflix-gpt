import Header from "./Header"
import { PROFILE_PIC } from "../utils/Constants"
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandleSignOut = ()=>{
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate('/')
      // Sign-out successful.
    }).catch((error) => {
      
      // An error happened.
    });

  }
  return (
    
    <div>
      <Header/>
      <div className="absolute flex items-center flex-col right-1 mx-4 my-1 w-44">
        <img className="w-14 h-14" src={PROFILE_PIC} alt="" srcset="" />
        <button className="border-2 border-black m-2 p-2 rounded-xl font-semibold hover:bg-red-600 transition-all transition-duration-300 hover:text-white" onClick={HandleSignOut}>Sign Out</button>
      </div>
    </div>
  )
}

export default Browse