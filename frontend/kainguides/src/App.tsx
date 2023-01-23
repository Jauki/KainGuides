import React from "react";
import { Route, Routes, Router } from "react-router-dom";
import UserProfile from "./pages/user/UserProfilePage";
import GuideProvider from "./setup/contextManager/GuideProvider";

function App() {
  return (
      <GuideProvider>
        <div className="w-screen h-screen">

          <Routes>
            <Route path="/user" element={<UserProfile />}></Route>
          </Routes>
        </div>
      </GuideProvider>
  );
}

export default App;
