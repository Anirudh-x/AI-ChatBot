import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from "./routes/HomePage.jsx"
import DashboardPage from "./routes/DashboardPage.jsx"
import ChatPage from "./routes/ChatPage.jsx"
import RootLayouts from './layouts/RootLayouts.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import SignInPage from './routes/SignInPage.jsx'
import SignUpPage from './routes/SignUpPage.jsx'


const router = createBrowserRouter([
  {
    element: <RootLayouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />
          },
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
