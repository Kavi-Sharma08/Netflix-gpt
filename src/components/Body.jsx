import { useEffect} from 'react'
import Browse from './Browse'
import Login from './Login'
import { auth } from '../utils/firebase'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'

const Body = () => {
    
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>,
        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ])
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const {uid , displayName , email} = user;
              dispatch(addUser({uid : uid , email : email , displayName : displayName}))
              
              
            } else {

                dispatch(removeUser());
               
              
            }
          });
    },[])
  return (
    <div className='w-screen h-96'>
        <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body