import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import CameraPage from "@/pages/CameraPage";
import GalleryPage from "@/pages/GalleryPage";
import HistoryPage from "@/pages/HistoryPage";
import DocumentPage from "@/pages/DocumentPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "login", element: <LoginPage /> },
        { path: "signup", element: <SignupPage /> },
        { path: "camera", element: <CameraPage /> },
        { path: "gallery", element: <GalleryPage /> },
        { path: "history", element: <HistoryPage /> },
        { path: "document/:docu_id", element: <DocumentPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
