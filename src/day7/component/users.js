//import { Link } from "react-router-dom";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

export default function Users() {
  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div>
        {users.map((user) => {
          return (
            <>
              <Link to={`users/${user}`}>User {user} </Link>
              <div></div>
            </>
          );
        })}
      </div>
      <Routes>
        <Route path="users/:userId" element={<Users />} />
      </Routes>
    </div>
  );
}
