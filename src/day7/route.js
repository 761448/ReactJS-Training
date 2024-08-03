import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./component/home";
import User from "./component/user";

export default function RouteDemo() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="user" element={<User />} />
    </Routes>
  );
}
