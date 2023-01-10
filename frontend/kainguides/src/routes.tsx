import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { DepartmentEnum } from "./common/departments";
import Dashboard from "./pages/dashboard/Dashboard";
import Room from "./pages/rooms/Room";
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
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/rooms/bwm",
    element: <Room description={"BWM"} headline={DepartmentEnum.Informatik} color={"bg-informatik"} />
  },
  {
    path: "/rooms/info",
    element: <Room description={"Informatik"} headline={DepartmentEnum.Informatik} color={"#2222FF"} />
  },
]);