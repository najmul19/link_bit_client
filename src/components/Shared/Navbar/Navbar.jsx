
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const linkClass = "text-sm px-3 py-1 rounded hover:bg-gray-100";
  const activeClass = "text-sm px-3 py-1 rounded bg-gray-200";

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {user && (
            <NavLink
              to="/app/dashboard"
              className={({ isActive }) => (isActive ? activeClass : linkClass)}
            >
              Dashboard
            </NavLink>
          )}
        </div>

        <div className="flex items-center gap-3">
          {user && <span className="text-sm text-gray-600">{user.email}</span>}

          {user ? (
            <button
              onClick={handleLogout}
              className="text-sm px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? activeClass : linkClass
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? activeClass : linkClass
                }
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
