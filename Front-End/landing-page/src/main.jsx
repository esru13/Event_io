import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Features from './pages/Features.jsx';
import About from './pages/About.jsx';
import How from './pages/How.jsx';
import Testimonial from './pages/Testimonial.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/blogs",
        element: <Blog/>
      },
      {
        path: "/features",
        element: <Features/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/how",
        element: <How/>
      },
      {
        path: "/testimonial",
        element: <Testimonial/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
