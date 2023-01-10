import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserProfilePage from "./pages/user/UserProfilePage";

// Defines Routes and is used in index.tsx
export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/user",
    element: <UserProfilePage />
  }
]);