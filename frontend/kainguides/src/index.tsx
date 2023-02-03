import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { router } from './routes';

import UserProfile from './pages/user/UserProfilePage';
import GuideProvider from './setup/contextManager/GuideProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <GuideProvider>
      <RouterProvider router={router} />
    </GuideProvider>
  </React.StrictMode>
);


