import React from "react";
import "./css/App.css";
import Home from "./Pages/Home";
import LoginScreen from "./Pages/LoginScren";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./Components/PrivateRouter";
import Search from "./Pages/Search";
import Layout from "./Components/Layout";
import ManageProfiles from "./Components/Nav/ManageProfiles";
import Mylist from "./Pages/Mylist";
import Video from "./Components/VideoPlayer/Video";
import Subscription from "./Pages/Subscription";
import Star from "./Pages/Star";
import Register from "./Components/Register";

function App() {
  return (
    <div className="app">
      <link rel="icon" type="image/png" href="/Assets/title_icon.ico" />
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/profile" element={<ManageProfiles />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/mylist" element={<Mylist />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/star" element={<Star />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <PrivateRouter>
                <Home />
              </PrivateRouter>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
