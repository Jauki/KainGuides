import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserProfile from "./pages/user/UserProfile";

// Defines Routes and is used in index.tsx
export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/user",
    element: <UserProfile/>
  }
]);