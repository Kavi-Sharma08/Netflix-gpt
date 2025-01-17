import { LOGO, PROFILE_PIC } from "../utils/Constants"
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate("/browse")
        
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, [])
  return (
    <div className="absolute px-9 py-2 bg-gradient-to-br from-black bg-cover z-10" >
      <img className="w-60 brightness-125" src={LOGO} />


    </div>
  )
}

export default Header