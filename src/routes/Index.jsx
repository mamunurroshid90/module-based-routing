import { createBrowserRouter } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";
import accounts from "./accounts/Index";
import contact from "./accounts/Contact";

const router = createBrowserRouter([
  Registration,
  Login,
  Home,
  accounts,
  contact,
]);

export default router;
