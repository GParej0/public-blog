import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx';
import PostDetails from './pages/PostDetailPage.tsx';
import NotFound from './components/NotFound.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "posts/:id",
        element: <PostDetails />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
