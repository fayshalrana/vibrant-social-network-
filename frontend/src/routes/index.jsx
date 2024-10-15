import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useEffect } from "react";
import Profile from "../pages/Profile";
// import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/user/:id",
        element: <Profile />,
        loader: ({ params }) => {
          return fetch(`http://localhost:4000/api/v1/user/${params.id}`, {
            credentials: 'include', // Ensure cookies (like authentication tokens) are sent with the request
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json(); // Parse the response as JSON and return it
            })
            .catch(error => {
              console.error('Error fetching user data:', error);
              return null; // Return null if there's an error to avoid crashing
            });
        }
        
      },
    ],
  },
]);