import { Navigate } from "react-router-dom";
import SiteLayout from "src/layouts/SiteLayout";
import Introduction from "src/views/Introduction";
const routes = [
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { path: "/", element: <Navigate to="/introduction" /> },
      { path: "introduction", element: <Introduction /> },
    ],
  },
];
export default routes;
