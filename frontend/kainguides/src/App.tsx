import React from "react";
import { Route, Routes, Router } from "react-router-dom";
import UserProfile from "./pages/user/UserProfilePage";
import GuideProvider from "./setup/contextManager/GuideProvider";

function App() {
  return (
    <div>
        <div className="w-screen h-screen">
          <Routes>
            <Route path="/user" element={<UserProfile />}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
