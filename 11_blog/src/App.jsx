import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="flex flex-col min-h-screen">
      {/* Header - Fixed at the Top */}
      <Header className="fixed top-0 left-0 w-full z-50" />

      {/* Main Content - Pushes Footer Down When Needed */}
      <main className="flex-grow mt-16 p-4">
        <Outlet />
      </main>

      {/* Footer - Sticks to Bottom but Scrolls When Content Overflows */}
      <Footer className="sticky bottom-0 left-0 w-full" />
    </div>
  ) : null;
}

export default App;
