import React from "react";
import { Route, Routes, Router } from "react-router-dom";
import UserProfile from "./pages/user/UserProfilePage";

function App() {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/user" element={<UserProfile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
