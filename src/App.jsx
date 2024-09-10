import Dashboard from "./components/dashboard/Dashboard";
import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import NotFound from "./routes/NotFound";
import OnArticle from "./components/onArticle/OnArticle";
import NewArticle from "./components/newArticle/NewArticle";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home/:id",
      element: <OnArticle />,
    },
    {
      path: "/newArticle",
      element: <NewArticle />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
