import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main/MainLayout";
import AuthLayout from "./layouts/auth/AuthLayout";
import Home from "./layouts/main/pages/Home";
import About from "./layouts/main/pages/About";
import Login from "./layouts/auth/pages/Login";
import Register from "./layouts/auth/pages/Register";
import { MainRouter } from "./router";


function App() {
  return <MainRouter />;
}

export default App;
