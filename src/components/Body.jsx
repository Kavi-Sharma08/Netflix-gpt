
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
    
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>,
        },
        {
            path : "/browse",
            element : <Browse/>
        },
        {
          path: "/error",
          element : <Error/>
        }
    ])
  
  return (
    <div className='w-screen h-96'>
        <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body