import Account from "../../components/accounts/Index";
import Contact from "./Contact";

export default {
  path: "/account",
  element: <Account />,
  children: [Contact],
};
