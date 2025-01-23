
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
    <div className=' sm:min-h-screen sm:min-w-screen  m-0 p-0 min-h-screen min-w-screen '>
        <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body