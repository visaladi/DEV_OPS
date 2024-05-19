import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ReadPage from "./pages/ReadPage";
import HomePage from "./pages/HomePage";
import WritePage from "./pages/WritePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { UserModel } from "./models/user.model";

import * as UserApi from "./utils/users.api";
import ManagePage from "./pages/ManagePage";
import Footer from "./components/Footer";

function App() {
  const [loggedInUser, setLoggedInUser] = useState<UserModel | null>(null);

  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        const user = await UserApi.getLoggedInUser();
        setLoggedInUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLoggedInUser();
  }, []);
  return (
    <div>
      <Router>
        <Navbar
          loggedInUser={loggedInUser}
          onLogoutSuccessful={() => {
            setLoggedInUser(null);
          }}
        ></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/write"
            element={
              loggedInUser ? (
                <WritePage loggedInUser={loggedInUser.username} />
              ) : (
                <LoginPage
                  onLoginSuccessful={(user) => {
                    setLoggedInUser(user);
                  }}
                />
              )
            }
          />
          <Route
            path="/read"
            element={
              loggedInUser ? (
                <ReadPage />
              ) : (
                <LoginPage
                  onLoginSuccessful={(user) => {
                    setLoggedInUser(user);
                  }}
                />
              )
            }
          />
          <Route
            path="/login"
            element={
              <LoginPage
                onLoginSuccessful={(user) => {
                  setLoggedInUser(user);
                }}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <SignupPage
                onSignupSuccessful={(user) => {
                  setLoggedInUser(user);
                }}
              />
            }
          />
          <Route
            path="/manage"
            element={
              loggedInUser ? (
                <ManagePage loggedInUser={loggedInUser.username}></ManagePage>
              ) : (
                <LoginPage
                  onLoginSuccessful={(user) => {
                    setLoggedInUser(user);
                  }}
                />
              )
            }
          />
          <Route path="*" element={<h1>Page not Found</h1>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
