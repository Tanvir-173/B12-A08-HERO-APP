import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './componets/root/Root.jsx';
import Home from './componets/Home/Home.jsx';
import Appdetails from './componets/appdetails/Appdetails.jsx';
import AllApps from './componets/Allaps/Allaps.jsx';


const fetchCards = fetch("/Data.json").then(res => res.json())


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Suspense><Home fetchCards={fetchCards}></Home></Suspense>
      },
      {
        path: 'app/:appId',
        // loader:({params})=>fetch(`/Data.json/${params.appId}`),

        loader: async ({ params }) => {
          const res = await fetch("/Data.json");
          const data = await res.json();
          const app = data.find((item) => item.id === parseInt(params.appId));
          return app;
        },
        Component: Appdetails
      },
      {
        path:'apps',
        loader:()=>fetch("/Data.json"),
        Component:AllApps
      }

    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
