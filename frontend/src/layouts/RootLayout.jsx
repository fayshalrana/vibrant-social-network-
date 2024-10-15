import { Outlet, useLocation, useRouteError } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../Actions/User";
import Register from "../pages/Register";
import { parseCookies } from 'nookies';

const RootLayout = () => {
  const location = useLocation();
  const error = useRouteError();
  const showNavbar = location.pathname !== "/login" && location.pathname !== "/register";
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Get cookies and token
  const cookies = parseCookies();
  const token = cookies.token;
  // console.log('Token:', token);

  // Inside your component
  useEffect(() => {
    if (token) {
      dispatch(loadUser());
    }
  }, [dispatch]);
  

  return (
    <>
      {token ? (
        <>
          {showNavbar && (
            <header className="w-full sticky top-0 z-50">
              <Navbar />
            </header>
          )}
          <main className="">
            {error ? <ErrorPage /> : <Outlet />}
          </main>
        </>
      ) : (
        <Register />
      )}
    </>
  );
};

export default RootLayout;
