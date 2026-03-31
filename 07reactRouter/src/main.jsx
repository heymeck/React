import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Contact from './Components/Contact/Contact.jsx'
import './index.css'
import User from './Components/User/User'


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Header,Footer,Home,About,Contact,App} from "./impExp"
import Github,{github} from './Components/Github/Github'

// this is the first method to write the routes of the website
// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       { path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='user/:username' element={<User/>}/>
    <Route 
    loader={github}
    path='github' 
    element={<Github/>}/>
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
